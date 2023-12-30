<template>
    <!-- <ElDivider>Jenming</ElDivider>
        <div class="jenming"></div>
    <ElDivider>Jenming</ElDivider> -->
    <base-layout>
        <template #header>
            <br>
            <home-header />
            <br>
            <el-row>
                <el-col :span="20">
                    <type-list :data="types" />
                </el-col>
                <!-- 
                    template 自定义
                 -->
                <template v-if="$route.path === '/home' || $route.path === '/' || $route.path === '/search'">
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

                </template>

                <!-- 
                    以下自定义
                 -->
                <template v-if="$route.path === '/rank'">
                    <el-col :span="4" class="center">
                        <router-link to="/hot">
                            <el-image class="icon-img" :src="hot" />
                            <el-text tag="p">热门</el-text>
                        </router-link>
                    </el-col>

                </template>
                <template v-if="$route.path === '/hot'">
                    <el-col :span="4" class="center">
                        <router-link to="/rank">
                            <el-image class="icon-img" :src="rank" />
                            <el-text tag="p">排行榜</el-text>
                        </router-link>
                    </el-col>
                </template>

            </el-row>
        </template>
        <template #default>
            <!-- <br>
            <br>
            <br>
            <br>
            <video-top-carousel :data="carousels" />
            <br>
            <template v-for="stream in streams">
                <type-header :name="stream.name" :more="stream.more" />
                <br>
                <video-box :data="stream.videos" />
                <br><br><br>
            </template> -->
            <!-- 
                以下自定义
             -->
            <br>
            <br>
            <br>
            <br>
        <el-divider></el-divider>
            <router-view></router-view>
        </template>
    </base-layout>
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
import { ElDivider } from 'element-plus'

</script>

<style scoped>
.center {
    text-align: center;
}

.icon-img {
    width: 36px;
}
.jenming {
    width: 100px;
    height: 100px;
    background-color: aqua;
    transition: all 0.5s;
}

.jenming:hover {
    background-color: black;
    width: 200px;
    height: 200px;
}
</style>