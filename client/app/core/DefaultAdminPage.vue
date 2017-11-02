<template lang="pug">
  .card
    .modal.fade(id = "deviceedit" )
      .modal-dialog(role = "document")
        .modal-content
          .modal-header
            h5 {{"devices:editdevice" | i18n}}
          .modal-body
            .px-2.form(v-if="model")
              vue-form-generator(:schema='schema.form', :model='model', :options='options', :multiple="selected.length > 1", ref="form", :is-new-model="isNewModel")

              .errors.text-center
                div.alert.alert-danger(v-for="(item, index) in validationErrors", :key="index") {{ item.field.label }}:
                  strong {{ item.error }}
          .modal-footer
            .btn-group
              button.btn.btn-primary(@click="saveModel", :disabled="!enabledSave")
                i.px-1.fa.fa-save
                | {{ schema.resources.saveCaption || _("Save") }}
              button.btn.btn-outline-secondary(@click="cloneModel", :disabled="!enabledClone")
                i.px-1.fa.fa-copy
                | {{ schema.resources.cloneCaption || _("Clone") }}
              button.btn.btn-danger(@click="deleteModel", :disabled="!enabledDelete")
                i.px-1.fa.fa-trash
                | {{ schema.resources.deleteCaption || _("Delete") }}
              button.btn.btn-primary(@click="cancelEdit")
                i.px-1.fa.fa-save
                | {{ schema.resources.cancelCaption || _("Cancel") }}
    .card-header
      h1 {{ schema.title }}
      .d-flex.justify-content-end
        .mr-auto.p-2(v-if="enabledNew")
          button.btn.btn.outline.secondary(@click="newModel")
            i.px-1.fa.fa-plus
            | {{ schema.resources.addCaption || _("devices:Add") }}
        .p-2 {{ _("devices:SelectedOfAll", { selected: selected.length, all: rows.length } ) }}
    .card-body
      data-table(:schema="schema.table", :rows="rows", :order="order", :search="search", :selected="selected", :select="select", :select-all="selectAll")
      // modal tut: https://adamwathan.me/2016/01/04/composing-reusable-modal-dialogs-with-vuejs/


</template>

<script>
  import Vue from "vue";
  import { schema as schemaUtils } from "vue-form-generator";
  import DataTable from "./dataTable.vue";

  import { each, find, cloneDeep, isFunction } from "lodash";

  import { mapGetters, mapActions } from "vuex";

  export default {
    // i18nextNamespace seems not working, NS must be set at app level, within i18next module
    i18nextNamespace: "devices",
    components: {
      DataTable
    },

    props: [
      "schema",
      "selected",
      "rows"
    ],

    data() {
      return {
        order: {
          field: "id",
          direction: 1
        },
        modalShown :false,

        model: null,
        isNewModel: false
      };
    },

    computed: {
      ...mapGetters("session", {
        search: "searchText"
      }),

      options() 		{ return this.schema.options || {};	},

      enabledNew() 	{ return (this.options.enableNewButton !== false); },
      enabledSave() 	{ return (this.model && this.options.enabledSaveButton !== false); },
      enabledClone() 	{ return (this.model && !this.isNewModel && this.options.enableDeleteButton !== false); },
      enabledDelete() { return (this.model && !this.isNewModel && this.options.enableDeleteButton !== false); },

      validationErrors() {
        if (this.$refs.form && this.$refs.form.errors)
          return this.$refs.form.errors;

        return [];
      }
    },

    watch: {
      selected() {
        if (!this.isNewModel)
          this.generateModel();
      }

      /*
      model: {
        handler: function(newVal, oldVal) {
          if (newVal === oldVal) // call only if a property changed, not the model
            console.log("Model property changed!");
        },
        deep: true
      }
      */
    },

    methods: {

      toggleModal() {
        this.modalShown = !this.modalShown
        console.log ("Toggle modal")
        // use the jQuery method
        $('#deviceedit').modal('toggle')
        if (!this.modalShown) {
          // remove device selection
          this.$parent.clearSelection();
        }

      },

      select(event, row, add) {
        this.isNewModel = false;

        if (this.schema.table.multiSelect === true && (add || (event && event.ctrlKey))) {
          this.$parent.selectRow(row, true);
        } else {
          this.$parent.selectRow(row, false);
        }
        this.toggleModal()
      },

      selectAll(event) {
        this.isNewModel = false;

        let filter = Vue.filter("filterBy");
        let filteredRows = filter(this.rows, this.search);

        if (this.selected.length < filteredRows.length) {
          // Select all
          this.$parent.selectRow(filteredRows, false);
        } else {
          // Unselect all
          this.$parent.clearSelection();
        }
      },

      generateModel() {
        if (this.selected.length == 1) {
          this.model = cloneDeep(this.selected[0]);
        }
        else if (this.selected.length > 1) {
          this.model = schemaUtils.mergeMultiObjectFields(this.schema.form, this.selected);
        }
        else
          this.model = null;
      },

      newModel() {
        console.log("Create new model...");

        this.$parent.clearSelection();

        let newRow = schemaUtils.createDefaultObject(this.schema.form);
        this.isNewModel = true;
        this.model = newRow;

        this.$nextTick(() => {
          let el = document.querySelector("div.form input:nth-child(1):not([readonly]):not(:disabled)");
          if (el)
            el.focus();
        });
      },

      cloneModel() {
        console.log("Clone model...");
        let baseModel = this.model;
        this.$parent.clearSelection();

        let newRow = cloneDeep(baseModel);
        newRow.id = null;
        newRow.code = null;
        this.isNewModel = true;
        this.model = newRow;
        // do not toggle modal to enable some changes before saving
      },

      saveModel() {
        console.log("Save model...");
        if (this.options.validateBeforeSave === false ||  this.validate()) {

          if (this.isNewModel)
            this.$parent.saveRow(this.model)
          else
            this.$parent.updateRow(this.model)
          this.toggleModal()

        } else {
          // Validation error
        }
      },
      cancelEdit() {
        console.log("cancel device edition...")
        // close modal window
        this.toggleModal()
      },

      deleteModel() {
        if (this.selected.length > 0) {
          each(this.selected, (row) => this.$parent.removeRow(row) );
          this.toggleModal()
        }
      },

      validate()	{
        let res = this.$refs.form.validate();

        if (this.schema.events && isFunction(this.schema.events.onValidated)) {
          this.schema.events.onValidated(this.model, this.$refs.form.errors, this.schema);
        }

        if (!res) {
          // Set focus to first input with error
          this.$nextTick(() => {
            let el = document.querySelector("div.form tr.error input:nth-child(1)");
            if (el)
              el.focus();
          });
        }

        return res;
      }

    },

    created() {
    }

  };

</script>

<style lang="scss" scoped>
</style>
