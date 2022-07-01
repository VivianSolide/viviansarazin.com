<script lang='ts' setup>
const { mate } = useRoute().params
</script>

<template>
  <div>
    <ContentDoc :path="`/team/${mate}`" />
  </div>
</template>
