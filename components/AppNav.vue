<template>
  <div class="flex justify-between lg:px-64 lg:py-4">
    <div class="flex flex-row">
      <nuxt-link exact to="/">
        <app-icon :stroke="stroke"></app-icon>
      </nuxt-link>
      <nuxt-link to="/blog"> <p class="ml-5 mt-2">Blog</p></nuxt-link>
      <nuxt-link to="/projets"> <p class="ml-5 mt-2">Projets</p></nuxt-link>
      <nuxt-link to="/portfolio"> <p class="ml-5 mt-2">Portfolio</p></nuxt-link>
    </div>
    <div class="lg:w-64 mt-2">
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </div>
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
