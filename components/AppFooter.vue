<template>
  <footer
    class="bg-transparent text-center border border-b-0 border-l-0 border-r-0"
  >
    <p class="my-3 text-current text-bold">Vivian Sarazin - {{ year }}</p>
  </footer>
</template>

<script>
export default {
  component: 'AppFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
