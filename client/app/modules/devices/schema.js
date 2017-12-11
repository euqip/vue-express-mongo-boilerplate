import Vue from "vue"
import moment from "moment"
import { deviceTypes } from "./types"
import { validators } from "vue-form-generator"

import { find } from "lodash"

let _ = Vue.prototype._
//moment.locale("en")
module.exports = {
  // these translations are not dynamic
  // they are reported to the vue component instead of the schema
  id: "devices",
  title: "devices:Devices",

  table: {
    multiSelect: false,
    columns: [
      {
        title: "devices:ID",
        field: "code",
        visible: false,
        align: "left",
        formatter(value, model) {
          return model ? model.code : ""
        }
      },
      {
        title: "devices:Type",
        field: "type",
        formatter(value) {
          let type = find(deviceTypes, (type) => type.id == value)
          return type ? type.name : value
        }
      },
      {
        title: "devices:Address",
        field: "address"
      },
      {
        title: "devices:Owner",
        field: "name"
      },
      {
        title: "devices:Status",
        field: "status",
        formatter(value, model, col) {
          return value ? "<i class='fa fa-check'/>" : "<i class='fa fa-ban'/>"
        },
        align: "center"
      },
      {
        title: "devices:LastCommunication",
        field: "lastCommunication",
        formatter(value) {
          return moment(value).fromNow()
        }
      }
    ],

    rowClasses: function(model) {
      return {
        inactive: !model.status
      }
    }

  },

  form: {
    title: _("devices:EditDevice"),
    fields: [
      {
        type: "label",
        label: _("devices:ID"),
        model: "code",
        readonly: true,
        disabled: true,
        multi: false,
        get(model) {
          if (model.code)
            return model.code
          else
            return "devices:willBeGenerated"
        }
      },
      {
        type: "select",
        label: _("devices:Type"),
        model: "type",
        required: true,
        values: deviceTypes,
        default: "rasperry",
        validator: validators.required

      },
      {
        type: "input",
        label: _("devices:Name"),
        model: "name",
        featured: true,
        required: true,
        placeholder: "devices:DeviceName",
        validator: validators.string
      },
      {
        type: "input",
        label: _("devices:Description"),
        model: "description",
        featured: false,
        required: false,
        validator: validators.string
      },
      {
        type: "input",
        label: _("devices:Address"),
        model: "address",
        placeholder: "devices:AddressOfDevice",
        validator: validators.string,
      },
      {
        type: "label",
        label: _("devices:LastCommunication"),
        model: "lastCommunication",
        get(model) {
          return model && model.lastCommunication ? moment(model.lastCommunication).fromNow() : "-"
        }
      },
      {
        type: "switch",
        label: _("devices:Status"),
        model: "status",
        multi: true,
        default: 1,
        textOn: _("devices:Active"),
        textOff: _("devices:Inactive"),
        valueOn: 1,
        valueOff: 0
      }
    ]
  },

  options: {
    searchable: true,

    enableNewButton: true,
    enabledSaveButton: true,
    enableDeleteButton: true,
    enableCloneButton: false,

    validateAfterLoad: false, // Validate after load a model
    validateAfterChanged: false, // Validate after every changes on the model
    validateBeforeSave: true // Validate before save a model
  },

  events: {
    onSelect: null,
    onNewItem: null,
    onCloneItem: null,
    onSaveItem: null,
    onDeleteItem: null,
    onChangeItem: null,
    onValidated(model, errors, schema) {
      if (errors.length > 0)
        console.warn("Validation error in page! Errors:", errors, ", Model:", model)
    }
  },

  resources: {
    addCaption: "devices:AddNewDevice",
    saveCaption: "Save",
    cloneCaption: "Clone",
    deleteCaption: "Delete"
  }

}