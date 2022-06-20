<script lang='ts' setup>
import Skill from '../../components/molecules/Skill.vue';
definePageMeta({
    layout: 'index',
});
const props = defineProps({
    data: {
        type: Object,
        required: true,
    }
})
</script>
<template>
    <Skill v-for="skill in data" :id="skill.id" :heading="skill.name" :value="skill.value" />
</template>