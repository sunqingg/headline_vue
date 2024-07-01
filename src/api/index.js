import request from "../utils/request.js";

export function getInfo() {
    return request.get("user/getUserInfo")
}

export const getfindNewsPageInfo = (info) => {
    return request.post("portal/findNewsPage",info);
};
export const getfindAllTypes = () => {
    return request.get("portal/findAllTypes");
};

export const isUserOverdue = () => {
    return request.get("user/checkLogin")
}

export const getshowHeadlineDetail = (id) => {
    // return request({
    //     method: "POST",
    //     url: "headline/findHeadlineByHid",
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    //     },
    //     data: `hid=${id}`
    // },id);
    return request.post("headline/findHeadlineByHid",`hid=${id}`)
};

export const getFindHeadlineByHid = (id) => {
    // return request({
    //     method: "POST",
    //     url: "headline/findHeadlineByHid",
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    //     },
    //     data: `hid=${id}`
    // },id);
    return request.post("headline/findHeadlineByHid",`hid=${id}`)
};
export const getLogin = (info) => {
    // console.log("info",info)
    return   request.post("user/login",info);
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