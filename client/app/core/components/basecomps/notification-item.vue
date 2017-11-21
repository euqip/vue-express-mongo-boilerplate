<template lang="pug">
  .notification-item
    .row
      .col-sm-2
        img.avatar(:src="getimgurl()")
      .col-sm-10
        h4 {{item.title}}
        strong {{ item.name }}
        |  {{ item.action }}
        .footer.float-right
          small.text-muted {{ item.delay }}
    .dropdown-divider
</template>

<script>
  export default {
    props: {
      "item" :{
        type: Object
      },
      "src": {
        type: String
      }
    },
    methods:{
      getimgurl() {
        return this.src + this.item.img
      }
    }
  }
</script>

<style lang="scss">
	.notification-item {
    $avatarSize: 4rem;
    $avatarRadius : 15%;
		cursor: pointer;
      .avatar {
				width: $avatarSize;
				height: $avatarSize;
				float: left;
				border-radius: $avatarRadius;
      } // .avatar
  }

</style>
