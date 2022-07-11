<script lang='ts' setup>
import Heading from '../atoms/Heading.vue'
import Chip from '../atoms/Chip.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

definePageMeta({
  layout: 'index'
})

const positions = props.data.map((el, i) => {
  return {
    id: i,
    name: el.name ? el.name : el.institution,
    location: el.location ? el.location : '',
    startDate: el.startDate ? el.startDate : '',
    endDate: el.endDate ? el.endDate : '',
    position: el.position ? el.position : el.studyType,
    summary: el.summary
  }
})
</script>

<template>
  <div v-for="data in positions" :key="data.id">
    <div class="flex flex-row justify-between items-baseline">
      <div>
        <Heading :heading="data.name" :order="3" />
        <p class="italic">
          {{ data.location }}
        </p>
      </div>
      <div class="flex space-x-1">
        <Chip :chip="`${data.startDate}  ${data.endDate ? data.endDate : 'Current'}`" />
      </div>
    </div>
    <div class="flex flex-col justify-around">
      <b> {{ data.position }}</b>
      <div v-html="data.summary" />
    </div>
  </div>
</template>
