<script setup>
import Chips from '@/components/molecules/Chips.vue'
const props = defineProps({
    excerpt: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    }
})
</script>
<template>
    <div class="p-4 bg-white">
        <p>{{ excerpt }}</p>
        <div class="flex justify-between py-4">
            <Chips :chips="tags" />
        </div>
    </div>
</template>