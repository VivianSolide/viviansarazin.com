<script lang='ts' setup>
const { slug } = useRoute().params
</script>

<template>
  <div>
    <ContentDoc :path="`/projects/${slug}`" />
  </div>
</template>
