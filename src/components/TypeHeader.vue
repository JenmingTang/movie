<template>
    <el-row justify="space-between">
        <el-text size="large">{{ name }}</el-text>

        <router-link :to="{ name: 'type', query: { hash: name } }">
            <el-link :underline="false" type="primary">更多</el-link>
        </router-link>
    </el-row>
</template>

<script setup>
const props = defineProps({
    name: { type: String },
    more: { type: String }
})
</script>