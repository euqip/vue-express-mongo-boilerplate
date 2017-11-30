"use strict"

import "toastr/build/toastr.css"
import toastr from "toastr/build/toastr.min.js"

toastr.options = {
  debug: true,
  newestOnTop: true,
  timeOut: 5000,
  "closeButton": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"

}

export default toastr