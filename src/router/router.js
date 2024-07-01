import {createRouter,createWebHashHistory}  from 'vue-router'

import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
import HeadlineNews from "../components/HeadlineNews/index.vue";

const router = [
        {
            path: "/",
            component: Login
        },
        {
            path: "/login",
            component: Login,
            name: "Login"
        },
        {
            //头条详情
            path: "/detail",
            component: () => import("../components/Detail/index.vue"),
            name: "Detail",
        },
        {
            path: "/regist",
            component: Regist,
            name: "Regist"
        },
        {
            path: "/headlinenews",
            component: HeadlineNews,
            name: "HeadlineNews"
        },
        {
        path: "/addormodifynews",
        component: () => import("../components/addOrModifyNews/index.vue"),
        name: "addOrModifyNews",
        }
    ]

export default router