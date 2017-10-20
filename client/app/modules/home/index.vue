<template lang="pug">
  .container
    h1 {{ "styleguide" | i18n }}
    p find inspiration here
      a(href="https://www.quackit.com/bootstrap/bootstrap_4/tutorial/")
        span  Bootstrap 4 tutorial
    .guide
      section.container
        h2.bg-secondary.p-3.rounded
          span.pr-3 1.
          span {{"ColorPalette" | i18n}}
        p these boxes colors are set with a dedicated scss file, all 5 boxes are equally distributed
        br
        .colors.navbar
          .box.box1
            .caption {{"Color" | i18n}} #1
            .main
            .light
            .dark
            .code
          .box.box2
            .caption {{"Color" | i18n}} #2
            .main
            .light
            .dark
            .code
          .box.box3
            .caption {{"Color" | i18n}} #3
            .main
            .light
            .dark
            .code
          .box.box4
            .caption {{"Color" | i18n}} #4
            .main
            .light
            .dark
            .code
          .box.box5
            .caption {{"Color" | i18n}} #5
            .main
            .light
            .dark
            .code

      section
        h2.bg-secondary.p-3.rounded
          span.pr-3 2.
          span {{"Typography" | i18n}}
        .content.typo
          .headers
            h1 {{"Heading" | i18n}} #1 -  {{ getTypographyInfo("h1") }}
            h2 {{"Heading" | i18n}} #2 -  {{ getTypographyInfo("h2") }}
            h3 {{"Heading" | i18n}} #3 -  {{ getTypographyInfo("h3") }}
            h4 {{"Heading" | i18n}} #4 -  {{ getTypographyInfo("h4") }}
            h5 {{"Heading" | i18n}} #5 -  {{ getTypographyInfo("h5") }}
            h5 ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 éáűőúöüóí ÉÁŰŐÚÖÜÓÍ
          hr
          .paragraph
            p {{"Paragraph" | i18n}} - {{ getTypographyInfo("p") }}
            p ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 éáűőúöüóí ÉÁŰŐÚÖÜÓÍ
            p {{"Anexampleparagraphwith" | i18n}}
              strong {{"strongtext" | i18n}}
              |  {{"and" | i18n}}
              em {{"emphasizedtext" | i18n}}
              | , {{"spanning" | i18n}}
              br
              | {{"multiplelinessoyoucanseethelineheight" | i18n}}.
            p.text-justify Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius ipsum tortor, eget convallis ante sagittis ac. Nulla eget bibendum dolor. Praesent at ipsum bibendum, malesuada quam tincidunt, lobortis purus. Donec vel mi mollis, sagittis libero non, ultrices elit. Nulla non mauris in sapien mattis scelerisque. Vivamus maximus tincidunt mi, interdum pellentesque urna feugiat sed. Suspendisse vulputate metus leo, nec hendrerit sapien tincidunt ac. Vivamus non libero luctus, suscipit libero ut, elementum enim.
              a.link(href="#") {{"Readmore" | i18n}}

            p Fusce aliquam sem lorem, in porttitor orci dignissim at. Sed non dolor at orci dignissim bibendum a non nibh. Duis nec vestibulum dui, sit amet lobortis ligula. Sed aliquam mauris nunc, eu sodales est faucibus vitae. Ut sed accumsan lectus. Interdum et
              a.link(href="#") malesuada
              |  fames ac ante ipsum primis in faucibus. Aenean dignissim odio vehicula ligula varius, ac ullamcorper tortor molestie. Phasellus dolor dui, egestas id ornare in, suscipit et dolor.

      section
        h2.bg-secondary.p-3.rounded
          span.pr-3 3.
          span {{"Buttons" | i18n}}
        fieldset
          legend {{"Normalbuttons" | i18n}}
          P The navbar class will distribute evenly the buttons to occupy the whole width
          .navbar
            button.btn Normal
            button.btn.btn-primary Primary
            button.btn.btn-success
              i.icon.fa.fa-check
              | Success
            button.btn.btn-warning Warning
            button.btn.btn-danger Danger
            button.btn.btn-outline-secondary Outline
            button.btn.btn-loading Loading

        fieldset
          legend {{"Largebuttons" | i18n}}
          .navbar
            button.btn.btn-lg Normal
            button.btn.btn-lg.btn-primary Primary
            button.btn.btn-lg.btn-success
              i.icon.fa.fa-check
              | Success
            button.btn.btn-lg.btn-warning Warning
            button.btn.btn-lg.btn-danger Danger
            button.btn.btn-lg.btn-outline-secondary Outline
            button.btn.btn-lg.btn-loading Loading

        fieldset
          legend {{"Smallbuttons" | i18n}}
          .navbar
            button.btn.btn-sm Normal
            button.btn.btn-sm.btn-primary Primary
            button.btn.btn-sm.btn-success
              i.icon.fa.fa-check
              | Success
            button.btn.btn-sm.btn-warning Warning
            button.btn.btn-sm.btn-danger Danger
            button.btn.btn-sm.btn-outline-secondary Outline
            button.btn.btn-sm.loading Loading

        fieldset
          legend {{"Disabledbuttons" | i18n}}
          .navbar
            button.btn(disabled="disabled") Normal
            button.btn.btn-primary(disabled="disabled") Primary
            button.btn.btn-success(disabled="disabled")
              i.icon.fa.fa-check
              | Success
            button.btn.btn-warning(disabled="disabled") Warning
            button.btn.btn-danger(disabled="disabled") Danger
            button.btn.btn-outline(disabled="disabled") Outline

        fieldset
          legend {{"Iconbuttons" | i18n}}
          .navbar
            button.btn.rounded-circle
              i.fa.fa-home
            button.btn.rounded-circle.btn-primary
              i.fa.fa-tasks
            button.btn.rounded-circle.btn-success
              i.fa.fa-cogs
            button.btn.rounded-circle.btn-warning
              i.fa.fa-comments
            button.btn.rounded-circle.btn-danger
              i.fa.fa-trash
            button.btn.rounded-circle.btn-outline
              i.fa.fa-pencil

        fieldset
          legend {{"Floatingbuttons" | i18n}}
          .navbar
            button.btn.rounded-circle.mr-3.d-flex.justify-content-center.align-items-center(title ="Normal")
              i.icon.fa.fa-plus
            button.btn.rounded-circle.mr-3.d-flex.justify-content-center.align-items-center.btn-primary(title ="Primary")
              i.icon.fa.fa-plus
            button.btn.rounded-circle.mr-3.d-flex.justify-content-center.align-items-center.btn-success(title ="Success")
              i.icon.fa.fa-check
            button.btn.rounded-circle.mr-3.d-flex.justify-content-center.align-items-center.btn-warning(disabled="disabled")(title ="Warning")
              i.icon.fa.fa-comments
            button.btn.rounded-circle.mr-3.d-flex.justify-content-center.align-items-center.btn-danger(title ="Danger")
              i.icon.fa.fa-trash
            button.btn.rounded-circle.mr-3.d-flex.justify-content-center.align-items-center.btn-secondary(title ="Outline")
              i.icon.fa.fa-bars

        fieldset
          legend {{"Buttongroup" | i18n}}
          .text-center
            .btn-group
              button.btn
                i.icon.fa.fa-align-left
                | Left
              button.btn
                i.icon.fa.fa-align-center
                | Middle
              button.btn
                i.icon.fa.fa-align-right
                | Right
        hr

      section
        h2.bg-secondary.p-3.rounded
          span.pr-3 4.
          span {{"Formelements" | i18n}}
        .content.forms
          form(action='#')
            fieldset
              legend {{"Inputfields" | i18n}}

              .form-group
                label(for='text1') {{"Label" | i18n}}
                input.form-control#text1(type='text', placeholder='Placeholder')

              .form-group
                label(for='text2') {{"Labelwithhint" | i18n}}
                input.form-control#text2(type='text', placeholder='Placeholder')
                .hint {{"Maxium100characters" | i18n}}
              .form-group.text-success
                label(for='text3') {{"Labelforvalidinput" | i18n}}
                input.form-control#text3(type='text', placeholder='Placeholder')
                i.icon.fa.fa-check
              .form-group.text-danger
                label(for='text4') {{"Labelforinvalidinputwitherrormessages" | i18n}}
                input.form-control#text4(type='text', placeholder='Placeholder')
                i.icon.fa.fa-exclamation-triangle
                  span {{"Tooshort" | i18n}}
                br
                i.icon.fa.fa-exclamation-triangle
                  span {{"Invalidtextcontent" | i18n}}!

              .form-group
                label(for='text5') {{"Labelfortextarea" | i18n}}
                textarea.form-control#text5(type='text', placeholder='Placeholder', rows=5)

            fieldset
              legend {{"Selections" | i18n}}
              .form-group
                label(for='select1') {{"Labelforselect" | i18n}}
                select.form-control#select1.col-md-2
                  option {{"Option"  | i18n}} 1
                  option {{"Option"  | i18n}} 2
                  option {{"Option"  | i18n}} 3
                  option {{"Option"  | i18n}} 4
                label(for='select2') {{"Labelforselect" | i18n}}
                select.form-control.form-control-lg#select2.col-md-2
                  option {{"Option"  | i18n}} 1
                  option {{"Option"  | i18n}} 2
                  option {{"Option"  | i18n}} 3
                  option {{"Option"  | i18n}} 4
                label(for='select3') {{"Labelforselect" | i18n}}
                select.form-control.form-control-sm#select3.col-md-2
                  option {{"Option"  | i18n}} 1
                  option {{"Option"  | i18n}} 2
                  option {{"Option"  | i18n}} 3
                  option {{"Option"  | i18n}} 4

            fieldset
              legend {{"Radiobuttons" | i18n}}
              .form-check
                  label.form-check-label
                    input.form-check-input(type="radio")
                    span {{"Optionone" | i18n}}
              .form-check
                  label.form-check-label
                    input.form-check-input(type="radio")
                    span {{"Optiontwo" | i18n}}

            fieldset
              legend {{"Checkboxes" | i18n}}
              .form-check
                  label.form-check-label
                    input.form-check-input(type="checkbox")
                    span {{"Optionone" | i18n}}
              .form-check
                  label.form-check-label
                    input.form-check-input(type="checkbox")
                    span {{"Optiontwo" | i18n}}

      section
        h2.bg-secondary.p-3.rounded
          span.pr-3 5.
          span {{"Alerts" | i18n}}
        .content.alerts
          .alert
            i.icon.fa.fa-info-circle
            | {{"Thisisaneutralalert" | i18n}}.
          .alert.alert-success
            i.icon.fa.fa-check
            | {{"Thisisasuccessalert" | i18n}}.
            a.alert-close(href="x") &times;
          .alert.alert-warning
            i.icon.fa.fa-exclamation-triangle
            | {{"Thisisawarningalert" | i18n}}.
            a.alert-close(href="x") &times;
          .alert.alert-danger
            i.icon.fa.fa-times-circle
            strong {{"Error" | i18n}}!
            | {{"Thisisanerroralert" | i18n}}.
            a.alert-close(href="x") &times;

          .alert.alert-success
            h4 {{"Welldone" | i18n}}!
            p {{"Alertyousuccessfully" | i18n}}
      section
        h2.bg-secondary.p-3.rounded
          span.pr-3 6.
          span {{"Tables" | i18n}}
        .content.tables
          table.table.stripped.bordered
            thead
              tr
                th #
                th.sortable {{"Name" | i18n}}
                th.sortable
                  i.fa.fa-envelope
                  | {{"Mail" | i18n}}
                th.sortable
                  i.fa.fa-phone
                  | {{"Phone" | i18n}}
                th.sortable.text-right {{"Outstanding" | i18n}}
                th.text-right {{"Functions" | i18n}}
            tbody
              tr
                td 1
                td Johnny Avlony
                td info@johnnyavlony.com
                td (740) 841-7566
                td.text-right $2,400.00
                td.text-right
                  button.btn.small.btn-primary {{"Edit" | i18n}}
                  button.btn.small.btn-danger
                    i.icon.fa.fa-trash
                    | {{"Delete" | i18n}}
              tr
                td 2
                td Johnny Avlony
                td info@johnnyavlony.com
                td (740) 841-7566
                td.text-right $2,400.00
                td.text-right
                  button.btn.small.btn-primary {{"Edit" | i18n}}
                  button.btn.small.btn-danger
                    i.icon.fa.fa-trash
                    | {{"Delete" | i18n}}
              tr.selected
                td 3
                td Johnny Avlony
                td info@johnnyavlony.com
                td (740) 841-7566
                td.text-right $2,400.00
                td.text-right
                  button.btn.small.btn-primary {{"Edit" | i18n}}
                  button.btn.small.btn-danger
                    i.icon.fa.fa-trash
                    | {{"Delete" | i18n}}
              tr.inactive
                td 4
                td Johnny Avlony
                td info@johnnyavlony.com
                td (740) 841-7566
                td.text-right $2,400.00
                td.text-right
                  button.btn.small.btn-primary {{"Edit" | i18n}}
                  button.btn.small.btn-danger
                    i.icon.fa.fa-trash
                    | {{"Delete" | i18n}}
            tfoot
              tr
                td 4
                td
                td
                td
                td.text-right $15,500.00
                td.text-right

      section
        h2.bg-secondary.p-3.rounded
          span.pr-3 7.
          span {{"BadgeS" | i18n}}
        fieldset
          legend {{"Badges" | i18n}}

          .navbar
            .badge.badge-Normal
            .badge.badge-primary Primary
            .badge.badge-success Success
            .badge.badge-warning Warning
            .badge.badge-danger Danger red
            .badge.badge-info info
            .badge.badge-light light
            .badge.badge-dark dark

        fieldset
          legend {{"NumberBadges" | i18n}}

          .navbar
            .badge.badge-pill 15
            .badge.badge-pill.badge-primary 5
            .badge.badge-pill.badge-success 100+
            .badge.badge-pill.badge-warning 45
            .badge.badge-pill.badge-danger 0
            .badge.badge-pill.badge-info info
            .badge.badge-pill.badge-light light
            .badge.badge-pill.badge-dark dark


      section
        h2.bg-secondary.p-3.rounded
          span.pr-3 8.
          span {{"Progressbars" | i18n}}
        fieldset
          legend {{"Normal" | i18n}}

          .content.btns
            .progress
              .progress-bar.bg-success(role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
            br
            .progress
              .progress-bar.bg-info(role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100")
            br
            .progress
              .progress-bar.bg-warning(role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100")
            br
            .progress
              .progress-bar.bg-danger(role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100")
            br
            .progress
              .progress-bar(role="progressbar" style="width: 15%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
            br
            .progress
              .progress-bar.bg-success(role="progressbar" style="width: 40%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")  40% {{"complete"  | i18n}}...
            br
            .progress
              .progress-bar.bg-warning(role="progressbar" style="width: 60%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100") 60%
            br
            .progress
              .progress-bar.bg-danger(role="progressbar" style="width: 70%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100")
            br

        fieldset
          legend {{"Stripped" | i18n}}

            .progress
              .progress-bar.progress-bar-striped.bg-success(role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
            br
            .progress
              .progress-bar.progress-bar-striped.bg-info(role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100")  50% {{"complete" | i18n}}...
            br
            .progress
              .progress-bar.progress-bar-striped.bg-warning(role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100")
            br
            .progress
              .progress-bar.progress-bar-striped.bg-danger(role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100")
            br

        fieldset
          legend {{"Animated" | i18n}}

            .progress
              .progress-bar.progress-bar-striped.progress-bar-animated(role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
            br
            .progress
              .progress-bar.progress-bar-striped.progress-bar-animated.bg-info(role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100")  50% {{"complete" | i18n}}...
            br

        fieldset
          legend {{"Small" | i18n}}

          .progress
            .progress-bar(role="progressbar" style="width: 25%; height: 1px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
          br
          .progress
            .progress-bar.progress-bar-striped(role="progressbar" style="width: 25%; height: 5px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
          br
          .progress
            .progress-bar.progress-bar-striped.progress-bar-animated.bg-danger(role="progressbar" style="width: 40%; height: 10px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")  40% {{"complete" | i18n}}...
          br
          .progress
            .progress-bar.progress-bar-striped.bg-success(role="progressbar" style="width: 25%; height: 8px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
          br

        fieldset
          legend {{"Large" | i18n}}

          .progress
            .progress-bar.progress-bar-striped(role="progressbar" style="width: 25%; height: 25px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
          br
          .progress
            .progress-bar.progress-bar-striped.progress-bar-animated.bg-danger(role="progressbar" style="width: 40%; height: 30px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")  40% {{"complete" | i18n}}...
          br
          .progress
            .progress-bar.progress-bar-striped.bg-success(role="progressbar" style="width: 25%; height: 35px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
          br


      section
        h2.bg-secondary.p-3.rounded
          span.pr-3 9.
          span {{"PanelsAndCards" | i18n}}
        fieldset
          legend {{"NormalPanels" | i18n}}

          .row
            .col-sm-3
              .card
                .card-header {{"Panelnormal" | i18n}}
                .card-body
                  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.

            .col-sm-3
              .card
                .card-header.bg-primary {{"Panelprimary" | i18n}}
                .ribbon.right.red
                  span {{"Primary" | i18n}}
                .card-body
                  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.

            .col-sm-6
              .card(style="height: 332px;")
                .card-header.bg-success {{"Panelsuccesswithlist" | i18n}}
                .card-body(style= "overflow-y:scroll;")
                  div
                    div
                      img.mr-2.rounded.float-left(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
                    div
                      strong {{"Messagetitle" | i18n}}
                      small.text-muted  John Doe
                      p.text-justify set max height to view ribbon right Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi pariatur eaque quasi reprehenderit possimus consequatur commodi cum quod, amet sed cupiditate?
                      .footer.text-right
                        small.text-muted {{"1minago" | i18n}}
                  div
                    div
                      img.mr-2.rounded-circle.float-left(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
                    div
                      strong {{"Messagetitle" | i18n}}
                      small.text-muted John Doe
                      p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi pariatur eaque quasi reprehenderit possimus consequatur commodi cum quod, amet sed cupiditate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum perferendis sapiente non atque qui quis pariatur impedit ea cupiditate culpa repellat voluptate, ipsam id illo incidunt nam commodi optio? Quasi.
                      .footer.text-right
                        small.text-muted {{"3minago" | i18n}}
                  div
                    div
                      img.mr-2.rounded.float-left(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
                    div
                      strong {{"Messagetitle" | i18n}}
                      small.text-muted John Doe
                      p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi.
                      .footer.text-right
                        small.text-muted {{"15minago" | i18n}}
                  div
                    div
                      img.mr-2.rounded.float-left(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
                    div
                      strong {{"Messagetitle" | i18n}}
                      small.text-muted John Doe
                      p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi pariatur eaque quasi reprehenderit possimus consequatur commodi cum quod, amet sed cupiditate?
                      .footer.text-right
                        small.text-muted {{"3hoursago" | i18n}}
                  div
                    div
                      img.mr-2.rounded.float-left(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
                    div
                      strong {{"Messagetitle" | i18n}}
                      small.text-muted John Doe
                      p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi pariatur eaque quasi reprehenderit possimus consequatur commodi cum quod, amet sed cupiditate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officia, nulla ad quae. Possimus, necessitatibus excepturi ad vel aspernatur ipsam molestiae. Blanditiis assumenda, doloribus tenetur inventore, earum fugiat! Ducimus, recusandae.
                      .footer.text-right
                        small.text-muted {{"1dayago" | i18n}}


          .row
            .col-sm-4
              .card(style="max-height: 360px; max-width: 600px")
                .card-header.bg-warning {{"Panelwarningwithscroll" | i18n}}
                .card-body(style= "overflow-y:scroll;")
                  p Duis ex nulla eu ex quis consectetur amet voluptate qui ipsum aliqua nisi commodo cupidatat. Reprehenderit aliqua sint magna ad eiusmod magna non esse. Ex tempor ex duis dolore commodo labore aliquip ad dolor nulla est. Ex eiusmod labore deserunt velit ad consequat elit. Quis elit cupidatat culpa pariatur excepteur. Elit nulla nisi ut nulla cupidatat ipsum officia sint consectetur in laboris.
                  p Voluptate anim in et esse. Voluptate ad est irure eiusmod sit enim pariatur adipisicing. Dolore officia nulla reprehenderit ipsum do aliquip incididunt eiusmod cupidatat exercitation consectetur incididunt.
                .footer {{"Panelfooter" | i18n}}

            .col-sm-4
              .card
                .card-header.bg-danger {{"Paneldanger" | i18n}}
                .card-body
                  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque.
                .footer {{"Panelfooter" | i18n}}

            .col-sm-4
              .card.border-success
                .card-header.border-success {{"Paneloutline" | i18n}}
                .card-body
                  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.


        fieldset
          legend {{"Normalcards" | i18n}}
          .row
            .col-sm-4
              .card
                .card-body
                  .title {{"SimpleCard" | i18n}}
                  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                  small.text-muted {{"Lastupdated5minsago" | i18n}}

            .col-sm-4
              .card
                .ribbon.right.orange
                  span -20%
                img.img(src="http://lorempixel.com/350/150/city")
                .card-body
                  .title {{"Cardwithimage" | i18n}}
                  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                  button.btn.btn-success {{"Checkout" | i18n}}

            .col-sm-4
              .card
                .ribbon.left.primary
                  span {{"Brandnew" | i18n}}
                img.img(src="http://placehold.it/350x150")
                .card-body
                  .title {{"CardTitlewihribbon" | i18n}}
                  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                  .text-right
                    button.m-2.btn.btn-danger {{"DELETE" | i18n}}
                    button.m-2.btn.btn-outline-secondary {{"Close" | i18n}}

        fieldset
          legend {{"Cardsincolumns" | i18n}}
          .content.card-columns
            .card
              .card-header
                .title {{"SmallCard" | i18n}} 1
              .card-body
                p
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellendus architecto molestiae iure enim labore dolores similique, quia consequatur culpa, at cumque ad tenetur nemo vitae dolorem ipsum repellat optio!
                  a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
                small.text-muted 08:45 PM - 14 Jun 2016

            .card
              .card-header
                .title {{"SmallCard" | i18n}} 2
              .card-body
                p
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptate, neque voluptatibus mollitia aliquid, harum in laborum non amet cupiditate ea nisi necessitatibus quis! Earum architecto corporis molestiae nihil molestias? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptate. Eaque nisi alias consectetur ipsum eveniet qui esse repellat voluptas mollitia, obcaecati corporis a modi officia, architecto commodi eius sint!
                  a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
                small.text-muted 08:45 PM - 14 Jun 2016

            .card
              .card-header
                .title {{"SmallCard" | i18n}} 3
              .card-body
                p
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
                small.text-muted 08:45 PM - 14 Jun 2016

            .card
              div
                // dont put img in a card-header or card-body to avoid the paddings
                img.rounded(src="http://lorempixel.com/600/300/city" style="width: 100%;")
              .card-header
                .title {{"SmallCard" | i18n}} 4
              .card-body
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
                small.text-muted 08:45 PM - 14 Jun 2016

            .card
              .card-header
                .title {{"SmallCard" | i18n}} 5
              .card-body
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
                  a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
                small.text-muted 08:45 PM - 14 Jun 2016
                .row
                  button.btn.btn-success {{"Checkout" | i18n}}

            .card
              .card-header
                .title {{"SmallCard" | i18n}} 6
              .card-body
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptatum quos autem magnam doloribus sunt. Atque quas accusamus repellat, odio dolore sapiente voluptatibus nemo numquam eum odit tempore, similique natus!
                  a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
                small.text-muted 08:45 PM - 14 Jun 2016

            .card
              .card-header
                .title {{"SmallCard" | i18n}} 7
              .card-body
                p
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
                  a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
                small.text-muted 08:45 PM - 14 Jun 2016

            .card
              .card-header
                .title {{"SmallCard" | i18n}} 8
              .card-body
                p
                  | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
                  a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
                small.text-muted 08:45 PM - 14 Jun 2016


      section
        h2.bg-secondary.p-3.rounded
          span.pr-310.
          span {{"Media" | i18n}}
        fieldset
          legend {{"Normalmedia" | i18n}}

          .row
            .media.p-3.m-2.bg-secondary.rounded
              .mr-3
                img.rounded(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
              .media-body
                strong John Doe
                small.text-muted @johndoe - {{"31mago" | i18n}}
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                p Elit ex id excepteur aliqua sint et culpa nisi laborum. Cupidatat anim aliqua nisi tempor nisi sint mollit non elit laboris consequat. Ut sint mollit voluptate quis sunt magna voluptate incididunt amet voluptate aute occaecat nulla. Nostrud ut eiusmod duis consequat sunt proident in aute esse adipisicing cupidatat commodo consequat dolor. Irure minim consectetur est duis nulla aliqua fugiat culpa proident cupidatat elit magna. Dolor esse magna pariatur sint adipisicing cupidatat veniam excepteur aliquip. Qui fugiat non eiusmod do sunt excepteur enim aliquip reprehenderit ullamco.
                  a.link(href="#")  {{"Readmore" | i18n}}...
                .functions
                  a.btn(href="#")
                    i.fa.fa-reply
                  a.btn(href="#")
                    i.fa.fa-heart
                  a.btn(href="#")
                    i.fa.fa-trash
              .media-right
                a.close(href="#", title="Close")
          .row
            .media.p-3.m-2.rounded.bg-primary
              .mr-3
                img.rounded(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
              .media-body
                strong John Doe
                small.text-muted @johndoe - {{"31mago" | i18n}}
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                  a.link(href="#") {{"Readmore" | i18n}}...
                .functions
                  a.btn(href="#")
                    i.fa.fa-reply
                  a.btn(href="#")
                    i.fa.fa-heart
                  a.btn(href="#")
                    i.fa.fa-trash
              .media-right
                a.close(href="#", title="Close")
          .row
            .media.p-3.m-2.rounded.bg-success
              .mr-3
                img.rounded(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
              .media-body
                strong John Doe
                small.text-muted @johndoe - {{"31mago" | i18n}}
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                  a.link(href="#") {{"Readmore" | i18n}}...
                .functions
                  a.btn(href="#")
                    i.fa.fa-reply
                  a.btn(href="#")
                    i.fa.fa-heart
                  a.btn(href="#")
                    i.fa.fa-trash
              .media-right
                a.close(href="#", title="Close")
          .row
            .media.p-3.m-2.rounded.bg-warning
              .mr-3
                img.rounded(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
              .media-body
                strong John Doe
                small.text-muted @johndoe - {{"31mago" | i18n}}
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                  a.link(href="#") {{"Readmore" | i18n}}...
                .functions
                  a.btn(href="#")
                    i.fa.fa-reply
                  a.btn(href="#")
                    i.fa.fa-heart
                  a.btn(href="#")
                    i.fa.fa-trash
              .media-right
                a.close(href="#", title="Close")
          .row
            .media.p-3.m-2.rounded.bg-danger
              .mr-3
                img.rounded(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
              .media-body
                strong John Doe
                small.text-muted @johndoe - {{"31mago" | i18n}}
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                  a.link(href="#") {{"Readmore" | i18n}}...
                .functions
                  a.btn(href="#")
                    i.fa.fa-reply
                  a.btn(href="#")
                    i.fa.fa-heart
                  a.btn(href="#")
                    i.fa.fa-trash
              .media-right
                a.close(href="#", title="Close")
          .row
            .media.p-3.m-2.rounded.bg-outline
              .mr-3
                img.rounded(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
              .media-body
                strong John Doe
                small.text-muted @johndoe - {{"31mago" | i18n}}
                p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
                  a.link(href="#") {{"Readmore" | i18n}}...
                .functions
                  a.btn(href="#")
                    i.fa.fa-reply
                  a.btn(href="#")
                    i.fa.fa-heart
                  a.btn(href="#")
                    i.fa.fa-trash
              .media-right
                a.close(href="#", title="Close")

</template>

<script>
  export default {

    methods: {
      getTypographyInfo(elType) {
        if (this.$el) {
          let element = this.$el.querySelector(elType);
          if (element) {
            let style = window.getComputedStyle(element, null);
            return style.fontFamily.split(",")[0] + " " + style.fontWeight + ", " + style.fontSize;
          }
        }
      }
    }
  };

</script>

<style lang="scss" scoped>
  //@import "./index.scss";
  @import "./colors.scss";
</style>
