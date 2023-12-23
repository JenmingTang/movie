<template>
    <base-layout>
        <template #header>
            <br>
            <home-header />
            <br>
            <el-row>
                <el-col :span="20">
                    <type-list :data="types" />
                </el-col>
                <el-col :span="2" class="center">
                    <router-link to="/hot">

                        <el-image class="icon-img" :src="hot" />
                        <el-text tag="p">热门</el-text>
                    </router-link>
                </el-col>
                <el-col :span="2" class="center">

                    <router-link to="/rank">

                        <el-image class="icon-img" :src="rank" />
                        <el-text tag="p">排行榜</el-text>
                    </router-link>
                </el-col>
            </el-row>
        </template>
        <template #default>
            <br>
            <br>
            <br>
            <br>
            <br>
            <video-player :movie="id"></video-player>
        </template>
    </base-layout>
</template>

<script setup>
import BaseLayout from '../components/BaseLayout.vue'
import TypeList from '../components/TypeList.vue'
import HomeHeader from '../components/HomeHeader.vue'
import VideoPlayer from '../components/VideoPlayer.vue'

import hot from '../assets/imgs/hot.png'
import rank from '../assets/imgs/rank.png'

import types from '../data/types'

const props = defineProps({
    id: { type: String }
})
</script>

<style scoped>
.center {
    text-align: center;
}

.icon-img {
    width: 36px;
}
</style>