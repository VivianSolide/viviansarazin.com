<template>
  <div>
    <app-masthead tagline="Blog"></app-masthead>
    <div class="hidden md:block w-64 pl-6 my-2 fixed">
      <h3>Catégories</h3>
      <div
        v-for="tag in tags"
        :key="tag.id"
        :class="[tag.id === selectedTag ? activeClass : '']"
        @click="updateTag(tag)"
      >
        <a class="text-center">{{ tag.name }}</a>
      </div>
    </div>
    <div class="container">
      <div class="grid grid-cols-1 md:gap-6 md:grid-cols-3"></div>
      <h4 class="text-right">
        {{ sortedPosts.length }} article{{ sortedPosts.length > 1 ? 's' : '' }}
      </h4>
      <div class="grid md:grid-cols-3 md:gap-6 grid-cols-1 mt-3">
        <div
          v-for="post in sortedPosts"
          :key="post.id"
          class="border p-3"
          style="display: inline-table"
        >
          <h3 class="mt-0">
            <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
          </h3>
          <small>{{ post.date | dateformat }}</small>
          <div v-html="post.excerpt.rendered"></div>
          <button
            class="text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-3"
          >
            <a :href="`blog/${post.slug}`">Lire ⟶</a>
          </button>
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
      selectedTag: null,
      activeClass:
        'text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    tags() {
      return this.$store.state.tags
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts
      return this.posts.filter((el) => el.tags.includes(this.selectedTag))
    },
  },
  created() {
    this.$store.dispatch('getPosts')
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id
      } else {
        this.selectedTag = null
      }
    },
  },
}
</script>
