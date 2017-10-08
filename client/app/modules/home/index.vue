<template lang="pug">
	.container
		h1 {{ "styleguide" | i18n }}
		.guide
			section
				h2
					span.number 1.
					span.text {{"ColorPalette" | i18n}}
				.content.flex.align-center.justify-space-around.colors
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
				h2
					span.number 2.
					span.text {{"Typography" | i18n}}
				.content.typo
					.headers
						h1 {{"Heading" | i18n}} #1 - {{ getTypographyInfo("h1") }}
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
				h2
					span.number 3.
					span.text {{"Buttons" | i18n}}
				fieldset
					legend {{"Normalbuttons" | i18n}}
					.content.flex.align-center.justify-space-around.buttons
						button.button Normal
						button.button.primary Primary
						button.button.success
							i.icon.fa.fa-check
							| Success
						button.button.warning Warning
						button.button.danger Danger
						button.button.outline Outline
						button.button.loading Loading

				fieldset
					legend {{"Largebuttons" | i18n}}
					.content.flex.align-center.justify-space-around.buttons
						button.button.large Normal
						button.button.large.primary Primary
						button.button.large.success
							i.icon.fa.fa-check
							| Success
						button.button.large.warning Warning
						button.button.large.danger Danger
						button.button.large.outline Outline
						button.button.large.loading Loading

				fieldset
					legend {{"Smallbuttons" | i18n}}
					.content.flex.align-center.justify-space-around.buttons
						button.button.small Normal
						button.button.small.primary Primary
						button.button.small.success
							i.icon.fa.fa-check
							| Success
						button.button.small.warning Warning
						button.button.small.danger Danger
						button.button.small.outline Outline
						button.button.small.loading Loading

				fieldset
					legend {{"Disabledbuttons" | i18n}}
					.content.flex.align-center.justify-space-around.buttons
						button.button(disabled="disabled") Normal
						button.button.primary(disabled="disabled") Primary
						button.button.success(disabled="disabled")
							i.icon.fa.fa-check
							| Success
						button.button.warning(disabled="disabled") Warning
						button.button.danger(disabled="disabled") Danger
						button.button.outline(disabled="disabled") Outline

				fieldset
					legend {{"Iconbuttons" | i18n}}
					.content.flex.align-center.justify-space-around.buttons
						button.button
							i.fa.fa-home
						button.button.primary
							i.fa.fa-tasks
						button.button.success
							i.fa.fa-cogs
						button.button.warning
							i.fa.fa-comments
						button.button.danger
							i.fa.fa-trash
						button.button.outline
							i.fa.fa-pencil

				fieldset
					legend {{"Floatingbuttons" | i18n}}
					.content.flex.align-center.justify-space-around.buttons
						button.button.fab
							i.icon.fa.fa-plus
							| Normal
						button.button.fab.large.primary
							i.icon.fa.fa-plus
							| Primary
						button.button.fab.success
							i.icon.fa.fa-check
							| Success
						button.button.fab.warning(disabled="disabled")
							i.icon.fa.fa-comments
							| Warning
						button.button.fab.danger
							i.icon.fa.fa-trash
							| Danger
						button.button.fab.outline
							i.icon.fa.fa-bars
							| Outline

				fieldset
					legend {{"Buttongroup" | i18n}}
					.content.flex.align-center.justify-space-around.buttons
						.button-group
							button.button
								i.icon.fa.fa-align-left
								| Left
							button.button
								i.icon.fa.fa-align-center
								| Middle
							button.button
								i.icon.fa.fa-align-right
								| Right
				hr

			section
				h2
					span.number 4.
					span.text {{"Formelements" | i18n}}
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
							.form-group.has-icon.valid
								label(for='text3') {{"Labelforvalidinput" | i18n}}
								input.form-control#text3(type='text', placeholder='Placeholder')
								i.icon.fa.fa-check
							.form-group.has-icon.error
								label(for='text4') {{"Labelforinvalidinputwitherrormessages" | i18n}}
								input.form-control#text4(type='text', placeholder='Placeholder')
								i.icon.fa.fa-exclamation-triangle
								.errors
									span {{"Tooshort" | i18n}}
									span {{"Invalidtextcontent" | i18n}}!

							.form-group
								label(for='text5') {{"Labelfortextarea" | i18n}}
								textarea.form-control#text5(type='text', placeholder='Placeholder', rows=5)

						fieldset
							legend {{"Selections" | i18n}}
							.form-group
								label(for='select1') {{"Labelforselect" | i18n}}
								select.form-control#select1
									option {{"Option"  | i18n}} 1
									option {{"Option"  | i18n}} 2
									option {{"Option"  | i18n}} 3
									option {{"Option"  | i18n}} 4

						fieldset
							legend {{"Radiobuttons" | i18n}}
							.form-option
								input#radio1(type="radio", name="radio")
								label(for="radio1") {{"Optionone" | i18n}}
							.form-option
								input#radio2(type="radio", name="radio")
								label(for="radio2") {{"Optiontwo" | i18n}}

						fieldset
							legend {{"Checkboxes" | i18n}}
							.form-option
								input#check1(type="checkbox")
								label(for="check1") {{"Optionone" | i18n}}
							.form-option
								input#check2(type="checkbox")
								label(for="check2") {{"Optiontwo" | i18n}}

			section
				h2
					span.number 5.
					span.text {{"Alerts" | i18n}}
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
					.alert.alert-error
						i.icon.fa.fa-times-circle
						strong {{"Error" | i18n}}!
						| {{"Thisisanerroralert" | i18n}}.
						a.alert-close(href="x") &times;

					.alert.alert-success
						h4 {{"Welldone" | i18n}}!
						p {{"Alertyousuccessfully" | i18n}}
			section
				h2
					span.number 6.
					span.text {{"Tables" | i18n}}
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
									button.button.small {{"Edit" | i18n}}
									button.button.small.danger
										i.icon.fa.fa-trash
										| {{"Delete" | i18n}}
							tr
								td 2
								td Johnny Avlony
								td info@johnnyavlony.com
								td (740) 841-7566
								td.text-right $2,400.00
								td.text-right
									button.button.small {{"Edit" | i18n}}
									button.button.small.danger
										i.icon.fa.fa-trash
										| {{"Delete" | i18n}}
							tr.selected
								td 3
								td Johnny Avlony
								td info@johnnyavlony.com
								td (740) 841-7566
								td.text-right $2,400.00
								td.text-right
									button.button.small {{"Edit" | i18n}}
									button.button.small.danger
										i.icon.fa.fa-trash
										| {{"Delete" | i18n}}
							tr.inactive
								td 4
								td Johnny Avlony
								td info@johnnyavlony.com
								td (740) 841-7566
								td.text-right $2,400.00
								td.text-right
									button.button.small {{"Edit" | i18n}}
									button.button.small.danger
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
				h2
					span.number 7.
					span.text {{"Tagsbadges" | i18n}}
				fieldset
					legend {{"Tags" | i18n}}

					.content.flex.align-center.justify-space-around.buttons
						.tag Normal
						.tag.primary Primary
						.tag.success Success
						.tag.warning Warning
						.tag.danger Danger
						.tag.outline Outline

				fieldset
					legend {{"Numbertags" | i18n}}

					.content.flex.align-center.justify-space-around.buttons
						.tag.pill 15
						.tag.pill.primary 5
						.tag.pill.success 100+
						.tag.pill.warning 45
						.tag.pill.danger 0
						.tag.pill.outline 8


			section
				h2
					span.number 8.
					span.text {{"Progressbars" | i18n}}
				fieldset
					legend {{"Normal" | i18n}}

					.content.buttons
						.progressbar
							.progress(style="width: 15%;")
						br
						.progressbar.success
							.progress(style="width: 40%;") 40% {{"complete"  | i18n}}...
						br
						.progressbar.warning
							.progress(style="width: 60%;") 60%
						br
						.progressbar.danger
							.progress(style="width: 70%;")

				fieldset
					legend {{"Stripped" | i18n}}

					.content.buttons
						.progressbar.stripped.success
							.progress(style="width: 40%;") 40% {{"complete" | i18n}}...
						br
						.progressbar.stripped.danger
							.progress(style="width: 70%;")

				fieldset
					legend {{"Animated" | i18n}}

					.content.buttons
						.progressbar.stripped.animate.success
							.progress(style="width: 80%;") 80% {{"complete" | i18n}}...
						br
						.progressbar.stripped.animate.warning
							.progress(style="width: 34%;")

				fieldset
					legend {{"Small" | i18n}}

					.content.buttons
						.progressbar.small
							.progress(style="width: 15%;")
						br
						.progressbar.small.success.stripped
							.progress(style="width: 40%;") 40% {{"complete" | i18n}}...
						br
						.progressbar.small.warning.stripped.animate
							.progress(style="width: 60%;") 60%


				fieldset
					legend {{"Large" | i18n}}

					.content.buttons
						.progressbar.large
							.progress(style="width: 15%;")
						br
						.progressbar.large.success.stripped
							.progress(style="width: 40%;") 40% {{"complete" | i18n}}...
						br
						.progressbar.large.warning.stripped.animate
							.progress(style="width: 60%;") 60%


			section
				h2
					span.number 9.
					span.text {{"PanelsAndCards" | i18n}}
				fieldset
					legend {{"NormalPanels" | i18n}}

					.content.flex.align-center.justify-space-around.panels
						.panel
							.header {{"Panelnormal" | i18n}}
							.body
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.

						.panel.primary
							.ribbon.right.red
								span {{"Primary" | i18n}}
							.header {{"Panelprimary" | i18n}}
							.body
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.

						.panel.success(style="height: 332px")
							.header {{"Panelsuccesswithlist" | i18n}}
							.body
								.list
									.item
										img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
										.body
											strong {{"Messagetitle" | i18n}}
												small.text-muted John Doe
											p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi pariatur eaque quasi reprehenderit possimus consequatur commodi cum quod, amet sed cupiditate?
										.footer.text-right
											small.text-muted {{"1minago" | i18n}}
									.item
										img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
										.body
											strong {{"Messagetitle" | i18n}}
												small.text-muted John Doe
											p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi pariatur eaque quasi reprehenderit possimus consequatur commodi cum quod, amet sed cupiditate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum perferendis sapiente non atque qui quis pariatur impedit ea cupiditate culpa repellat voluptate, ipsam id illo incidunt nam commodi optio? Quasi.
										.footer.text-right
											small.text-muted {{"3minago" | i18n}}
									.item
										img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
										.body
											strong {{"Messagetitle" | i18n}}
												small.text-muted John Doe
											p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi.
										.footer.text-right
											small.text-muted {{"15minago" | i18n}}
									.item
										img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
										.body
											strong {{"Messagetitle" | i18n}}
												small.text-muted John Doe
											p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi pariatur eaque quasi reprehenderit possimus consequatur commodi cum quod, amet sed cupiditate?
										.footer.text-right
											small.text-muted {{"3hoursago" | i18n}}
									.item
										img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
										.body
											strong {{"Messagetitle" | i18n}}
												small.text-muted John Doe
											p.text-justify Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis eligendi mollitia ratione fugiat earum qui sit vero nisi pariatur eaque quasi reprehenderit possimus consequatur commodi cum quod, amet sed cupiditate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo officia, nulla ad quae. Possimus, necessitatibus excepturi ad vel aspernatur ipsam molestiae. Blanditiis assumenda, doloribus tenetur inventore, earum fugiat! Ducimus, recusandae.
										.footer.text-right
											small.text-muted {{"1dayago" | i18n}}


					.content.flex.align-center.justify-space-around.panels
						.panel.warning(style="max-height: 280px; max-width: 600px")
							.header {{"Panelwarningwithscroll" | i18n}}
							.body
								p Duis ex nulla eu ex quis consectetur amet voluptate qui ipsum aliqua nisi commodo cupidatat. Reprehenderit aliqua sint magna ad eiusmod magna non esse. Ex tempor ex duis dolore commodo labore aliquip ad dolor nulla est. Ex eiusmod labore deserunt velit ad consequat elit. Quis elit cupidatat culpa pariatur excepteur. Elit nulla nisi ut nulla cupidatat ipsum officia sint consectetur in laboris.
								p Voluptate anim in et esse. Voluptate ad est irure eiusmod sit enim pariatur adipisicing. Dolore officia nulla reprehenderit ipsum do aliquip incididunt eiusmod cupidatat exercitation consectetur incididunt.
							.footer {{"Panelfooter" | i18n}}

						.panel.danger
							.header {{"Paneldanger" | i18n}}
							.body
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque.
							.footer {{"Panelfooter" | i18n}}

						.panel.outline
							.header {{"Paneloutline" | i18n}}
							.body
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.


				fieldset
					legend {{"Normalcards" | i18n}}
					.content.flex.align-center.justify-space-around.panels
						.card
							.block
								.title {{"SimpleCard" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
							.block
								small.text-muted {{"Lastupdated5minsago" | i18n}}

						.card
							.ribbon.right.orange
								span -20%
							img.img(src="http://lorempixel.com/350/150/city")
							.block
								.title {{"Cardwithimage" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
							.block
								button.button.success {{"Checkout" | i18n}}

						.card
							.ribbon.left.primary
								span {{"Brandnew" | i18n}}
							img.img(src="http://placehold.it/350x150")
							.block
								.title {{"CardTitlewihribbon" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
							.block.text-right
								button.button.danger {{"DELETE" | i18n}}
								button.button.outline {{"Close" | i18n}}

				fieldset
					legend {{"Cardsincolumns" | i18n}}
					.content.card-columns
						.card
							.block
								.title {{"SmallCard" | i18n}} 1
								p
									| Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellendus architecto molestiae iure enim labore dolores similique, quia consequatur culpa, at cumque ad tenetur nemo vitae dolorem ipsum repellat optio!
									a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
							.block
								small.text-muted 08:45 PM - 14 Jun 2016

						.card
							.block
								.title {{"SmallCard" | i18n}} 2
								p
									| Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptate, neque voluptatibus mollitia aliquid, harum in laborum non amet cupiditate ea nisi necessitatibus quis! Earum architecto corporis molestiae nihil molestias? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, voluptate. Eaque nisi alias consectetur ipsum eveniet qui esse repellat voluptas mollitia, obcaecati corporis a modi officia, architecto commodi eius sint!
									a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
							.block
								small.text-muted 08:45 PM - 14 Jun 2016

						.card
							.block
								.title {{"SmallCard" | i18n}} 3
								p
									| Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
							.block
								small.text-muted 08:45 PM - 14 Jun 2016

						.card
							img.img(src="http://lorempixel.com/600/300/city")
							.block
								.title {{"SmallCard" | i18n}} 4
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
							.block
								small.text-muted 08:45 PM - 14 Jun 2016

						.card
							.block
								.title {{"SmallCard" | i18n}} 5
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
									a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
							.block
								small.text-muted 08:45 PM - 14 Jun 2016
							.block
								button.button.success Checkout

						.card
							.block
								.title {{"SmallCard" | i18n}} 6
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptatum quos autem magnam doloribus sunt. Atque quas accusamus repellat, odio dolore sapiente voluptatibus nemo numquam eum odit tempore, similique natus!
									a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
							.block
								small.text-muted 08:45 PM - 14 Jun 2016

						.card
							.block
								.title {{"SmallCard" | i18n}} 7
								p
									| Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
									a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
							.block
								small.text-muted 08:45 PM - 14 Jun 2016

						.card
							.block
								.title {{"SmallCard" | i18n}} 8
								p
									| Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa
									a.link(href="https://twitter.com/Icebobcsi") @Icebobcsi
							.block
								small.text-muted 08:45 PM - 14 Jun 2016


			section
				h2
					span.number 10.
					span.text {{"Media" | i18n}}
				fieldset
					legend {{"Normalmedia" | i18n}}

					.content.list
						.media
							.media-left
								img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
							.media-content
								strong John Doe
								small.text-muted @johndoe - {{"31mago" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
								p Elit ex id excepteur aliqua sint et culpa nisi laborum. Cupidatat anim aliqua nisi tempor nisi sint mollit non elit laboris consequat. Ut sint mollit voluptate quis sunt magna voluptate incididunt amet voluptate aute occaecat nulla. Nostrud ut eiusmod duis consequat sunt proident in aute esse adipisicing cupidatat commodo consequat dolor. Irure minim consectetur est duis nulla aliqua fugiat culpa proident cupidatat elit magna. Dolor esse magna pariatur sint adipisicing cupidatat veniam excepteur aliquip. Qui fugiat non eiusmod do sunt excepteur enim aliquip reprehenderit ullamco.
									a.link(href="#")  {{"Readmore" | i18n}}...
								.functions
									a(href="#")
										i.fa.fa-reply
									a(href="#")
										i.fa.fa-heart
									a(href="#")
										i.fa.fa-trash
							.media-right
								a.close(href="#", title="Close")

						.media.primary
							.media-left
								img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
							.media-content
								strong John Doe
								small.text-muted @johndoe - {{"31mago" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
									a.link(href="#") {{"Readmore" | i18n}}...
								.functions
									a(href="#")
										i.fa.fa-reply
									a(href="#")
										i.fa.fa-heart
									a(href="#")
										i.fa.fa-trash
							.media-right
								a.close(href="#", title="Close")

						.media.success
							.media-left
								img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
							.media-content
								strong John Doe
								small.text-muted @johndoe - {{"31mago" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
									a.link(href="#") {{"Readmore" | i18n}}...
								.functions
									a(href="#")
										i.fa.fa-reply
									a(href="#")
										i.fa.fa-heart
									a(href="#")
										i.fa.fa-trash
							.media-right
								a.close(href="#", title="Close")

						.media.warning
							.media-left
								img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
							.media-content
								strong John Doe
								small.text-muted @johndoe - {{"31mago" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
									a.link(href="#") {{"Readmore" | i18n}}...
								.functions
									a(href="#")
										i.fa.fa-reply
									a(href="#")
										i.fa.fa-heart
									a(href="#")
										i.fa.fa-trash
							.media-right
								a.close(href="#", title="Close")

						.media.danger
							.media-left
								img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
							.media-content
								strong John Doe
								small.text-muted @johndoe - {{"31mago" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
									a.link(href="#") {{"Readmore" | i18n}}...
								.functions
									a(href="#")
										i.fa.fa-reply
									a(href="#")
										i.fa.fa-heart
									a(href="#")
										i.fa.fa-trash
							.media-right
								a.close(href="#", title="Close")

						.media.outline
							.media-left
								img.avatar(src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/73.jpg")
							.media-content
								strong John Doe
								small.text-muted @johndoe - {{"31mago" | i18n}}
								p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dicta cumque assumenda culpa maiores omnis totam obcaecati voluptas eligendi sapiente enim debitis, illo dolore facilis, in, nihil perspiciatis, et perferendis.
									a.link(href="#") {{"Readmore" | i18n}}...
								.functions
									a(href="#")
										i.fa.fa-reply
									a(href="#")
										i.fa.fa-heart
									a(href="#")
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
	@import "../../../scss/themes/blurred/variables";

	.container {
		padding: 0 1rem;
	}

	section {
		&:not(:last-child) {
			margin-bottom: 40px;
		}

		> h2 {
			font-size: 1.5rem;
			margin-bottom: 20px;
			padding: 8px 10px;

			background-color: rgba(darken($backgroundColor, 10%), 0.6);
			border: 1px solid darken($backgroundColor, 8%);
			border-radius: 8px;

			.number {
				color: #888;
			}

			.text {
				margin-left: 4px;
				font-weight: $fontLight;
				text-transform: uppercase;
			}

			clear: both;

		} // .title

	} //. section

	.buttons {
		margin-bottom: 20px;
	}

	.list {
		> * {
			margin-bottom: 20px;
		}
	}

	.panels {
		align-items: flex-start;
		.panel, .card {
			margin: 20px;
		}

		.card {
			max-width: 350px;
		}
	}

	.colors {
		$boxSize: 150px;

		.box {
			width: $boxSize;
			height: $boxSize + 20px;

			border: 1px solid darken($backgroundColor, 10%);
			border-radius: 6px;

			margin: 5px 20px;
			padding: 2px;

			.caption {
				float: left;
				width: 100%;
				text-align: center;
			}

			.main {
				float: left;
				width: 100%;
				height: $boxSize - 60px;
			} // .main

			.light {
				float: left;
				width: 50%;
				height: 30px;

			} // .light

			.dark {
				float: right;
				width: 50%;
				height: 30px;

			} // .dark

			.code {
				float: left;
				width: 100%;
				position: relative;
				margin-top: 5px;

				&:after {
					position: absolute;
					top: 0; bottom: 0;
					left: 0; right: 0;
					margin: auto;
					width: 100%;
					text-align: center;
					font-family: "Consolas";
					color: White;
				}
			} // .code

			$colors: $color1, $color2, $color3, $color4, $color5;

			$colors-light: $color1-light, $color2-light, $color3-light, $color4-light, $color5-light;
			$colors-dark: $color1-dark, $color2-dark, $color3-dark, $color4-dark, $color5-dark;

			@for $i from 1 through 5 {

				$c: nth($colors, $i);

				&.box#{$i} {
					.main { background-color: $c; }
					.light { background-color: nth($colors-light, $i); }
					.dark { background-color: nth($colors-dark, $i); }
					.code:after {	content: "" + $c; }

				} // box

			} // for

		} // .box

	} // .colors
</style>
