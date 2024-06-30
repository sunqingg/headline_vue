import axios from 'axios'
import { ElMessage } from 'element-plus';
import NProgress from "nprogress";
import {defineUser} from "../store/UserStore.js";
import pinia from "../pinia.js";

let instance = axios.create(
    {
        baseURL: "http://localhost:8080/",
        timeout: 10000
    }
)

instance.interceptors.request.use(
    request => {
        NProgress.start()//开启进度条
        const UserInfoStore = defineUser(pinia)
        // request.headers.Accept = 'application/json, text/plain, text/html,*/*'.headers.Accept = 'application/json, text/plain, text/html,*/*'
        const token = UserInfoStore.token;
        if (token){
            (request.headers)['token'] = token
        }
        return request
    },
    request => {
        console.log("请求错误(几乎不可能发生)")
        return request
    }
)

instance.interceptors.response.use(
    // 正常返回(没报错)
    response => {
        // response.headers.Accept = 'application/json, text/plain, text/html,*/*'.headers.Accept = 'application/json, text/plain, text/html,*/*'
        // console.log("安全返回")
        // return response.data.data
        // NProgress.done()//关闭进度条

        if(response.data.code !== 200){
            // 判断响应状态码
            if (response.data.code == 501)  return  Promise.reject("用户名有误")
            else if (response.data.code == 503) return  Promise.reject("密码有误")
            else if (response.data.code == 504) return  Promise.reject("登录已过期")
            else if (response.data.code == 505) return  Promise.reject("用户名占用")
        } else {
            return response; /* 返回成功响应数据中的data属性数据 */
        }
    },
    // 产生异常了
    error => {
        console.log("返回不是2xx",error)
        return Promise.reject(error.message)
    }
)
// 默认导出
export default instance