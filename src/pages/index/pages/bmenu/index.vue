<template>
    <div>
         我是b-menu,路由菜单B
        <p>头部菜单是白色的</p>
        <button @click="gotoA">去a菜单</button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        gotoA(){
            this.$router.push('/a-menu')
        }
    }
}
</script>