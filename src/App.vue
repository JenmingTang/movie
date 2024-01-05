<template>
  <keep-alive>
    <el-config-provider :button="config" :locale="zhCn">
      <router-view></router-view>
      <el-backtop :right="50" :bottom="100" />
    </el-config-provider>
  </keep-alive>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ElMessage } from 'element-plus'
const config = ref({
  autoInsertSpace: true,
})


onMounted(() => {
  // 检查本地存储是否已经显示过弹窗
  const hasShownModal = localStorage.getItem('hasShownModal');

  // 如果未显示过，显示弹窗并将状态记录到本地存储
  if (!hasShownModal) {
    /* 
    使用ele消息显示成功信息
    */
    ElMessage({
      message: '欢迎使用电影搜索系统',
      type: 'success',
      showClose: false,
    })
    localStorage.setItem('hasShownModal', 'true');
  }
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
}

</style>