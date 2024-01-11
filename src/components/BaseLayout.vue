<template>
    <el-container>
        <el-row>
            <el-col :offset="4" :span="16">
                <el-header>
                    <slot name="header"></slot>
                </el-header>
                <el-main>
                    <slot></slot>
                </el-main>
            </el-col>
        </el-row>
        <el-footer>
            <base-footer :designer="'chenzhtbb & Jenming 2023'" />
        </el-footer>
    </el-container>
</template>

<script setup>
import BaseFooter from '../components/BaseFooter.vue'
</script>