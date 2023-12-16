<template>
    <h2>{{ movie }}</h2>
    <br>
    <video controls style="width: 100%; max-height: 600px;">
        <source :src="MyLove" type="video/mp4">
    </video>
</template>

<script setup>
import MyLove from '../assets/videos/MyLove.mp4'

const props = defineProps({
    movie: { type: String }
})
</script>