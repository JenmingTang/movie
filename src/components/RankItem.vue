<template>
    <el-card shadow="always" style="width: 330px;">
        <template #header>
            <div style="display: flex; flex-direction: column;">
                <el-text size="large" style="text-align: center;width: 100%;">{{ rank.name }}</el-text>
                <el-text size="small" type="info" style="text-align: end;width: 100%;">{{ rank.updateTime }}</el-text>
            </div>
        </template>
        <template v-for="item in sortedData" :key="item.rank">
            <div class="container" style="width: 100%;" @click="toVideo(item.name)">
                <div style="display: flex;align-items: center; margin-bottom: 10px;">
                    <div style="flex: 2;" :style="getDynamicStyle(item.rank)">{{ item.rank }}</div>
                    <!-- <div style="flex: 2;" :style="{fontSize: item.rank===1?'small':'xx-large'}">{{ item.rank }}</div> -->
                    <!-- <div style="flex: 2;" :style="{fontSize: fontSizeGrade}">{{ item.rank }}</div> -->
                    <div style="flex: 20;display: flex; flex-direction: column;">
                        <!-- 
                        'primary' | 'success' | 'warning' | 'danger' | 'info'
                     -->
                        <el-text size="large" style="text-align: start;width: 100%;" :style="getDynamicStyle(item.rank)">{{
                            item.name }}</el-text>
                        <el-text type="info" style="text-align: start;width: 100%;">{{ item.desc }}</el-text>
                    </div>
                    <div style="flex: 2; font-size: ;">

                        <el-icon :style="getDynamicStyle(item.rank)">
                            <ArrowRightBold />
                        </el-icon>
                    </div>
                </div>

                <div class="overlay"></div>
                <!-- <div class="icon"></div> -->
            </div>
        </template>
    </el-card>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
/* 
传入对象会被包一层对象
*/
const data2 = defineProps(['rank'])
// console.log('ramk');
// console.log(rank);
const rank = data2.rank
const data = rank.data
// 按照rank属性升序排序
// data.sort((a, b) => a.rank - b.rank);

// 创建原数组的副本，然后按照rank属性升序排序
const sortedData = [...data].sort((a, b) => a.rank - b.rank);

// console.log(sortedData);
// 原数组的顺序不变
// console.log('原数组的顺序不变'); 
// console.log(data); 


const getDynamicStyle = rank => {
    // switch case
    // switch (rank%5) {
    switch (rank) {
        case 1:
            return {
                fontSize: 'xx-large',
                color: '#009688'
            }
        case 2:
            return {
                fontSize: 'x-large',
                color: '#2f2bdf'
            }
        case 3:
            return {
                fontSize: 'larger',
                color: '#56a5c4'
            }
        case 4:
            return {
                fontSize: 'large',
                color: '#c45656'
            }
        case 5:
            return {
                fontSize: 'medium',
                color: '#ea4c89'
            }
        // default:
        //     return {
        //         fontSize: 'xx-large',
        //         color: '#009688'
        //     }
    }
}

const toVideo = name =>
    router.push({ name: 'video', params: { id: name } })

</script>
<style scoped>
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
    /* 
    也不生效啊
    */
    /* transition: cursor 0.5s; */
}

.container:hover .overlay {
    opacity: 0.4;
    cursor: pointer;
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    background-image: url(../assets/imgs/hot.png);
    background-size: cover;
    opacity: 0;
    transition: opacity 0.5s;
}

.container:hover .icon {
    opacity: 1;
}
</style>