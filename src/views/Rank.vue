<template>
    <!-- 
        alignment="normal"
     -->
    <!-- end start center stretch -->

     <!-- 
        劈成三份多余了
      -->
    <template v-for="(rank,index) in ranks3" :key="index">
        <el-space wrap alignment="normal" :size="33" style="justify-content: center;width: 100%;margin-top: 20px;">
            <template v-for="item in rank" :key="item.name">


                <RankItem :rank="item"></RankItem>
                <!-- <el-row>
                    <el-col :span="8">
                        
                        <HotItem :rank="item"></HotItem>
                    </el-col>
                </el-row> -->
            </template>
        </el-space>
    </template>
</template>
<script setup>
import { computed } from "vue";
import RankItem from '../components/RankItem.vue'

import ranks from "../data/ranks";
// console.log('ranks');
// console.log(ranks);
/* 

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 将数组按每三个元素为一组重新组合
const arrayB = Array.from({ length: Math.ceil(arrayA.length / 3) }, (_, index) =>
arrayA.slice(index * 3, index * 3 + 3)
);

console.log('arrayB');
console.log(arrayB);
*/
/* 

    劈成三份
*/
const ranks3 = Array.from({ length: Math.ceil(ranks.length / 3) }, (_, index) =>
    ranks.slice(index * 3, index * 3 + 3)
);
/* 
？？这里不需要就能实时了
*/
// const ranks3 = computed(()=>ranks2)
</script>

<style scoped></style>