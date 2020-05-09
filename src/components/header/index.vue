<template>
    <div :class="`${prefixCls}-wrapper`">
        <div :class="`${prefixCls}-left`">

            <div :class="`${prefixCls}-left-logo`">
                <img src="@_src/images/logo.png" :alt="title">
            </div>
            <span :class="`${prefixCls}-left-title`" :style="writeTitle?'color:#FFF;':''">
                {{title}}
            </span>
        </div>
        <div :class="`${prefixCls}-right`">
            <span @click="signout">
                退出登录
            </span>
        </div>
    </div>
</template>

<script>
import { LOGIN_URL } from "@_src/contant"
const name = "c-header"
export default {
    name,
    props:{
        title:{
            type:String,
            default:"我是个默认标题"
        },
        writeTitle:{
            type:Boolean,
            default:()=>false
        }
    },
    data(){
        return {
            prefixCls:name,

        }
    },
    methods:{
        signout(){
            location.href = LOGIN_URL
        }
    }
}
</script>>