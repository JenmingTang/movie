<template>
    <el-card shadow="always">

        <el-row>
            <el-col :span="8">

                <div class="container" @click="toVideo">
                    <el-image :src="item.poster">
                    </el-image>

                    <div class="text-overlay">{{ item.desc }}</div>
                    <div class="text-overlay-rank">{{ item.rank }}</div>
                    <div class="overlay-clip-path" :style="dynamicClip(item.rank)"></div>
                    <div class="overlay-clip-path-border" :style="dynamicClip(item.rank)"></div>
                    <div class="overlay"></div>

                    <div class="icon"></div>
                </div>
            </el-col>
            <el-col :span="16">
                <div style="text-align: end;">
                    <el-tag effect="plain" size="large">{{ item.type }}</el-tag>
                </div>
                <div style="margin-left: 10px;" class="gap-container">

                    <div>
                        <el-text style="font-size: x-large;">{{ item.name }}</el-text>
                    </div>
                    <div>
                        <el-text size="large" truncated>{{ item.publishYear + ' / ' + item.tags }}</el-text>
                    </div>
                    <div>
                        <el-text size="large" truncated>{{ item.actors }}</el-text>
                    </div>
                    <!-- <el-icon size="30"><VideoPlay /></el-icon> -->
                    <!-- 
                        size="large" 
                     -->
                    <el-button @click="toVideo" type="success" :icon="VideoPlay" plain round>详情</el-button>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>
<script setup>
import { VideoPlay } from "@element-plus/icons-vue";
/* 

    {
        rank:5,
        desc:'HD国语',
        type:'电影',
        name:'卿卿日常',
        publishYear: '2022',
        tags:'中国大陆剧情、爱情、古装、喜剧、中国大陆剧情、爱情、古装、喜剧、中国大陆剧情、爱情、古装、喜剧、',
        actors:'唐大大、堂大王、大大唐、大唐大、唐大大、堂大王、大大唐、大唐大、唐大大、堂大王、大大唐、大唐大、',
    },
*/
import { useRouter } from "vue-router";
/* 
传入对象会被包一层对象
*/
const { data } = defineProps(['data'])
const item = data
// console.log('hot item');
// console.log(item);
/* 

            <router-link :to="{ name: 'video', params: { id: video.title } }">
*/
const router = useRouter()
const toVideo = () => router.push({ name: 'video', params: { id: item.name } })
const dynamicClip = rank => {
    switch (rank) {
        case 1:
            return {
                'background-color': '#ff0000'
            }
        // break;

        case 2:

            return {
                'background-color': '#ff8000'
            }

        case 3:

            return {
                'background-color': '#ffff00'
            }
        default:
            break;
    }

}
</script>
<style scoped>
.gap-container div {
    margin-bottom: 5px;
}

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

.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
    /* 根据需要设置最大宽度 */
}

/* 
  控制 el-row 的width 即可
  */
.img {
    max-width: 100%;
    height: auto;
    width: 150px;
}

.text-overlay {
    position: absolute;
    bottom: 0;
    left: 25%;
    /* background-color: rgba(255, 255, 255, 0.7); */
    color: white;
    font-weight: bolder;
    /* 背景颜色，可根据需要调整 */
    padding: 10px;
}

.text-overlay-rank {
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: rgba(255, 255, 255, 0.7); */
    color: white;
    font-size: xx-large;
    font-weight: bolder;
    z-index: 1;
    /* 背景颜色，可根据需要调整 */
    padding: 0px 5px;
    /* background-color: rgba(85, 179, 116, 0.747); */
}

.overlay-clip-path {

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(128, 128, 128);
    clip-path: circle(20% at 0 0);
}

.overlay-clip-path-border {

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    /* red */
    /* background-color: #ff0000;
    background-color: #ff8000;
    background-color: rgb(255, 255, 0); */
    clip-path: polygon(0% 0%, 0% 100%, 3% 100%, 3% 3%, 97% 3%, 97% 97%, 3% 97%, 0 100%, 100% 100%, 100% 0%);
}

.module-item-top::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    background: #9e9e9e;
    height: 100px;
    width: 100px;
    border-radius: 16px;
    transform: rotateZ(45deg);
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
}</style>