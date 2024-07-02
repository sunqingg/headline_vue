<template>
  <div class="container">
    <div class="listItem">
      <!-- 每一项头条列表 -->
      <div class="containerItem" v-for="item in pageData" :key="item.hid">
        <div>
          <span class="text">{{ item.title }}</span>
        </div>
        <div class="detail">
          <span>{{ item.type == 1 ? "新闻":item.type == 2 ? "体育": item.type == 3 ? "娱乐": item.type == 4 ? "科技" : "其他" }}</span>
          <span>{{item.pageViews}}浏览</span>
<!--          <span>{{item.pastHours}}小时前</span>-->
          <span>{{(new Date().getDay()-new Date(item.createTime).getDay())*24 + (new Date().getHours() - new Date(item.createTime).getHours())}}小时前</span>
        </div>
        <div>
          <el-button @click="toDetail(item.hid)" size="small"
            style="background: #198754; margin-left: 15px; color: #bbd3dc">查看全文</el-button>
          <el-popconfirm v-if="item.publisher == type" @confirm="handlerDelete(item.hid)" :title="`您确定要删除${item.title}吗?`">
            <template #reference>
              <el-button    size="small" style="background: #dc3545; color: #bbd3dc">删除</el-button>
            </template>
          </el-popconfirm>

          <el-button @click="Modify(item.hid)" v-if="item.publisher == type"  size="small" style="background: #212529; color: #bbd3dc">修改</el-button>
        </div>
      </div>
  
      <!-- 分页器 -->
      <div style="margin-top: 20px">
        <el-pagination 
          v-model:current-page="findNewsPageInfo.pageNum"
          v-model:page-size="findNewsPageInfo.pageSize" 
          @size-change="getPageList"
          @current-change="getPageList"
          :page-sizes="[5,7,10]" 
          background
          layout="prev, pager, next , ->, sizes, total" 
          :total="totalSize" />
      </div>
    </div>
  </div>
</template>

<script  setup>
import {reactive, ref, watch, onMounted,getCurrentInstance} from "vue";
import { getfindNewsPageInfo , removeByHid ,deleteNews} from "../../api/index"
import request from "../../utils/request.js";
import {defineUser} from "../../store/UserStore.js";
import pinia from "../../pinia.js";
import router from "../../router/index.js";

const userInfoStore = defineUser(pinia)

const Modify = (hid) => {
  router.push({name:"addOrModifyNews",query: {hid}})
}

const type = userInfoStore.uid
// console.log("uid" + type)
const  { Bus } = getCurrentInstance().appContext.config.globalProperties
// const currentTime = ref(new Date().getHours());
const toDetail = (hid) => {
  router.push({name:"Detail", query: {hid}})
}

let findNewsPageInfo = reactive({
  keyWords: "",
  type: 1,
  pageNum: 1,
  pageSize: 10
})


let pageData = reactive([{
  hid: null,
  pageViews: null,
  pastHours: null,
  publisher: null,
  title: "",
  type: null
}])
let totalSize  = ref(0)

let getData = async () =>{
  try {
    const data =  await request.post("portal/findNewsPage",findNewsPageInfo)
    // console.log(data)
    return data.data
  }catch (error){
    return Promise.reject(error)
  }

}

// 组件挂载的生命周期钩子
onMounted(() => {
  getPageList()
})

const getPageList = async () => {
  // let result = await getfindNewsPageInfo(findNewsPageInfo.value)
  let message = await getData()
  let result = message.data
  // console.log("result: ",result)
  // pageData = result.pageInfo.pageData
  Object.assign(pageData,result.pageInfo.pageData)
  // pageData.pastHours = currentTime - new Date(result.pageInfo.pageData.createTime).getHours
  // console.log("pageData", pageData)
  findNewsPageInfo.pageNum = result.pageInfo.pageNum
  findNewsPageInfo.pageSize = result.pageInfo.pageSize
  totalSize.value = +result.pageInfo.totalSize
}


Bus.on('tid', (type) => {
  findNewsPageInfo.type = type
})

watch(() => findNewsPageInfo.value, () => {
  getPageList()
}, {
  deep: true,
})
// 初始化请求分页列表数据
// 删除文章
const handlerDelete =async (hid) =>{
  let result1 = await deleteNews(hid);
  console.log(result1)
  const result = result1.data;
  if (result.code === 200){
    alert("删除成功")
  }
}




</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  // 列表样式
  .listItem {
    .containerItem {
      margin-top: 20px;
      border-radius: 10px;
      border: 2px solid #ebebeb;
      width: 600px;
      height: 120px;

      div {
        margin-top: 10px;
      }

      .text {
        margin-left: 15px;
        color: #353a3f;
      }

      .detail {
        span {
          margin-left: 15px;
          color: #8b778a;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
