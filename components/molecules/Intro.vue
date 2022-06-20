<script setup>
import Heading from '@/components/atoms/Heading.vue'
const props = defineProps({
    heading: {
        type: String,
        required: true,
    }
})
</script>
<template>
    <div class="relative">
        <img src="https://blog.vacancesweb.be/wp-content/uploads/2021/09/chan_copy1.jpg" class="m-0" alt="" srcset="">
        <Heading :heading="heading" class=" text-white rounded-3xl px-4  absolute bottom-4 left-2" />
    </div>
</template>