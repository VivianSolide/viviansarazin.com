<template>
  <section>
    <h1 class="text-center">{{ tagline }}</h1>
  </section>
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
