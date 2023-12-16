<template>
    <el-carousel :interval="4000" height="420px">
        <el-carousel-item v-for="item in data">
            <router-link :to="{ name: 'video', params: { id: item.title } }">
                <el-image :src="item.src" style="height: 500px; width: 100%;" fit="cover" />
            </router-link>
        </el-carousel-item>
    </el-carousel>
</template>

<script setup>
const props = defineProps({
    data: { type: Array, default: () => [] }
})
</script>