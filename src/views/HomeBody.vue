<template>
    <!-- <br>
            <br>
            <br>
            <br> -->
    <video-top-carousel :data="carousels" />
    <br>
    <template v-for="stream in streams">
        <type-header :name="stream.name" :more="stream.more" />
        <br>
        <video-box :data="stream.videos" />
        <br><br><br>
    </template>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue'
import VideoBox from '../components/VideoBox.vue'
import TypeHeader from '../components/TypeHeader.vue'
import TypeList from '../components/TypeList.vue'
import VideoTopCarousel from '../components/VideoTopCarousel.vue'
import HomeHeader from '../components/HomeHeader.vue'

import hot from '../assets/imgs/hot.png'
import rank from '../assets/imgs/rank.png'

import streams from '../data/stream'
import carousels from '../data/carousel'
import types from '../data/types'

</script>

<style scoped>
.center {
    text-align: center;
}

.icon-img {
    width: 36px;
}
</style>