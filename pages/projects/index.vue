<template>
  <div>
    <app-masthead tagline="Projects"></app-masthead>
    <div class="container">
      <input
        v-model="query"
        type="search"
        aria-label="Search"
        class="bg-transparent w-full p-3 placeholder-current border-current leading-6 border"
        placeholder="🔍 Frameworks, skills ..."
      />
      <div
        v-if="filteredProjects.length > 0"
        class="grid md:gap-6 grid-cols-1 mt-3"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="border border-current my-3 md:my-0"
        >
          <img :src="project.cover" alt="" srcset="" class="w-full" />
          <div class="p-3">
            <h3 class="mt-1">
              <NuxtLink :to="`projects/${project.slug}`">{{
                project.title.rendered
              }}</NuxtLink>
            </h3>
            <div class="flex items-center">
              <div class="w-3/4" v-html="project.excerpt.rendered"></div>
              <div class="w-1/8">
                <button
                  v-for="tag in project.tags"
                  :key="tag.id"
                  class="text-white rounded-full bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-3 py-1"
                >
                  {{ tag.name }}
                </button>
              </div>
            </div>

            <button
              class="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-3"
            >
              <NuxtLink :to="`/projects/${project.slug}`"
                >En savoir plus ⟶</NuxtLink
              >
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="mt-12">🤷 Oupsss...</p>
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
    projectsTags() {
      return this.$store.state.projectsTags
    },
    filteredProjects() {
      let projects = this.projects

      for (let el = 0; el < projects.length; el++) {
        const project = projects[el]
        if (project.tags.length > 0) {
          for (let i = 0; i < project.tags.length; i++) {
            for (let j = 0; j < this.projectsTags.length; j++) {
              if (projects[el].tags[i] === this.projectsTags[j].id) {
                projects[el].tags[i] = this.projectsTags[j]
              }
            }
          }
        }
      }

      if (this.query) {
        projects = this.fuse.search(this.query).map((p) => p.item)
      }
      return projects
    },
  },
  mounted() {
    const fuseOptions = {
      threshold: 0.1,
      keys: ['title.rendered', 'tags.name'],
    }
    const index = Fuse.createIndex(fuseOptions.keys, this.projects)
    this.fuse = new Fuse(this.projects, fuseOptions, index)
  },
  created() {
    this.$store.dispatch('getProjects')
  },
}
</script>
