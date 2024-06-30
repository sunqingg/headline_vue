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
            component: Login
        },
        {
            path: "/regist",
            component: Regist
        },
        {
            path: "/headlinenews",
            component: HeadlineNews
        }
    ]

export default router