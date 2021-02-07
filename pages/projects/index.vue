<template>
  <div>
    <app-masthead tagline="Projects"></app-masthead>
    <div class="container">
      <div class="grid md:grid-cols-3 md:gap-6 grid-cols-1">
        <div v-for="project in projects" :key="project.id">
          <h3>
            <a :href="`projects/${project.slug}`">{{
              project.title.rendered
            }}</a>
          </h3>
          <small>{{ project.date | dateformat }}</small>
          <!-- <div v-html="project.excerpt.rendered"></div> -->
          <a :href="`projects/${project.slug}`" class="readmore slide"
            >Lire ⟶</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMasthead from '@/components/AppMasthead.vue'

export default {
  components: {
    AppMasthead,
  },
  data() {
    return {
      activeClass: 'active-class',
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
  },
  created() {
    console.log('created')
    this.$store.dispatch('getProjects')
  },
}
</script>
