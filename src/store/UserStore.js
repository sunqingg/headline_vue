import {defineStore} from "pinia";
import {getInfo,getLogin} from "../api/index.js";
import {setToken,getToken, removeToken} from "../utils/token-utils.ts";

export const defineUser = defineStore(
    "loginUser",
    {
        state:()=>({
                token:getToken(),
                nickName:'',
                uid: ''

}),
        actions:{
        //     登录的异步操作 保存token
            async login(loginUser){
                const result1 = await getLogin(loginUser);
                // console.log("调试result: ", result1)
                const result = result1.data
                const token = result.data.token
                // console.log("调试token: ", token)
                this.token = token;
                setToken(token);
                return result.code
            },
            async getInfo() {
                const userInfo = await getInfo();
                console.log("用户昵称: " +userInfo.data.data.loginUser.nickName )
                this.nickName = userInfo.data.data.loginUser.nickName
                this.uid = userInfo.data.data.loginUser.uid
            },
            initUserInfo(){
                removeToken()
                this.nickName = ""
                this.uid = ""
                console.log('1111111111');

            }
        }
    }
)