<template>
    <el-row justify="space-between">
        <el-col v-bind="span" v-for="video in videos" :key="video.title">
            <router-link :to="{ name: 'video', params: { id: video.title } }">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <el-image :src="video.src" fit="cover" style="width: 100%; height: 240px"></el-image>
                    <div style="padding: 14px">
                        <el-text>{{ video.title }}</el-text>
                    </div>
                </el-card>
            </router-link>
        </el-col>
    </el-row>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

const span = {
    md: 4
}

const videos = computed(function () {
    return props.data
})

</script>