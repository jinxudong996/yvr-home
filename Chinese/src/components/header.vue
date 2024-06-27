<template>
  <div>
    <div class="allTop" id="header">
      <div class="w_1760 allTopCon">
        <div class="allTopLogo"><router-link to="/index"><img class="img100" src="../assets/images/logo.png"
              alt="" /></router-link></div>
        <div class="allTopConMenu">
          <ul>
            <li><router-link to="/index">首页</router-link></li>
            <li>
              <router-link to="/mr">MR 系列</router-link>
              <div class="allTopConMenuPos">
                <router-link to="/mr">玩出梦想 MR</router-link>
                <a @click="nowPre()">立即预约 </a>
              </div>
            </li>
            <li>
              <router-link to="/vr">VR 系列</router-link>
              <div class="allTopConMenuPos">
                <router-link to="/vr">YVR 2</router-link>
                <a href="https://mall.jd.com/index-1000425743.html" target="_blank">现在订购 </a>
              </div>
            </li>
            <li><router-link to="/store">购买渠道 </router-link>
              <div class="allTopConMenuPos">
                <router-link to="/store">线上商城 </router-link>
                <router-link to="/store?index=1">线下体验店 </router-link>
              </div>
            </li>
            <li><router-link to="/service">服务与支持 </router-link>
              <div class="allTopConMenuPos">
                <router-link to="/service?index=3">玩出梦想助手 </router-link>
                <router-link to="/service?index=1">串流助手 </router-link>
                <router-link to="/service?index=2">飞屏助手 </router-link>
              </div>
            </li>
            <li><router-link to="/about">关于我们 </router-link>
              <div class="allTopConMenuPos">
                <router-link to="/about?index=1">品牌故事 </router-link>
                <router-link to="/about?index=2">发展历程 </router-link>
                <router-link to="/news">品牌新闻 </router-link>
                <router-link to="/join">人才储备 </router-link>
                <router-link to="/about?index=3">联系我们 </router-link>
              </div>
            </li>
            <li @click="goDev()"><a>开发平台 </a></li>
          </ul>
        </div>
        <div class="allTopConRig">

          <!-- <div class="allTopConRigSea">
            <input type="search" placeholder="搜索玩出梦想" v-model="inputValue" />
            <div class="allTopConRigSeaBut" @click="toSearch(inputValue)"><a href="javascript:void(0);"></a></div>
          </div>
           <div class="allTopConRig_3"><a href="#"><img src="../assets/images/center.png" alt="" /> </a></div> -->
          <div class="allTopConRig_3">
            <el-dropdown  @command="handleCommand">
              <span class="el-dropdown-link">
                <a ><img src="../assets/images/center.png" alt="" /> </a>
                <!-- 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> -->
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="login">{{this.loginFlag == 1 ? this.userPhone : '登录'}}</el-dropdown-item>
                <el-dropdown-item command="register">{{this.loginFlag == 1 ? '登出' : '注册'}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          
          <div class="allTopConRig_2"><a @click="changeLanguage()"><img
                src="../assets/images/en.png" alt="" /> </a></div>
          <div class="allTopConRig_4 allTopMenu"><img src="../assets/images/ico.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="menuBox">
      <div class="menuBg"></div>
      <div class="bg"></div>
      <div class="nav">
        <div class="mxFooter">
          <div class="w_1760 mxFooterCon">
            <div class="mxFooterCon_1">
              <dl>
                <dt><router-link to="/mr">MR 系列</router-link></dt>
                <dd><router-link to="/mr">玩出梦想 MR</router-link></dd>
                <dd><a @click="nowPre()">立即预约 </a></dd>
              </dl>
              <dl>
                <dt><router-link to="/vr">VR 系列 </router-link></dt>
                <dd><router-link to="/vr">YVR 2 </router-link></dd>
                <dd><a href="https://mall.jd.com/index-1000425743.html" target="_blank">现在订购 </a></dd>
              </dl>
              <dl>
                <dt><router-link to="/store">购买渠道 </router-link></dt>
                <dd><router-link to="/store">线上商城 </router-link></dd>
                <dd><router-link to="/store?index=1">线下体验店 </router-link></dd>
              </dl>
              <dl>
                <dt><router-link to="/service">服务与支持 </router-link></dt>
                <dd><router-link to="/service?index=3">玩出梦想助手 </router-link></dd>
                <dd><router-link to="/service?index=1">串流助手 </router-link></dd>
                <dd><router-link to="/service?index=2">飞屏助手 </router-link></dd>
              </dl>
              <dl>
                <dt><router-link to="/about">关于我们 </router-link></dt>
                <dd><router-link to="/about?index=1">品牌故事 </router-link></dd>
                <dd><router-link to="/about?index=2">发展历程 </router-link></dd>
                <dd><router-link to="/news">品牌新闻 </router-link></dd>
                <dd><router-link to="/join">人才储备 </router-link></dd>
                <dd><router-link to="/about?index=3">联系我们 </router-link></dd>
              </dl>
              <dl>
                <dt @click="goDev()"><a>开发平台 </a></dt>
              </dl>
            </div>
            <div class="mxFooterConBot">
              <div class="mxFooterConBotTop">
                <div class="mxFooterConBotTop_1">
                  <h3>联系我们</h3>
                  <p>地址：上海市松江区新桥镇漕松路1号3幢玩出梦想 <span>总机：021-57098200（周一至周五)</span></p>
                </div>
                <div class="mxFooterConBotTop_2">
                  <div class="mxFooterConBotTop_2Menu">
                    <div><a
                        href="https://detail.tmall.com/item.htm?id=733419810527&spm=a21dvs.23580594.0.0.621e3d0duQpfGO&skuId=5247729007042"
                        target="_blank"><img src="../assets/images/tm.png" alt="" /> </a></div>
                    <div><a href="https://mall.jd.com/index-1000425743.html" target="_blank"><img
                          src="../assets/images/jd.png" alt="" /> </a></div>
                    <div><a href="#" target="_blank"><img src="../assets/images/wx.png" alt="" /> </a></div>
                    <div><a href="https://weibo.com/u/7740187132" target="_blank"><img src="../assets/images/wb.png"
                          alt="" /> </a>
                    </div>
                  </div>
                  <div class="mxFooterConBotTop_2Ewm"><img class="img100" src="../assets/images/ewm1.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="mxFooterConBotBot">
                <div class="mxFooterConBotBot_1">玩出梦想(上海)科技有限公司 沪公网安备31011702009037号 沪ICP备2020035905号</div>
                <div class="mxFooterConBotBot_2">
                  <router-link to="/page?index=1">法律条款</router-link>
                  <router-link to="/page?index=2">隐私保护</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="javascript:;" class="navClick"> </a>
    </div>
    <!-- 移动端 -->
    <div class="wapTop">
      <div class="wapTopLogo"><a href="index.html"><img src="../assets/images/logo.png"> </a></div>
      <div class="allTopConRig">

        <div class="allTopConRig_3"><a href="#"><img src="../assets/images/center.png" alt="" /> </a></div>
        <div class="allTopConRig_2"><a @click="changeLanguage()"><img
              src="../assets/images/en.png" alt="" /> </a></div>

      </div>
      <div class="banner_menu" id="openMenu">
        <s></s>
        <s></s>
        <s></s>
      </div>
    </div>
    <div class="wapTopBj">
      <ul class="topWapNrConLb">
        <li><router-link to="/">首页 </router-link></li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/mr">MR 系列 </router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/mr">玩出梦想 MR </router-link>
            <a @click="nowPre()">立即预约 </a>
          </div>
        </li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/vr">VR 系列 </router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/vr">YVR 2 </router-link>
            <a href="https://mall.jd.com/index-1000425743.html" target="_blank">现在订购 </a>
          </div>
        </li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/store">购买渠道 </router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/store">线上商城 </router-link>
            <router-link to="/store?index=1">线下体验店 </router-link>
          </div>
        </li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/service">服务与支持 </router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/service?index=3">玩出梦想助手 </router-link>
            <router-link to="/service?index=1">串流助手 </router-link>
            <router-link to="/service?index=2">飞屏助手 </router-link>
          </div>
        </li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/about">关于我们 </router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/about?index=1">品牌故事 </router-link>
            <router-link to="/about?index=2">发展历程 </router-link>
            <router-link to="/news">品牌新闻 </router-link>
            <router-link to="/join">人才储备 </router-link>
            <router-link to="/about?index=3">联系我们 </router-link>
          </div>
        </li>
        <li><a @click="goDev()">开发平台 </a></li>
      </ul>
    </div>

    <div class="homeFormMc" v-show="isShow">
      <div class="closeTc" @click="closeTc"></div>
      <div class="homeForm">
        <div class="homeFormMk">
          <label for="">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名 ：</label>
          <div class="homeFormMkInp"><input type="text" name="" id="" placeholder="请输入姓名" v-model="useName"></div>
        </div>
        <div class="homeFormMk">
          <label for="">联系方式 ：</label>
          <div class="homeFormMkInp"><input type="text" name="" id="" placeholder="请输入联系方式" v-model="phone"></div>
        </div>
        <div class="homeFormMk">
          <label for="">所&ensp;在&ensp;地 ：</label>
          <div class="homeFormMkInp"><input type="text" name="" id="" placeholder="请输入所在地" v-model="location"></div>
        </div>
        <div class="homeFormBut">
          <div class="allBtn active"><a href="javascript:void(0);" @click="toSubmmit">提交<span>&nbsp;</span></a></div>
        </div>
      </div>
    </div>
  </div>
  <!-- 头部 stop -->
</template>

<script>

  import { homeIndex, feedback } from '@/api/index.js'

  export default {
    data() {
      return {
        inputValue: '', // 绑定的值
        loginFlag:0, // 0 未登录  1 登录 
        userPhone:'',
        envi:'',
        isShow:false,

        useName:'',
        phone:'',
        location:'',
      }
    },
    mounted() {
      var hoverTimer;
      $('.allTopConMenu ul li').hover(function() {
        clearTimeout(hoverTimer);
        $("#header").addClass("bjHeise")
        $(".allTopConMenuPos").stop(false, true).hide();
        $(this).stop(false, true).find(".allTopConMenuPos").slideDown().siblings("li").find(".allTopConMenuPos").hide();
        // if ($(this).find(".allTopConMenuPos").is(':hidden')) {

        // } else {
        // 	// $(this).find(".allTopConMenuPos").slideUp();
        // }

      }, function() {
        $(".allTopConMenuPos").stop(false, true).hide();

      })

      $('#openMenu').on('click', function() {
        $(this).toggleClass('changeFigure');
        $(".wapTopBj").toggleClass('on');
      })
      $('.topWapNrConLb a').on('click', function() {
        $('#openMenu').removeClass('changeFigure');
        $(".wapTopBj").removeClass('on');
      })
      $('.topWapNrConLb .DjEjRow').on('click', function() {
        event.stopPropagation();
        if ($(this).parent().next().is(':hidden')) {
          $(this).parent().next().slideDown();
        } else {
          $(this).parent().next().slideUp();
        }
      })

      $('.allTopMenu').click(function() {
        $('.menuBox').addClass('on');
        $('.menuBg').addClass('on');
      });
      $('.navClick').click(function() {
        $('.menuBox').removeClass('on');
        $('.menuBg').removeClass('on');
      })

    this.initData()
      $(".menuBox a").click(function() {
        $('.menuBox').removeClass('on');
        $('.menuBg').removeClass('on');
      })



    },
    methods: {
      nowPre(){
        this.isShow = true
      },
      toSubmmit() {
        if (this.useName == '') {
          alert('请输入姓名')
          return
        }
        if (this.phone == '') {
          alert('请输入联系方式')
          return
        }
        // if (!isvalidMobile(this.phone)) {
        //   alert('请输入正确的手机号')
        //   return
        // }
        if (this.location == '') {
          alert('请输入所在地')
          return
        }
        feedback({
          location: this.location,
          name: this.useName,
          phone: this.phone
        }).then(res => {
          alert('提交成功')
          this.isShow = false
        })
      },
      closeTc() {
        this.isShow = false
      },
      goDev(){
      let dev1 = 'http://172.18.0.67:9700'
      let uat = 'https://apiuat.yvrdream.com/yvrdeveloper/#/index'
      let pro = 'https://developer.pfdm.cn'

      if(this.envi == 'dev'){
        window.location.href = dev1
      }else if(this.envi == 'uat'){
        window.location.href = uat
      }else{
        window.location.href = pro
      }
    },
    initData(){
      this.envi = this.environment()
      let param  = this.urlParamsParse()
      this.userPhone = param.phone
      this.userPhone ? this.loginFlag = 1 : this.loginFlag = 0
    },
    environment(){
      let currentDomain = window.location.hostname;
      if(currentDomain.includes('apiuat')){
        return 'uat'
      }else if(currentDomain.includes('localhost') || currentDomain.includes('172.18.0.67') ||  currentDomain.includes('apitest')){
        return 'dev'
      }else{
        return 'pro'
      }
    },
    urlParamsParse () {
      let obj = {};
      let reg = /[?&][^?&]+=[^?&]+/g;
      let url = window.location.href;
      let arr = url.match(reg);
      if (arr != null) {
        arr.forEach((item) => {
          let tempArr = item.substring(1).split("=");
          let key = decodeURIComponent(tempArr[0]);
          let val = decodeURIComponent(tempArr[1]);
          obj[key] = val;
        });
      }
      return obj;
    },
    handleCommand(val){
      
      if(this.loginFlag == 1){
        // 已登录
        if(val == 'login'){
          // 啥也不干
        }else{
          // 
          console.log('退出登录')
          let url = window.location.href.split('?')[0]
          window.location.href = url
          location.reload();
        }
      }else{
        // 未登录
        if(val == 'login'){
          // 啥也不干
          console.log('登录')
          this.goLogin()
        }else{
          // 
          console.log('注册')
          this.goLogin()
        }
      }
    },
    // 登录注册
    goLogin(){
      let dev1 = 'http://172.18.0.67:9528/login?iscn=true'
      let uat = 'https://apiuat.yvrdream.com/login?iscn=true'
      let pro = 'https://www.pfdm.cn/login?iscn=true'

      if(this.envi == 'dev'){
        window.location.href = dev1
      }else if(this.envi == 'uat'){
        window.location.href = uat
      }else{
        window.location.href = pro
      }
    },
    changeLanguage(){
      // 当前是中文
      let dev1 = 'http://localhost:9702/'
      let uat = 'https://apiuat.yvrdream.com/en/yvrofficial/#/index'
      let pro = 'https://www.pfdm.cn/en' 

      if(this.envi == 'dev'){
        window.location.href = dev1
      }else if(this.envi == 'uat'){
        window.location.href = uat
      }else{
        window.location.href = pro
      }
    },
      async toSearch() {
        if (this.inputValue == "") {
          alert("输入不能为空")
        } else {

          this.$router.push({
            path: '/search',
            query: {
              value: this.inputValue
            }
          })
        }

      }
    }
  }
</script>

<style scoped>
  .active .allTop {
    background: #000000 !important;
  }
</style>
