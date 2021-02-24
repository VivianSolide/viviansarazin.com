<template>
  <div>
    <nav
      class="flex justify-between items-center lg:px-64 lg:py-4 py-4 border-t-0 border-l-0 border-r-0 border-current"
      :class="open ? '' : 'border shadow-md'"
    >
      <div class="hidden md:flex items-center">
        <nuxt-link exact to="/">
          <app-icon :stroke="stroke" class="m-2"></app-icon>
        </nuxt-link>
        <nuxt-link to="/blog"> <p class="pl-6 m-2">Blog</p></nuxt-link>
        <nuxt-link to="/projects"> <p class="m-2">Projets</p></nuxt-link>
      </div>
      <div class="hidden md:flex">
        <select
          v-if="$colorMode && $colorMode.preference"
          v-model="$colorMode.preference"
          class="form-select border border-current rounded bg-transparent"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
      <!-- mobile menu -->
      <div class="flex md:hidden mx-2">
        <nuxt-link exact to="/">
          <app-icon :stroke="stroke"></app-icon>
        </nuxt-link>
      </div>
      <div class="flex md:hidden">
        <button @click="toggleMenu()">
          <svg
            width="48px"
            height="48px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
    <div
      v-if="open"
      class="border border-current border-t-0 border-r-0 border-l-0 flex justify-between shadow-md"
    >
      <div>
        <nuxt-link to="/blog"> <p class="m-2">Blog</p></nuxt-link>
        <nuxt-link to="/projects"> <p class="m-2">Projets</p></nuxt-link>
      </div>
      <div v-if="$nuxt.$colormode" class="flex items-center">
        <select
          v-if="$colorMode && $colorMode.preference"
          v-model="$colorMode.preference"
          class="form-select border border-current rounded bg-transparent m-2"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'

export default {
  components: {
    AppIcon,
  },
  data() {
    return {
      open: false,
    }
  },
  head() {
    return {
      link: [
        {
          hid: 'favicon',
          name: 'favicon',
          href: '/favicon.ico',
        },
      ],
    }
  },
  computed: {
    stroke() {
      if (this.$nuxt.$colorMode === undefined) {
        return '#7b341e'
      } else if (this.$nuxt.$colorMode.value === 'dark') {
        return 'white'
      } else if (this.$nuxt.$colorMode.value === 'light') {
        return '#4a5568'
      } else {
        return '#7b341e'
      }
    },
  },
  methods: {
    toggleMenu() {
      this.open = !this.open
    },
  },
}
</script>
