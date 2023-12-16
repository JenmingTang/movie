<template>
    <base-layout>
        <template #header>
            <br>
            <home-header />
            <br>
        </template>
        <template #default>
            <br>
            <br>
            <el-space>
                <template v-for="t in dropdowns">
                    <el-dropdown placement="bottom-start">
                        <el-space>
                            <template v-if="query[t.k]">
                                <el-link :underline="false">
                                    <el-tag closable @close="handleCloseLink(t.k)">{{ query[t.k] }}</el-tag>
                                </el-link>
                            </template>
                            <template v-else>
                                <el-link :underline="false">
                                    <el-tag type="info">
                                        <span>{{ t.name }}</span>
                                        <el-icon class="el-icon--right">
                                            <arrow-down />
                                        </el-icon>
                                    </el-tag>
                                </el-link>
                            </template>
                        </el-space>
                        <template #dropdown>
                            <dropdown-list @select="handleSelectedLink" :data="t.data" :type="t.k" :value="query[t.k]" />
                        </template>
                    </el-dropdown>
                </template>
            </el-space>
            <template v-for="video in streams">
                <el-divider />
                <router-link :to="{ name: 'video', params: { id: video.title } }">
                    <el-row>
                        <el-col :span="4">
                            <el-image :src="video.src" />
                        </el-col>
                        <el-col :span="20" class="pl">
                            <el-text class="title">{{ video.title }}</el-text>
                            <br>
                            <el-space spacer="/">
                                <el-text>喜剧</el-text>
                                <el-text>欧美</el-text>
                                <el-text>2022</el-text>
                                <el-text>艺术</el-text>
                            </el-space>
                            <br>
                            <el-text>导演: 李·昂克里奇 / 阿德里安·莫利纳</el-text>
                            <br>
                            <el-text>编剧: 阿德里安·莫利纳 / 马修·奥尔德里奇 / 李·昂克里奇 / 詹森·卡茨</el-text>
                            <br>
                            <el-text>主演: 安东尼·冈萨雷斯 / 盖尔·加西亚·贝纳尔 / 本杰明·布拉特 / 阿兰娜·乌巴赫 / 芮妮·维克托</el-text>
                            <br>
                            <br>
                            <el-text tag="p" style="text-align: justify; line-height: 1.5;">
                                　　热爱音乐的米格尔（安东尼·冈萨雷兹 Anthony Gonzalez
                                配音）不幸地出生在一个视音乐为洪水猛兽的大家庭之中，一家人只盼着米格尔快快长大，好继承家里传承了数代的制鞋产业。一年一度的亡灵节即将来临，每逢这一天，去世的亲人们的魂魄便可凭借着摆在祭坛上的照片返回现世和生者团圆。
                                <br>
                                　　在一场意外中，米格尔竟然穿越到了亡灵国度之中，在太阳升起之前，他必须得到一位亲人的祝福，否则就将会永远地留在这个世界里。米格尔决定去寻找已故的歌神德拉库斯（本杰明·布拉特
                                Benjamin
                                Bratt 配音），因为他很有可能就是自己的祖父。途中，米格尔邂逅了落魄乐手埃克托（盖尔·加西亚·贝纳尔 Gael García Bernal
                                配音），也渐渐发现了德拉库斯隐藏已久的秘密。
                            </el-text>
                        </el-col>
                    </el-row>
                </router-link>
                <br>
            </template>
            <br>
            <br>
            <br>
        </template>
    </base-layout>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import BaseLayout from '../components/BaseLayout.vue'
import HomeHeader from '../components/HomeHeader.vue'
import DropdownList from '../components/DropdownList.vue'
import { ArrowDown } from '@element-plus/icons-vue'

import { types, sites, years, tags, ranks } from '../data/types'
import stream from '../data/stream'
onMounted(() => {
    // 使用 window.scrollTo 滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // 添加 smooth 选项实现平滑滚动效果
    });
})
const router = useRouter()
const route = useRoute()

const query = computed(function () {
    return route.query
})

const streams = computed(function () {
    const arr = []
    arr.push(...stream[0].videos)
    arr.push(...stream[1].videos)
    arr.push(...stream[2].videos)
    return arr.reverse()
})

const dropdowns = [
    { name: '类型', k: 'hash', data: types },
    { name: '地区', k: 'site', data: sites },
    { name: '年代', k: 'year', data: years },
    { name: '标签', k: 'tag', data: tags },
    { name: '排序', k: 'rank', data: ranks },
]

function handleSelectedLink(_type, selected) {
    let params = Object.assign({}, query.value)
    params[_type] = selected
    router.push({ name: 'type', query: params })
}

function handleCloseLink(_type) {
    let params = Object.assign({}, query.value)
    params[_type] = undefined
    console.log(params);
    router.push({ name: 'type', query: params })
}
</script>

<style scoped>
.pl {
    padding-left: 16px;
}

.size-18 {
    font-size: 18px;
}

.title {
    font-size: 32px;
    font-weight: bold;
}

:focus-visible {
    outline: none;
}
</style>