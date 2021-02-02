<template>
  <section class="masthead">
    <h1>{{ tagline }}</h1>
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
