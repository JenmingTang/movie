<template>
    <router-link to="/">
        <el-row>
            <el-image style="width: 40px;" :src="icon" />
            &nbsp;
            <el-text type="info" :style="{ 'font-size': size }">简单电影网</el-text>
        </el-row>
    </router-link>
</template>

<script setup>
import icon from '../assets/imgs/movie.png'
const props = defineProps({
    size: { type: String, default: '14px' }
})
</script>