<template lang="pug">
  .notification-item
    .row
      .col-sm-2
        img.avatar(:src="getimgurl()")
      .col-sm-10
        div
          strong {{ name }}
          |  {{ action }}
          .footer.float-right
            small.text-muted {{ delay }}
    .dropdown-divider
</template>

<script>
  export default {
    props: ['name', 'img', 'action', 'delay', 'src'],
    methods:{
      getimgurl() {
        return this.src + this.img
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
