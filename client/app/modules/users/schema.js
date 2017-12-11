import Vue from "vue"
import moment from "moment"
import { usersRoles } from "./types"
import { validators } from "vue-form-generator"

import { find } from "lodash"

let _ = Vue.prototype._
module.exports = {
  // these translations are not dynamic
  // they are reported to the vue component instead of the schema
  id: "users",
  title: "users:Users",

  table: {
    multiSelect: false,
    columns: [
      {
        title: "users:id",
        tip: "users:id_longtip",
        visible : false,
        field: "code",
        align: "left",
      },
      {
        title: "users:fullname",
        tip: "users:fullname_longtip",

        field: "fullName",
      },
      {
        title: "users:username",
        tip: "users:username_longtip",

        field: "username"
      },
      {
        title: "users:email",
        tip: "users:email_longtip",

        field: "email"
      },
      {
        title: "users:verified",
        tip: "users:verified_longtip",

        field: "verified",
        formatter(value, model, col) {
          return value ? "<i class='fa fa-check-square-o'/>" : "<i class='fa fa-square-o'/>"
        },
        align: "center"
      },
      {
        title: "users:passwordless",
        tip: "users:passwordless_longtip",

        field: "passwordLess",
        formatter(value, model, col) {
          return value ? "<i class='fa fa-check-square-o'/>" : "<i class='fa fa-square-o'/>"
        },
        align: "center"
      },
      {
        title: "users:lastLogin",
        tip: "users:lastLogin_longtip",

        field: "lastLogin",
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
    title: _("users:EditUser"),
    fields: [
      {
        type: "label",
        label: _("users:id"),
        model: "id",
        readonly: true,
        disabled: true,
        multi: false,
        get(model) {
          if (model.code)
            return model.code
          else
            return _("willBeGenerated")
        }
      },
      {
        type: "checklist",
        label: _("users:roles"),
        model: "roles",
        required: true,
        values: usersRoles,
        default: "user",  //C.ROLE_USER,
        validator: validators.required

      },
      {
        type: "input",
        label: _("users:lg_fullname"),
        model: "fullName",
        featured: true,
        required: true,
        placeholder: "users:fullname",
        validator: validators.string
      },
      {
        type: "input",
        label: _("users:lg_email"),
        model: "email",
        featured: false,
        required: false,
        placeholder: "users:email",
        validator: validators.string
      },
      {
        type: "label",
        label: _("users:lg_lastLogin"),
        model: "lastLogin",
        get(model) {
          return model && model.lastLogin ? moment(model.lastLogin).fromNow() : "-"
        }
      },
      {
        type: "switch",
        label: _("users:lg_verified"),
        model: "verified",
        multi: false,
        default: 0,
        textOn: _("users:Active"),
        textOff: _("users:Inactive"),
        valueOn: 1,
        valueOff: 0
      },
      {
        type: "switch",
        label: _("users:lg_passwordLess"),
        model: "passwordLess",
        multi: false,
        default: 0,
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
    addCaption: "users:AddNewuser",
    saveCaption: "Save",
    cloneCaption: "Clone",
    deleteCaption: "Delete"
  }

}