<template>
    <div>
        <div class="box">
            <h1>login</h1>
            <div class="loginbtn" @click="signin">登录</div>
        </div>
    </div>
</template>

<script>
import { MAIN_URL } from "@_src/contant"
export default {
    methods:{
        signin(){
            location.href = MAIN_URL
        }
    }
}
</script>>

<style lang="less" scoped>
    .box{
        width: 400px;
        height: 300px;
        background: #ccc;
        margin: 20px auto;

        .loginbtn{
            width: 100%;
            line-height: 20px;
            background: #0ff;
            text-align: center;
        }
    }
</style>