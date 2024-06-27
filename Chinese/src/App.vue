<!--
 * @Author: jinxudong 1766551722@qq.com
 * @Date: 2024-06-23 11:17:36
 * @LastEditors: jinxudong 1766551722@qq.com
 * @LastEditTime: 2024-06-23 11:36:23
 * @FilePath: \yvr-home\Chinese\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
  #app{
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .el-dropdown-menu{
    top: 75px !important;
  }
</style>
