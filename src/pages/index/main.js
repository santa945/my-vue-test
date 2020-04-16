import "@_src/styles/common/index.less";
import "@_src/styles/components.less";
import Vue from "vue"
import index from "./index.vue"
import api from "@_src/apis/index"
import store from "./store";
import router from "./router";

Vue.config.productionTip = false
Vue.prototype.$api = api;

import Header from "@_src/components/header/index.vue"

Vue.component("Header",Header);

new Vue({
    el:"#app",
    router,
    store,
    ...index
})