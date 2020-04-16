<template>
    <div>
        我是a-menu,路由菜单A
        <p>头部菜单是黑色的</p>
        <button @click="gotoB">去b菜单</button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        gotoB(){
            this.$router.push('/b-menu')
        }
    }
}
</script>