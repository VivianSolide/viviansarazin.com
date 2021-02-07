<template>
  <div class="flex flex-col h-screen">
    <app-nav />
    <nuxt class="flex-grow" />
    <app-footer />
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNav,
    AppFooter,
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
  /* margin-bottom: 1rem; */
}

h1,
h2,
h3 {
  font-family: 'Consolas', sans-serif;
  font-weight: 400;
  line-height: 1;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  margin-top: 2.441rem;
  font-size: 2.441rem;
}

h3 {
  margin-top: 1.563rem;
  font-size: 1.953rem;
}

h4 {
  margin-top: 1.25rem;
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
