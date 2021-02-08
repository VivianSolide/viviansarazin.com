<template>
  <nav
    class="flex justify-between items-center lg:px-64 lg:py-4 p-4 shadow-md border border-t-0 border-l-0 border-r-0 border-current"
  >
    <div class="flex">
      <nuxt-link exact to="/">
        <app-icon :stroke="stroke"></app-icon>
      </nuxt-link>
      <nuxt-link to="/blog"> <p class="ml-6 m-2">Blog</p></nuxt-link>
      <nuxt-link to="/projects"> <p class="m-2">Projets</p></nuxt-link>
      <!-- <nuxt-link to="/portfolio"> <p class="ml-5 mt-2">Portfolio</p></nuxt-link> -->
    </div>
    <div>
      <select
        v-model="$colorMode.preference"
        class="form-select border border-current rounded bg-transparent"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </nav>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'

export default {
  components: {
    AppIcon,
  },
  computed: {
    stroke() {
      if (this.$nuxt.$colorMode.value === 'dark') {
        return 'white'
      } else if (this.$nuxt.$colorMode.value === 'light') {
        return '#4a5568'
      } else {
        return '#7b341e'
      }
    },
  },
}
</script>
<style>
.light-mode {
  @apply bg-white;
  @apply text-gray-700;
}

.dark-mode {
  @apply bg-gray-900;
  @apply text-gray-200;
}

.sepia-mode {
  @apply bg-orange-200;
  @apply text-orange-900;
}
</style>
