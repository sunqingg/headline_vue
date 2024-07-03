import {createRouter,createWebHashHistory} from "vue-router";
import {defineUser} from "../store/UserStore.js";
import pinia from "../pinia.js";
import {getToken, removeToken} from "../utils/token-utils.ts";
import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
import HeadlineNews from "../components/HeadlineNews/index.vue";
// import * as userInfoStore from "../api/index.js";

const userInfoStore = defineUser(pinia)

const routes =   [
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
        name: "HeadlineNews",
        beforeRouteUpdate: async (to, from, next) => {
            await userInfoStore.getInfo()
        }
    },
    {
        path: "/addormodifynews",
        component: () => import("../components/addOrModifyNews/index.vue"),
        name: "addOrModifyNews",

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


router.beforeEach(async (to, from, next) => {
    // getInfo()
    const token = getToken()
    // console.log("token:  " +token)
    const userInfo = !!userInfoStore.nickName
    if (token) {
        if (to.path == "/login") {
            next({ path: "/" })
        } else {
            // nickname不是空(说明之前登陆过)
            if (userInfo) {
                next()
            } else {
                try {
                    await userInfoStore.getInfo()
                    next()
                } catch (error) {
                    removeToken()
                }
            }
        }
    } else {
        // 没登录调到首页
        to.fullPath ="/"
        next()
    }
});

// export default router
export  default  router