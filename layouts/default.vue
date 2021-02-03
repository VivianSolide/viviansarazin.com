<template>
  <div>
    <app-nav />
    <nuxt />
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppNav,
  },
}
</script>
<style>
html {
  font-size: 100%;
}

body {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  line-height: 1.75;
}

p {
  margin-bottom: 1rem;
}

h1,
h2,
h3 {
  margin: 2rem 0 1.38rem;
  font-family: 'Consolas', sans-serif;
  font-weight: 400;
  line-height: 1;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small,
.text_small {
  font-size: 0.8rem;
}
</style>
