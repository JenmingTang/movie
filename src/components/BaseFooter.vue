<template>
    <el-divider />
    <el-row justify="center">
        <!-- <p>designed by &copy; chenzhtbb 2023</p> -->
        <p>designed by &copy; {{ designer }}</p>
    </el-row>
    <br>
</template>

<script setup>
defineProps(['designer'])
</script>