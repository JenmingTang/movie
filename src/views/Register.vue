<template>
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
                            <el-input placeholder="请输入用户名" clearable v-model="user.username">
                                <template #prepend>
                                    <el-button :icon="User" />
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入邮箱" clearable v-model="user.email">
                                <template #prepend>
                                    <el-button :icon="Message" />
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
                            <el-input placeholder="请二次确认密码" type="password" show-password clearable
                                v-model="user.repassword">
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
                                    <el-button style="width: 100%;" type="success" plain @click="register">注册</el-button>
                                </el-col>

                            </el-row>
                        </el-form-item>
                        <el-form-item style="float: right;">
                            <el-text>已有账号？🤔</el-text>
                            <router-link to="/login">
                                <el-link :underline="false" type="primary">立即登录</el-link>
                            </router-link>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </base-layout>
    <!-- 
        Element Plus has added a global method $notify for app.config.globalProperties. So in a vue instance you can call Notification like what we did in this page. 
        
import { ElNotification } from 'element-plus'
     -->
</template>

<script setup>
import { ref } from 'vue'
import { User, Lock, Message } from '@element-plus/icons-vue'
import BaseLayout from '../components/BaseLayout.vue';
import Logo from '../components/Logo.vue'
import { ElMessage, ElNotification } from 'element-plus'
import { setWithExpiry, getWithExpiry, MINUTE } from "../utilities/time";
import { SHA256 } from "../utilities/encryption";
import { useRouter } from "vue-router";
const router = useRouter()
const user = ref({
    username: '',
    email: '',
    password: '',
    repassword: ''
})
/* 
是否合规
*/
const isVerified = () => {
    if (
        user.value.username === '' ||
        user.value.email === '' ||
        user.value.password === '' ||
        user.value.repassword === '' ||
        user.value.password !== user.value.repassword
    ) {

        // ElNotification.success({
        ElNotification({
            type: 'error',
            title: 'Error',
            message: '不能为空或两次密码不一致！',
            showClose: false,
            // position: 'top-right',
        })

        return false
    }
    return true

}
/* 
只做用户表存储，login页才做登录状态过期处理

登录状态单独一个表
*/
const register = async () => {
    const users = JSON.parse(localStorage.getItem('users'))
    if (users != null && users.length > 0) {
        let flag = false
        users.forEach(v => {
            if (flag) return
            if (v.username === user.value.username) {
                flag = true
                ElMessage({
                    // showClose: true,
                    message: '已经存在该用户',
                    type: 'error',
                })
            }
        })
        if (flag) return
        if (!isVerified()) return
        user.value.repassword = user.value.password = await SHA256(user.value.password)
        users.push(user.value)
        localStorage.setItem('users', JSON.stringify(users))
    } else {

        if (!isVerified()) return
        user.value.repassword = user.value.password = await SHA256(user.value.password)
        localStorage.setItem('users', JSON.stringify([user.value]))
        // localStorage.setItem('users', JSON.stringify([{...user.value}]))
    }


    /* 
    注册成功直接登录进去，不用用户再一次登录
    */
    ElNotification({
        type: 'success',
        title: '欢迎成为会员！',
        message: user.value.username,
        showClose: false,
        // position: 'top-right',
    })
    setWithExpiry('user', user.value.username, MINUTE * 10)
    reset()
    router.replace('/')
}
const reset = () => {

    // 重置
    user.value = {
        username: '',
        email: '',
        password: '',
        repassword: ''
    }
}
</script>