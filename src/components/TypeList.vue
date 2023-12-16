<template>
    <template v-for="item in items">
        <el-row justify="space-between" style="padding-bottom: 12px;">
            <el-col :span="2" v-for="t in item" tag="span">
                <router-link :to="{ name: 'type', query: { hash: t.name } }">
                    <el-tag :disable-transitions="true" class="tag">{{ t.name }}</el-tag>
                </router-link>
            </el-col>
        </el-row>
    </template>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    data: { type: Array, default: () => [] }
})

const items = computed(() => {
    let len = props.data.length / 2
    const types = []
    types.push(props.data.slice(0, len))
    types.push(props.data.slice(len))
    return types
})
</script>

<style scoped>
.tag {
    width: 64px;
    padding: 8px auto;
}
</style>