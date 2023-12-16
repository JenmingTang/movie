<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-sub-menu index="0">
            <template #title><el-icon>
                    <User />
                </el-icon>{{ username }}</template>
            <el-menu-item index="2-1">
                <router-link to="/login">
                    <el-link :underline="false" type="primary">注销登录</el-link>
                    <el-icon>
                        <Switch />
                    </el-icon>
                </router-link>

            </el-menu-item>
            <el-menu-item index="2-2">
                <router-link to="/register">
                    <el-link :underline="false" type="primary">去注册新用户</el-link>
                    <el-icon>
                        <TopRight />
                    </el-icon>
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
import { UserFilled, User, Plus, TopRight, Switch } from "@element-plus/icons-vue";
const username =
    JSON.parse(localStorage.getItem('user')).value
</script>