<template>
    <!-- <el-button @click="set">set</el-button>
    <el-button @click="get">get</el-button>
    <el-button @click="remove">remove</el-button>
    <el-button @click="clear">clear</el-button> -->
    <hr>
    <base-layout>
        <el-row justify="center">
            <el-col :span="8">
                <el-card>
                    <el-row justify="center">
                        <logo size="32px" />
                    </el-row>
                    <br>
                    <el-form :model="user">
                        <el-form-item>
                            <el-input placeholder="请输入用户名 / 邮箱" clearable v-model="user.username">
                                <template #prepend>
                                    <el-button :icon="User" />
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入密码" type="password" show-password clearable v-model="user.password">
                                <template #prepend>
                                    <el-button :icon="Lock" />
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>

                            <el-row style="width: 100%;">
                                <el-col :span="11" style="text-align: center;">

                                    <el-button style="width: 100%;" type="warning" plain @click="reset">重置</el-button>
                                </el-col>
                                <el-col :span="2">
                                </el-col>
                                <el-col :span="11" style="text-align: center;">
                                    <el-button style="width: 100%;" type="primary" plain @click="login">登录</el-button>
                                </el-col>

                            </el-row>
                        </el-form-item>
                        <el-form-item style="float: right;">
                            <el-text>还没有账号？</el-text>
                            <router-link to="/register">
                                <el-link :underline="false" type="success">立即注册</el-link>
                            </router-link>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </base-layout>
</template>

<script setup>
/* 
// 存储数据到 localStorage
localStorage.setItem('username', 'JohnDoe');
// 获取数据
const username = localStorage.getItem('username');
// 从 localStorage 中删除数据
localStorage.removeItem('isLoggedIn');
// 清空 localStorage 中的所有数据
localStorage.clear();
*/
import { ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import BaseLayout from '../components/BaseLayout.vue';
import Logo from '../components/Logo.vue'
import { setWithExpiry, getWithExpiry, MINUTE } from "../utilities/time";
import { SHA256 } from "../utilities/encryption";

import { ElMessage, ElNotification } from 'element-plus'

import { useRouter } from "vue-router";
const router = useRouter()
const set = () => {
    /* 
    过期了没
    ok
    */
    console.log("getWithExpiry('a')");
    console.log(getWithExpiry('a'));
}
const get = () => {
    alert(sessionStorage.getItem('user'))

}
const remove = () => {
    sessionStorage.removeItem('user')

}
const clear = () => {
    sessionStorage.clear()
}
const user = ref({
    username: '',
    password: ''
})

/* 
是否合规
*/
const isVerified = () => {
    if (
        user.value.username === '' ||
        user.value.password === ''
    ) {

        // ElNotification.success({
        ElNotification({
            type: 'error',
            title: 'Error',
            message: '不能为空！',
            showClose: false,
            // position: 'top-right',
        })

        return false
    }
    return true

}
/* 
login页才做登录状态过期处理，register页只做用户表存储，
登录状态单独一个表
目前过期算法，只能一个一个用户考虑
*/

const login = async () => {
    /* 
    true
   console.log(null===null);
   true
   console.log(1!==0);
   */
    //    return
    /* 
    用户是否存在
    */
    const users = JSON.parse(localStorage.getItem('users'))
    let flag = false
    let savedPassword = ''
    if (users != null && users.length != 0) {
        users.forEach(v => {
            if (v.username == user.value.username) {
                flag = true
                savedPassword = v.password
            }
        })
    }
    if (!flag) {
        ElMessage({
            // showClose: true,
            message: '不存在该用户',
            type: 'error',
        })
        return
    }
    /* 
    是否合规
    */
    if (!isVerified()) return
    /* 
    密码对吗
    */
    // console.log('savedPassword');
    // console.log(savedPassword);
    // console.log('SHA256(user.value.password) === SHA256(savedPassword)');
    // console.log(await SHA256(user.value.password) === savedPassword);
    if (
        !(await SHA256(user.value.password) === savedPassword)
    ) {

        ElMessage({
            // showClose: true,
            message: '密码不对',
            type: 'error',
        })
        return
    }
    /* 
    登录成功
重置、设置状态
null 不存数据，一分钟
key 不要用户名，因为只维护一个用户，维护多个未实现
*/
    setWithExpiry('user', user.value.username, MINUTE * 10)

    ElNotification({
        type: 'success',
        title: '欢迎回来！',
        message: user.value.username,
        showClose: false,
        // position: 'top-right',
    })
    reset()


    /* 
    浏览器历史记录是由浏览器自己管理的，并且通常不允许JavaScript从中删除或清除所有记录。
    */
    router.replace('/')
}
const reset = () => {
    // 重置
    user.value = {
        username: '',
        password: ''
    }
}
</script>