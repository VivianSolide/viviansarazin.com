<script lang='ts' setup>
import Heading from '@/components/atoms/Heading.vue'
import Position from '@/components/organisms/Position.vue'
import Skills from '@/components/organisms/Skills.vue'

definePageMeta({
  layout: 'index'
})

const { data } = await useAsyncData('resume', () => queryContent('/resume').findOne())

const computeDiffYears = (startDate: Date, endDate: Date) => {
  const diff = endDate.getTime() - startDate.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
}

const now = new Date()
const birthDate = new Date(1988, 10, 3)
const ironHackStartDate = new Date(2017, 10, 1)

const years = computeDiffYears(birthDate, now)
const codingYears = computeDiffYears(ironHackStartDate, now)
</script>

<template>
  <div class="pt-32">
    <!-- Basics -->
    <Heading heading="Vivian SARAZIN" :order="1" />
    <div class="grid md:grid-cols-2">
      <div class="flex flex-col justify-center">
        <Heading heading="Basics" />
        <p>He/his</p>
        <p>{{ years }} y/o</p>
        <p>Living in {{ data.basics.location.city }}, France</p>
        <p>Around {{ codingYears }} coding years</p>
        <p><strong>Looking for a Nuxt3 challenge</strong></p>
      </div>
      <div>
        <img src="~/public/assets/images/profile.jpeg" class="rounded-full" alt="Vivian SARAZIN profile pic">
      </div>
    </div>
    <!-- Positions -->
    <div class="grid grid-cols-1">
      <Heading heading="Jobs" />
      <Position :data="data.work" />
      <Heading heading="Education" />
      <Position :data="data.education" />
    </div>
    <!-- Skills -->
    <div class="grid grid-cols-2">
      <div>
        <Heading heading="Skills" />
        <Skills :data="data.skills" />
      </div>
      <div>
        <Heading heading="Languages" />
        <Skills :data="data.languages" />
      </div>
    </div>
  </div>
</template>
