<script lang='ts' setup>
import Nav from '~/components/organisms/Nav.vue'
import Footer from '~/components/organisms/Footer.vue'
definePageMeta({
  layout: 'index'
})
</script>

<template>
  <div class="bg-gradient-to-r from-cyan-300 to-blue-300">
    <Nav />

    <div class="px-4 md:max-w-screen-xl mx-auto prose pt-32 min-h-screen ">
      <NuxtPage />
    </div>

    <Footer />
  </div>
</template>
