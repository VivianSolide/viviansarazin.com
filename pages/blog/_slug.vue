<template>
  <div>
    <img :src="post.cover" alt="" srcset="" class="w-full md:w-1/2 mx-auto" />
    <div class="container">
      <main>
        <h1>{{ post.title.rendered }}</h1>
        <small class="date">{{ post.date | dateformat }}</small>
        <section v-html="post.content.rendered"></section>
      </main>
      <div>
        <h3>Découvrir également :</h3>
        <div class="grid md:grid-cols-3 gap-3 my-3">
          <div
            v-for="bouncePost in bouncePosts"
            :key="bouncePost.id"
            class="border p-3"
            style="display: inline-table"
          >
            <h3>
              <NuxtLink :to="`/blog/${bouncePost.slug}`">{{
                bouncePost.title.rendered
              }}</NuxtLink>
            </h3>
            <small>{{ bouncePost.date | dateformat }}</small>
            <div v-html="bouncePost.excerpt.rendered"></div>
            <button
              class="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-3"
            >
              <NuxtLink :to="`${bouncePost.slug}`">Lire ⟶</NuxtLink>
            </button>
          </div>
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
