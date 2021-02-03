<template>
  <div class="container">
    <main>
      <h1>{{ post.title.rendered }}</h1>
      <small class="date">{{ post.date | dateformat }}</small>
      <section v-html="post.content.rendered"></section>
    </main>
    <div>
      <h3>Découvrir également :</h3>
      <div class="grid grid-cols-3 gap-3">
        <div v-for="bouncePost in bouncePosts" :key="bouncePost.id">
          <h3>
            <a :href="`blog/${bouncePost.slug}`">{{
              bouncePost.title.rendered
            }}</a>
          </h3>
          <small>{{ bouncePost.date | dateformat }}</small>
          <div v-html="bouncePost.excerpt.rendered"></div>
          <a :href="`blog/${bouncePost.slug}`">Lire ⟶</a>
        </div>
      </div>
    </div>
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
    posts() {
      return this.$store.state.posts
    },
    post() {
      return this.posts.find((el) => el.slug === this.slug)
    },
    bouncePosts() {
      return this.posts.filter((el) => el.slug !== this.slug).slice(0, 3)
    },
  },
  created() {
    this.$store.dispatch('getPosts')
  },
}
</script>
