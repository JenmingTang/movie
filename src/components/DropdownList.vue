<template>
    <div style="max-width: 400px; padding: 16px;">
        <el-space wrap>
            <template v-for="item in data">
                <el-link :underline="false" @click="$emit('select', type, item.name)">
                    <el-tag :disable-transitions="true" :type="value == item.name ? '' : 'info'">{{ item.name }}</el-tag>
                </el-link>
            </template>
        </el-space>
    </div>
</template>

<script setup>
const props = defineProps({
    type: { type: String },
    data: { type: Array, default: () => [] },
    value: { type: String },
})
const emits = defineEmits(['select'])
</script>