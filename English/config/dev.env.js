'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://localhost:1442/api"', //本机环境
    FILE_UPLOAD_URL: '"development"', //文件地址
    VIDEO_FILE_UPLOAD_URL: '""' //视频地址
})
