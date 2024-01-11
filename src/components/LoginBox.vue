<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-sub-menu index="0">
            <template #title><el-icon>
                    <User />
                </el-icon>{{ username }}</template>
            <el-menu-item index="2-1">
                <!-- <el-link :underline="false" type="primary">注销登录</el-link> -->


                <el-link :icon="Switch" type="warning" @click="logout">注销登录
                    <!-- <el-icon>
                            <Switch />
                        </el-icon> -->
                </el-link>

            </el-menu-item>
            <el-menu-item index="2-2">
                <router-link to="/register">
                    <el-link :icon="TopRight" type="success">去注册新用户

                    </el-link>
                </router-link></el-menu-item>
            <!-- <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu> -->
        </el-sub-menu>
    </el-menu>

    <!-- <el-text type="info">&nbsp;/&nbsp;</el-text> -->
</template>

<script setup>
import { UserFilled, InfoFilled, User, Plus, TopRight, Switch } from "@element-plus/icons-vue";


import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from "vue-router";
const router = useRouter()
const handleSelect = (item, index) => {
    console.log(item, index)
}

const activeIndex = ''

const username =
    JSON.parse(localStorage.getItem('user')).value



const logout = () => {
    ElMessageBox.confirm(
        '真的要登出吗！',
        '警告',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
            //自定义图标有问题
            draggable: true
        }
    )
        .then(() => {
            //在路由配置设置了移除用户登录状态了，这里就不用了
            router.replace('/login')
        })
        .catch(() => {
        })
}
</script>