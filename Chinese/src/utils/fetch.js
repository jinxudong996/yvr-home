/*
 * @Author: jinxudong 1766551722@qq.com
 * @Date: 2024-06-23 11:17:38
 * @LastEditors: jinxudong 1766551722@qq.com
 * @LastEditTime: 2024-06-25 15:05:17
 * @FilePath: \yvr-home\Chinese\src\utils\fetch.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';
import qs from 'qs';
import Vue from "vue";
import store from '../store'

// 创建axios实例

// let BASE_API = 'http://pfdm.ucantech.net:10031/api'
let BASE_API = 'https://api.yvrdream.com/api'


Vue.prototype.BASE_API=BASE_API

const service = axios.create({
    //baseURL:location.hostname=='localhost'?'':process.env.BASE_API, // 跨域情况
    baseURL:BASE_API, // api的base_url
    timeout: 15000, // 请求超时时间
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
})

// request拦截器
service.interceptors.request.use(config => {
    config.headers['Authorization'] = "ticket "  // 让每个请求携带自定义token 请根据实际情况自行修改
    if(config.method == 'post'){
      config.headers['content-type'] = 'application/json;charset=UTF-8'
    }
    return config
}, error => {
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
    let data = res;//JSON.parse(res);
        if (data.code != 200) {

            return Promise.reject('error')
        } else {
            return data
        }
    },
    error => {
        console.log('err' + error) // for debug

        return Promise.reject(error)
    }
)
export default service
