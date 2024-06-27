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
