<template>
    <el-row align="middle">
        <el-col :span="4">
            <logo />
        </el-col>
        <el-col :offset="2" :span="12">
            <el-row>
                <el-input v-model="searchText" placeholder="请输入电影名称">
                    <template #append>
                        <el-button @click="search" :icon="Search" />
                    </template>
                </el-input>
            </el-row>
        </el-col>
        <el-col :offset="2" :span="4">
            <el-row justify="end">
                <login-box />
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import LoginBox from './LoginBox.vue'
import Logo from './Logo.vue'
import { useRouter, useRoute } from "vue-router";

const searchText = ref('')

function search() {
    if (searchText.value === '')
        return
    /* 
    
    router.push({
    name: 'type',
    params: { id: 123 },
    query: { name: 'example' }
    })
    console.log(this.$route.params.id) // 123
    console.log(this.$route.query.name) // 'example'
    */
    /* 
    /search ok
    */
    pushWithQuery({ name: searchText.value })
}

const router = useRouter()
const route = useRoute()

function pushWithQuery(query) {
    /* 
    push 到已经渲染的页面，router实例直接忽略
    
    */
    router.push('/blank')
    /* 
    1毫秒，报错
    */
    setTimeout(() => {
        router.replace({
            name: 'search',
            query: {
                ...route.query,
                ...query,
            },
            /* 
            要在 router 中定义才能用 /users/:id
            */
            // params: {
            //     ...route.params,
            //     id: 11
            // }
        })
    }, 100);
}
</script>
