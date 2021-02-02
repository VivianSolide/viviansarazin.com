<template>
  <div class="nav">
    <div>
      <ul>
        <li>
          <nuxt-link exact to="/">
            <app-icon></app-icon>Vivian Sarazin
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
      </ul>
    </div>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
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
}
</script>
<style>
.light-mode {
  @apply bg-gray-100;
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
