<template>
  <keep-alive>
    <el-config-provider :button="config" :locale="zhCn">
      <router-view></router-view>
      <el-backtop :right="50" :bottom="100" />
    </el-config-provider>
  </keep-alive>
</template>

<script setup>
import { ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const config = ref({
  autoInsertSpace: true,
})
</script>

<style>

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: var(--el-font-family);
}

a {
  text-decoration: none;
}</style>