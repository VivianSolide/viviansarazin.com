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
        <button class="px-1 text-left w-full">{{ tag.name }}</button>
      </div>
    </div>
    <div class="container pt-0">
      <div class="grid grid-cols-1 md:gap-6 md:grid-cols-3"></div>
      <h4 class="text-right">
        <span class="text-indigo-600">{{ sortedPosts.length }}</span> article{{
          sortedPosts.length > 1 ? 's' : ''
        }}
      </h4>
      <div class="grid md:grid-cols-3 md:gap-6 grid-cols-1 mt-3">
        <div
          v-for="post in sortedPosts"
          :key="post.id"
          class="border border-current hover:shadow-xl hover:border-indigo-600 hover:mt-12"
          style="display: inline-table"
        >
          <div v-if="post.cover">
            <img :src="post.cover" alt="" srcset="" />
          </div>
          <div class="p-3">
            <h3 class="mt-6 mb-3">
              <NuxtLink :to="`blog/${post.slug}`">{{
                post.title.rendered
              }}</NuxtLink>
            </h3>
            <small>{{ post.date | dateformat }}</small>
            <div v-html="post.excerpt.rendered"></div>
            <button
              class="text-white bg-indigo-600 hover:bg-indigo-700 hover:border-white p-3"
            >
              <NuxtLink :to="`blog/${post.slug}`">Lire ⟶</NuxtLink>
            </button>
          </div>
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
