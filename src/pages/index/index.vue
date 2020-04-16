<template>
    <div>
        <Header :title="title" :writeTitle="writeTitle"></Header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data(){
        return{
            title:"index实例的title"
        }
    },
    computed:{
        ...mapState("index",["writeTitle"])
    }
}
</script>