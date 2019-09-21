import Vue from "vue";
// 导入vue路由
import VueRouter from "vue-router"
// + 导入组件
import App from "@/App.vue"
import Login from "@/page/Login.vue"



Vue.use(VueRouter)

const routes = [
    {path:'/login',component:Login}
]

const router = new VueRouter({
    routes
})

new Vue({
    el:'#app',

    router,

    render(createElement){
        return createElement(App)
    }
})

