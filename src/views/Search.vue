<template>
    <!-- <hr> -->
    <!-- <el-row :gutter="20"> -->
    <el-row>
        <template v-for="(item, index) in list" :key="index">

            <el-col :span="12" :offset="0">
                <!-- {{ item }} -->
                <SearchItem :item="item" />

            </el-col>
        </template>
    </el-row>
</template>
<script setup>
import items  from "../data/search";
import SearchItem from "../components/SearchItem.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
/* 
当前在该页面，push 不会跳转
*/
console.log('Search.vue');
const route = useRoute()
/* 
预处理
*/
const list = items.map((item,index) => {
    item.name = `${route.query.name} ${index}`
    return item;
})
/* 
这也不需要啊？？老师要写干嘛
*/
// const list = computed(() => items2)
</script>
