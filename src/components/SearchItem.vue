<template>
    <el-card shadow="hover" style="border-radius: 10px;margin: 10px;">
        <el-row>
            <el-col :span="8">

                <div class="container" @click="toVideo">
                    <el-image :src="item.poster" class="img">
                    </el-image>
                    <div class="overlay"></div>

                    <div class="icon"></div>
                </div>
                <!-- <el-image class="img" :src="myName" /> -->
                <!-- <img :src="myName" class="img" > -->
            </el-col>
            <el-col :span="16">
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
            </el-col>

        </el-row>
    </el-card>
</template>
<script setup>
import { Promotion,ArrowLeftBold,CaretLeft,VideoPlay } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const props = defineProps(['item'])
/* 

            <router-link :to="{ name: 'video', params: { id: video.title } }">
*/
const router = useRouter()
const toVideo = () => router.push({ name: 'video', params: { id: props.item.name } })
</script>
<style scoped>
/* 

  max-width: 100%;
  图片默认大小缩放比

  图片自定义大小缩放比,改width

  max-width: 100%;
  height: auto;
  width: 100px;
  
                        <!-- 
                            Intrinsic size:	270 × 378 px
                            Intrinsic aspect ratio:	5∶7
                        -->
                        <!-- <img :src="myName" alt=""> -->
  */
.img {
    max-width: 100%;
    height: auto;
    width: 150px;
    border-radius: 10px;
    
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