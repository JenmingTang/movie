<template>
    <div>
        <!-- <el-space wrap :size="33" style="justify-content: center;">
            <template v-for="item in sortedData" :key="item.rank">
                <HotItem :data="item"></HotItem>
            </template>
        </el-space> -->
        <!-- 
            like Search.vue
         -->
         
    <el-row>
        <template v-for="(item, index) in sortedData" :key="item.rank">
            
            <el-col :span="8" :offset="0">
                <div style="margin: 10px;">

                    <!-- {{ item }} -->
                    <HotItem :data="item" />
                </div>

            </el-col>
        </template>
    </el-row>
    </div>
</template>
<script setup>
import HotItem from "../components/HotItem.vue";
import { hots } from "../data/hot";


// 创建原数组的副本，然后按照rank属性升序排序
const sortedData = [...hots].sort((a, b) => a.rank - b.rank);

// console.log('sortedData');
// console.log(sortedData);
</script>