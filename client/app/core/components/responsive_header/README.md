# resposive_header

Responsive header is a replication of the admin dashboard example provided by Bootstrap for its version 4.beta2.

To show it, uncomment the app entry in webpack.base.config file and comment origiinal app, then npm run dev to test it.

```html

<template lang="pug">
  Spa
</template>

.....


<script>
  import Vue from "vue";
  import Spa from "./components/responsive_header/spa";
  export default {
     components: {
      Spa
    }
  }
</script>

```

An other option is to

## responsive header viewed on Galaxy S5

### vertical

![Landscape](https://github.com/euqip/vue-express-mongo-boilerplate/blob/twbs4/client/app/core/components/responsive_header/img/Galaxy_S5_vert.png)

### horizontal

![Portrait](https://github.com/euqip/vue-express-mongo-boilerplate/blob/twbs4/client/app/core/components/responsive_header/img/Galaxy_S5_horiz.png)
