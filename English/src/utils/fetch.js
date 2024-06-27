import axios from "axios";
import qs from "qs";
import Vue from "vue";
import store from "../store";

// 创建axios实例

// let BASE_API = "http://pfdm.ucantech.net:10031/api";

let BASE_API = "https://api.yvrdream.com/api"
Vue.prototype.BASE_API = BASE_API;

const service = axios.create({
  //baseURL:location.hostname=='localhost'?'':process.env.BASE_API, // 跨域情况
  baseURL: BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
  headers: { "content-type": "application/x-www-form-urlencoded" }
});

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers["Authorization"] = "ticket "; // 让每个请求携带自定义token 请根据实际情况自行修改
    if (config.method == "get") {
      if(!config.params){
        config.params = {}
      }
      config.params.lang = "en";
    } else {
       config.headers['content-type'] = 'application/json;charset=UTF-8'
      config.data.lang = "en";
    }

    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    let data = res; //JSON.parse(res);
    if (data.code != 200) {
      return Promise.reject("error");
    } else {
      return data;
    }
  },
  error => {
    console.log("err" + error); // for debug

    return Promise.reject(error);
  }
);
export default service;
