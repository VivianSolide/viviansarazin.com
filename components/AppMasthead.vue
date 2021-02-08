<template>
  <div class="bg-indigo-600 text-gray-100 border border-t-0">
    <h1 class="text-center pt-6 md:py-12">{{ tagline }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    tagline: {
      type: String,
      default: 'Lorem Ipsum',
    },
  },
}
</script>
