import {defineStore} from "pinia";
import {getInfo} from "../api/index.js";
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
            login(token){
                this.token = token;
                setToken(token)
            },
            async getInfo() {
                const result = await getInfo();
                this.nickName = result.loginUser.nickName
                this.uid = result.loginUser.uid
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