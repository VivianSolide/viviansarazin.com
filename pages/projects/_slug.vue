<template>
  <div class="container">
    <h1>{{ project.title.rendered }}</h1>
    <small class="date">{{ project.date | dateformat }}</small>
    <section v-html="project.content.rendered"></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
    project() {
      return this.projects.find((el) => el.slug === this.slug)
    },
  },
  created() {
    this.$store.dispatch('getProjects')
  },
}
</script>
