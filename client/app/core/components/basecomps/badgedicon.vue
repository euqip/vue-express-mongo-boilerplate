<template lang="pug">
  .noarrow(:title= "title", data-toggle="dropdown", :class=" { active: badge != '0' }")
    i.px-1.fa(:class= "icon")
      span.badge.badge-pill.badge-primary.exponent {{ badge }}
    .ring
</template>

<script>
  // ring class not yet defined
  export default {
    name: 'badgedicon',
    props: {
      "title" : {
        type : String,
        default: ''
      },
      "icon" : {
        type : String,
        default: ''
      },
      "badge" : {
        default: 0
      }
    }
  }

</script>

<style lang="scss">
  .exponent{
    vertical-align: 1em;
  }
  $color1: #F1F4F5; //rgba(0, 23, 31, 255)
  $color2: #BAD3DB; //rgba(16, 67, 87, 255)
  $color3: #00a8e8; //rgba(0, 168, 232, 255)
  $color4: #2C6ADD; //rgba(255, 255, 255, 255)
  $color5: #C5341B; //rgba(239, 127, 10, 255)

  $secondColor: $color3;
  $activeColor: lighten($secondColor, 5%);
  .ring {
    border: 1px solid $activeColor;
    border-radius: 100px;
    height: 40px;
    width: 40px;
    position: absolute;
    top: -18px;
    right: -27px;
    animation: pulsate 10s ease-out infinite;
    opacity: 0.0
  }

</style>