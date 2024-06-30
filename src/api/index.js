import request from "../utils/request.js";

export function getInfo(info) {
    return request.get("user/getUserInfo")
}

export const getfindNewsPageInfo = (info) => {
    return request.post("portal/findNewsPage",info);
};

export const removeByHid = (id) => {
    return request({
        method: "post",
        url: "headline/removeByHid",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data:`hid=${id}`
    })
};