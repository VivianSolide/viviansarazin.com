<template>
  <div>
    <app-masthead tagline="Blog"></app-masthead>
    <div class="container">
      <h2>Catégories</h2>
      <div class="grid md:grid-cols-5 md:gap-6 grid-cols-3">
        <div
          v-for="tag in tags"
          :key="tag.id"
          :class="[tag.id === selectedTag ? activeClass : '']"
          @click="updateTag(tag)"
        >
          <a class="text-center">{{ tag.name }}</a>
        </div>
      </div>
      <h2>
        {{ sortedPosts.length }} article{{ sortedPosts.length > 1 ? 's' : '' }}
      </h2>
      <div class="grid md:grid-cols-3 md:gap-6 grid-cols-1">
        <div v-for="post in sortedPosts" :key="post.id">
          <h3>
            <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
          </h3>
          <small>{{ post.date | dateformat }}</small>
          <div v-html="post.excerpt.rendered"></div>
          <a :href="`blog/${post.slug}`" class="readmore slide">Lire ⟶</a>
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
      activeClass: 'active-class',
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
