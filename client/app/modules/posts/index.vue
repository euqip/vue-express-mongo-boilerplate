<template lang="pug">
  .container-fluid.mr-5.px-0
    
    h1 {{ _('posts:Posts') }}

    .text-center
      div( role = "group" style= "position: relative;")
        button.btn.btn-sm.btn-outline-secondary(@click="changeSort('-votes')", :class="{ active: sort == '-votes' }") {{ _("posts:Hot") }}
        button.btn.btn-sm.btn-outline-secondary(@click="changeSort('-views')", :class="{ active: sort == '-views' }") {{ _("posts:MostViewed") }}
        button.btn.btn-sm.btn-outline-secondary(@click="changeSort('-createdAt')", :class="{ active: sort == '-createdAt' }") {{ _("posts:New") }}
        button.btn.btn-sm.btn-primary(@click="newPost")
          i.px-1.fa.fa-plus
          span {{ "posts:NewPost" |i18n }}
        button.btn.btn-sm.btn-outline-secondary(@click="changeViewMode('all')", :class="{ active: viewMode == 'all' }") {{ _("posts:AllPosts") }}
        button.btn.btn-sm.btn-outline-secondary(@click="changeViewMode('my')", :class="{ active: viewMode == 'my' }") {{ _("posts:MyPosts") }}

    .postForm(v-if="showForm")
      // create aan input form with a module, How to get fields translated?
      vue-form-generator(:schema='schema', :model='model', :options='{}', :multiple="false", ref="form", :is-new-model="isNewPost")

      .text-center
        .btn-group
          button.btn.btn-sm.btn-primary(@click="savePost") {{ "Save" | i18n }}
          button.btn(@click="cancelPost") {{ "Cancel" | i18n }}


    transition-group.posts(name="post", tag="ul")
      li(v-for="post of posts", :key="post.code")

        article.media.rounded.p-1
          .rounded
            .text-center(style="width: 70px;")
              img.rounded.pt-2(:src="post.author.avatar")
              .votes(:class="{ voted: iVoted(post) }")
                .count.my-0 {{ post.votes }}
                .thumb(@click="toggleVote(post)")
                  i.fa.fa-thumbs-o-up
          .media-body.p-2
            h3 {{ post.title }}
            p.content(v-html="markdown(post.content)")
            hr.full.my-0
            .functions.left
              .btn.btn-sm.btn-outlint-secondary(:title="_('posts:EditPost')", @click="editPost(post)")
                i.px-1.fa.fa-pencil
              .btn.btn-sm.btn-outlint-secondary(:title="_('posts:DeletePost')", @click="deletePost(post)")
                i.px-1.fa.fa-trash
              span.right.text-right
                template(v-if="post.editedAt")
                  small.text-muted {{ editedAgo(post) }}
                small.text-muted {{ createdAgo(post) }}
            .voters.left(:title="_('posts:Voters')")
              template(v-for="voter in lastVoters(post)")
                img(:src="voter.avatar", :title="voter.fullName + ' (' + voter.username + ')'")

    .loadMore.text-center(v-if="hasMore")
      button.btn.btn-sm.btn-outline-secondary(@click="loadMoreRows", :class="{ 'loading': fetching }") {{ _("LoadMore") }}
    .noMore.text-center(v-if="!hasMore")
      span.text-muted {{ "posts:reachedend" | i18n }}
    hr
</template>


<script>
  import Vue from "vue";
  import marked from "marked";
  import toast from "../../core/toastr";
  //import postcontent from "./postcontent";
  //import postvotes from "./postvotes";
  import { cloneDeep } from "lodash";
  import { validators, schema as schemaUtils } from "vue-form-generator";

  import { mapGetters, mapActions } from "vuex";

  export default {
  i18nextNamespace: "posts",

  components: {
      //postcontent,
      //postvotes
    },

    computed: {
      ...mapGetters("posts", [
        "posts",
        "hasMore",
        "fetching",
        "sort",
        "viewMode"
      ]),
      ...mapGetters("session", [
        "me"
      ])
    },

    /**
     * Set page schema as data property
     */
    data() {
      return {
        showForm: false,
        isNewPost: false,
        model: null,
        schema: {
          fields: [
            {
              type: "text",
              label: this._("posts:Title"),
              model: "title",
              featured: true,
              required: true,
              placeholder: this._("posts:TitleOfPost"),
              validator: validators.string
            },
            {
              type: "textArea",
              label: this._("posts:Content"),
              model: "content",
              featured: true,
              required: true,
              rows: 10,
              placeholder: this._("posts:ContentOfPost"),
              validator: validators.string
            }
          ]
        }
      };
    },

    /**
     * Socket handlers. Every property is an event handler
     */
    socket: {

      prefix: "/posts/",

      events: {
        /**
         * New device added
         * @param  {Object} res Device object
         */
        /*
        We don't use it because we don't know we need to add it to the page (filter, sort..etc)
        created(res) {
          this.created(res.data);
          toast.success(this._("PostNameAdded", res), this._("PostAdded"));
        },*/

        /**
         * Post updated
         * @param  {Object} res Post object
         */
        updated(res) {
          this.updated(res.data);
          toast.success(this._("PostNameUpdated", res), this._("PostUpdated"));
        },

        voted(res) {
          this.updated(res.data);
          toast.success(this._("PostNameVoted", res), this._("PostUpdated"));
        },

        unvoted(res) {
          this.updated(res.data);
          toast.success(this._("PostNameUnvoted", res), this._("PostUpdated"));
        },

        /**
         * Post removed
         * @param  {Object} res Post object
         */
        removed(res) {
          this.removed(res.data);
          toast.success(this._("PostNameDeleted", res), this._("PostDeleted"));
        }
      }
    },

    methods: {
      ...mapActions("posts", [
        "getRows",
        "loadMoreRows",
        "changeSort",
        "changeViewMode",
        "vote",
        "unVote",
        "saveRow",
        "updateRow",
        "removeRow",
        "updated",
        "removed"
      ]),

      markdown(content) {
        return marked(content);
      },

      iVoted(post) {
        return _.find(post.voters, (user) => user.code == this.me.code) != null;
      },

      toggleVote(post) {
        if (this.iVoted(post))
          this.unVote(post);
        else
          this.vote(post);
      },

      lastVoters(post, count = 5) {
        if (post.voters && post.voters.length > 0) {
          let voters = _.clone(post.voters).reverse().slice(0, 5);
          return voters;
        }
        return [];
      },

      createdAgo(post) {
        return this._("CreatedAgoByName", { ago: Vue.filter("ago")(post.createdAt), name: post.author.fullName } );
      },

      editedAgo(post) {
        if (post.editedAt)
          return this._("EditedAgo", { ago: Vue.filter("ago")(post.editedAt) } );
      },

      newPost() {
        this.model = schemaUtils.createDefaultObject(this.schema);
        this.showForm = true;
        this.isNewPost = true;

        this.focusFirstInput();
      },

      editPost(post) {
        this.model = cloneDeep(post);
        this.showForm = true;
        this.isNewPost = false;
        this.focusFirstInput();
      },

      focusFirstInput() {
        this.$nextTick(() => {
          let el = document.querySelector(".postForm .form-control:nth-child(1):not([readonly]):not(:disabled)");
          if (el)
            el.focus();
        });
      },

      focusFirstErrorInput() {
        this.$nextTick(() => {
          let el = document.querySelector(".postForm .form-group.error .form-control");
          if (el)
            el.focus();
        });
      },

      savePost() {
        if (this.$refs.form.validate()) {
          if (this.isNewPost)
            this.saveRow(this.model);
          else
            this.updateRow(this.model);

          this.cancelPost();
        } else {
          this.focusFirstErrorInput();
        }
      },

      cancelPost() {
        this.showForm = false;
        this.model = null;
      },

      deletePost(post) {
        this.removeRow(post);
      }

    },

    /**
     * Call if the component is created
     */
    created() {
      this.getRows();
    }
  };
</script>

<style lang="scss" scoped>
@import "../../../scss/common/mixins";
@import "posts";

</style>