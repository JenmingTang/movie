<template>
    <!-- <el-card shadow="hover" style="border-radius: 10px;margin: 10px;"> -->
    <div style="padding: 8px;box-shadow: 5px 5px 10px rgba(111, 33, 33, 0.3);">

        <el-row>
            <el-col :span="8">
                <div class="container" @click="toVideo">
                    <el-image class="img" :src="item.poster">
                    </el-image>
                    <div class="overlay"></div>
                    <div class="icon"></div>
                </div>
            </el-col>
            <el-col :span="16">
                <div style="padding-left: 8px;">
                    <div style="margin-bottom: 10px;">
                        <el-text type="primary" size="large">{{ item.name }}</el-text>

                    </div>
                    <div style="margin-bottom: 10px;">
                        <template v-for="t in item.tags" :key="t">
                            <el-tag size="large" effect="dark" round>{{ t }}</el-tag>&nbsp;&nbsp;
                        </template>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <el-text type="info">别名: </el-text>
                        <el-text>{{ item.alias }}</el-text>

                    </div>
                    <div style="margin-bottom: 10px;">
                        <el-text type="info">标签: </el-text>
                        <el-text>{{ item.tag }}</el-text>

                    </div>
                    <div style="margin-bottom: 10px;">

                        <el-text type="info">剧情: </el-text>
                        <el-text truncated>{{ item.description }}</el-text>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <!-- <el-icon><CaretLeft /></el-icon> -->
                        <!-- <el-icon><ArrowLeftBold /></el-icon> -->
                        <!-- <el-icon><Promotion /></el-icon> -->
                        <el-button @click="toVideo" :icon="VideoPlay">点击播放</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
    <!-- </el-card> -->
</template>
<script setup>
import { Promotion, ArrowLeftBold, CaretLeft, VideoPlay } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const props = defineProps(['item'])
/* 

            <router-link :to="{ name: 'video', params: { id: video.title } }">
*/
const router = useRouter()
const toVideo = () => router.push({ name: 'video', params: { id: props.item.name } })
</script>
<style scoped>
.img {
    width: 100%;
    height: auto;
}

.container {
    position: relative;
    display: inline-block;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.5s;
}

.container:hover .overlay {
    opacity: 1;
    cursor: pointer;
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    background-image: url(../assets/imgs/playback.png);
    background-size: cover;
    opacity: 0;
    transition: opacity 0.5s;
}

.container:hover .icon {
    opacity: 1;
    cursor: pointer;
}
</style>