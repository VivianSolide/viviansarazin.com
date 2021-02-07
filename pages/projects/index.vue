<template>
  <div>
    <app-masthead tagline="Projects"></app-masthead>
    <div class="container">
      <input
        v-model="query"
        type="search"
        aria-label="Search"
        class="block w-full py-3 pl-3 pr-3 text-base leading-6 placeholder-gray-500 transition duration-150 ease-in-out border appearance-none md:pr-10 border-rainy-grey rounded-tl-md rounded-bl-md focus:ring-3 focus:ring-green-300 focus:ring-opacity-50 focus:outline-none focus:placeholder-gray-400 sm:flex-1"
        placeholder="Search a module (name, category, username, etc.)"
      />
      <div class="grid md:gap-6 grid-cols-1">
        <div v-for="project in filteredProjects" :key="project.id">
          <h3>
            <a :href="`projects/${project.slug}`">{{
              project.title.rendered
            }}</a>
          </h3>
          <small>{{ project.date | dateformat }}</small>
          <div v-html="project.excerpt.rendered"></div>
          <button
            class="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-3"
          >
            <a :href="`projects/${project.slug}`" class="readmore slide"
              >En savoir plus ⟶</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMasthead from '@/components/AppMasthead.vue'
import Fuse from 'fuse.js'

export default {
  components: {
    AppMasthead,
  },
  data() {
    return {
      activeClass: 'active-class',
      fuse: null,
      query: '',
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    filteredProjects() {
      let projects = this.projects
      if (this.query) {
        projects = this.fuse.search(this.query).map((p) => p.item)
      }
      return projects
    },
  },
  mounted() {
    const fuseOptions = {
      threshold: 0.1,
      keys: ['title.rendered', 'tags'],
    }
    const index = Fuse.createIndex(fuseOptions.keys, this.projects)
    this.fuse = new Fuse(this.projects, fuseOptions, index)
  },
  created() {
    this.$store.dispatch('getProjects')
  },
}
</script>
