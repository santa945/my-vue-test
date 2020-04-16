import Vue from "vue"
import VueRouter from "vue-router"
import store from "./store";

export const routes = [
    //初始进入重定向至父级通用事项页面
  {
    path: "/",
    redirect: "/a-menu",
    name: "home"
  },
  {
    name: "菜单A",
    path: "/a-menu",
    component: () => import("./pages/amenu/index.vue"),
    meta: { title: "菜单A",icon:"xxx", menuCode: "xxx"}
  },
  {
    name: "菜单B",
    path: "/b-menu",
    component: () => import("./pages/bmenu/index.vue"),
    meta: { title: "菜单A",icon:"xxx", menuCode: "xxx"}
  },
]

// header的title的颜色是否为白色路由
const writeTitleRoutes = [
  {
    path: "/b-menu",
    name: "菜单B",
  },
];

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

//配置路由导航守卫

router.beforeEach((to,from,next)=>{
  let writeTitle=false
  for(let i=0;i<writeTitleRoutes.length;i++){
    const pathReg = new RegExp(writeTitleRoutes[i].path);
    if (pathReg.test(to.path)) {
      writeTitle = true;
      break;
    }
  }

  if (store.state.index.writeTitle !== writeTitle) {
    store.commit("index/SET_TITLE", writeTitle);
  }
  next();
})

export default router;