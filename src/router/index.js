import staticRouter from "./router.js";
import {createRouter,createWebHashHistory} from "vue-router";
import {defineUser} from "../store/UserStore.js";
import pinia from "../pinia.js";
import {getToken, removeToken} from "../utils/token-utils.ts";

// 前置守卫,每次router跳转都先要检测token是否过期

const finalRouter = createRouter({
    history: createWebHashHistory(),
    routes: staticRouter,
})

const userInfoStore = defineUser(pinia)

finalRouter.beforeEach(async (to, from, next) => {
    const token = getToken()
    // console.log("token:  " +token)
    const userInfo = !!userInfoStore.nickName
    if (token) {
        if (to.path == "/login") {
            next({ path: "/" })
        } else {
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
        next()
    }
});

// finalRouter.beforeEach(
//     async (to, from, next) => {
//         const token = getToken();
//         const nickName = userInfo.nickName;
//         if (token) {
//             if (to.path == "/login") {
//                 next({path: "/"})
//             } else {
//                 if (nickName) {
//                     next()
//                 } //nickName不存在说明没登录
//                 else {
//                     try {
//                         await userInfo.getInfo()
//                         next()
//                     } catch (error) {
//                         removeToken();
//                     }
//                 }
//             }
//         } else {
//             next()
//         }
//     }
// )
export  default  finalRouter