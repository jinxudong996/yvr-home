<template>
  <div>
    <div class="allTop" id="header">
      <div class="w_1760 allTopCon">
        <div class="allTopLogo"><router-link to="/index"><img class="img100" src="../assets/images/logo.png"
              alt="" /></router-link></div>
        <div class="allTopConMenu">
          <ul>
            <li><router-link to="/index">Home</router-link></li>
            <li>
              <router-link to="/mr">MR Series</router-link>
              <div class="allTopConMenuPos">
                <router-link to="/mr">Play For Dream MR</router-link>
                <a href="https://mall.jd.com/index-1000425743.html" target="_blank">Order Now</a>
              </div>
            </li>
            <li>
              <router-link to="/vr">VR Series</router-link>
              <div class="allTopConMenuPos">
                <router-link to="/vr">YVR 2</router-link>
                <a href="https://mall.jd.com/index-1000425743.html" target="_blank">Order Now</a>
              </div>
            </li>
            <li><router-link to="/store">Where to Buy</router-link>
              <div class="allTopConMenuPos">
                <router-link to="/store">Shop Online</router-link>
                <router-link to="/store?index=1">Find a Store</router-link>
              </div>
            </li>
            <li><router-link to="/service">Support</router-link>
              <div class="allTopConMenuPos">
                <router-link to="/service?index=3">Play For Dream Mobile Assistant</router-link>
                <router-link to="/service?index=1">PCVR Assistant</router-link>
                <router-link to="/service?index=2">Film Stream Assistant</router-link>
              </div>
            </li>
            <li><router-link to="/about">About Us</router-link>
              <div class="allTopConMenuPos">
                <router-link to="/about?index=1">Our Stories</router-link>
                <router-link to="/about?index=2">Milestones</router-link>
                <router-link to="/news">Newsroom</router-link>
                <router-link to="/join">Career</router-link>
                <router-link to="/about?index=3">Contact Us</router-link>
              </div>
            </li>
            <li @click="goDev()" style="cursor:pointer;"><a>Developer</a></li>
          </ul>
        </div>
        <div class="allTopConRig">
          <!-- <div class="allTopConRigSea">
            <input type="search" placeholder="Search Play For Dream" v-model="inputValue" />
            <div class="allTopConRigSeaBut" @click="toSearch(inputValue)"><a href="javascript:void(0);"></a></div>
          </div>-->
          <el-dropdown class="allTopConRig_3" @command="handleCommand">
            <span class="el-dropdown-link">
              <a ><img src="../assets/images/center.png" alt="" /> </a>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="login">{{this.loginFlag == 1 ? this.userPhone : 'Log in'}}</el-dropdown-item>
              <el-dropdown-item command="register">{{this.loginFlag == 1 ? 'Sign out' : 'Register'}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="allTopConRig_2"><a @click="changeLanguage()"><img src="../assets/images/en.png" alt="" /> </a></div>
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
                <dt><router-link to="/mr">MR Series</router-link></dt>
                <dd><router-link to="/mr">Play For Dream MR</router-link></dd>
                <dd><a href="https://mall.jd.com/index-1000425743.html" target="_blank">Order Now</a></dd>
              </dl>
              <dl>
                <dt><router-link to="/vr">VR Series</router-link></dt>
                <dd><router-link to="/vr">YVR 2</router-link></dd>
                <dd><a href="https://mall.jd.com/index-1000425743.html" target="_blank">Order Now</a></dd>
              </dl>
              <dl>
                <dt><router-link to="/store">Where to Buy</router-link></dt>
                <dd><router-link to="/store">Shop Online</router-link></dd>
                <dd><router-link to="/store?index=1">Find a Store</router-link></dd>
              </dl>
              <dl>
                <dt><router-link to="/service">Support</router-link></dt>
								<dd><router-link to="/service?index=3">Play For Dream Mobile Assistant</router-link></dd>
								<dd><router-link to="/service?index=1">PCVR Assistant</router-link></dd>
								<dd><router-link to="/service?index=2">Film Stream Assistant</router-link></dd>
              </dl>
              <dl>
                <dt><router-link to="/about">About Us</router-link></dt>
								<dd><router-link to="/about?index=1">Our Stories</router-link></dd>
								<dd><router-link to="/about?index=2">Milestones</router-link></dd>
								<dd><router-link to="/news">Newsroom</router-link></dd>
								<dd><router-link to="/join">Career</router-link></dd>
								<dd><router-link to="/about?index=3">Contact Us</router-link></dd>
              </dl>
              <dl>
                <dt><a @click="goDev()">Developer</a></dt>
              </dl>
            </div>
            <div class="mxFooterConBot">
              <div class="mxFooterConBotTop">
                <div class="mxFooterConBotTop_1">
                  <h3>Contact Us</h3>
                  <p>Address: Building 3, No. 1 Caosong Road, Xinqiao Town, Songjiang District, Shanghai <span>Switchboard: 021-57098200 (Monday to Friday)</span></p>
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
                <div class="mxFooterConBotBot_1">Copyright Play For Dream (Shanghai)Technology Co.,Ltd.All rights reserved.</div>
                <div class="mxFooterConBotBot_2">
                  <router-link to="/page?index=1">Legal clause</router-link>
                  <router-link to="/page?index=2">Privacy protection</router-link>
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
        <div class="allTopConRig_2"><a @click="changeLanguage()"><img src="../assets/images/en.png" alt="" /> </a></div>

      </div>
      <div class="banner_menu" id="openMenu">
        <s></s>
        <s></s>
        <s></s>
      </div>
    </div>
    <div class="wapTopBj">
      <ul class="topWapNrConLb">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/mr">MR Series</router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/mr">Play For Dream MR</router-link>
            <a href="https://mall.jd.com/index-1000425743.html" target="_blank">Order Now</a>
          </div>
        </li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/vr">VR Series</router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/vr">YVR 2</router-link>
            <a href="https://mall.jd.com/index-1000425743.html" target="_blank">Order Now</a>
          </div>
        </li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/store">Where to Buy</router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/store">Shop Online</router-link>
            <router-link to="/store?index=1">Find a Store</router-link>
          </div>
        </li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/service">Support</router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/service?index=3">Play For Dream Mobile Assistant</router-link>
            <router-link to="/service?index=1">PCVR Assistant</router-link>
            <router-link to="/service?index=2">Film Stream Assistant</router-link>
          </div>
        </li>
        <li>
          <div class="DjEjRowWc">
            <router-link class="DjEj" to="/about">About Us</router-link>
            <div class="DjEjRow"></div>
          </div>
          <div class="topWapNrDjEjCon">
            <router-link to="/about?index=1">Our Stories</router-link>
            <router-link to="/about?index=2">Milestones</router-link>
            <router-link to="/news">Newsroom</router-link>
            <router-link to="/join">Career</router-link>
            <router-link to="/about?index=3">Contact Us</router-link>
          </div>
        </li>
        <li @click="goDev()"><a>Developer</a></li>
      </ul>
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
      envi:''
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

    $('#openMenu').on('click', function () {
      $(this).toggleClass('changeFigure');
      $(".wapTopBj").toggleClass('on');
    })
    $('.topWapNrConLb a').on('click', function () {
      $('#openMenu').removeClass('changeFigure');
      $(".wapTopBj").removeClass('on');
    })
    $('.topWapNrConLb .DjEjRow').on('click', function () {
      event.stopPropagation();
      if ($(this).parent().next().is(':hidden')) {
        $(this).parent().next().slideDown();
      } else {
        $(this).parent().next().slideUp();
      }
    })

    $('.allTopMenu').click(function () {
      $('.menuBox').addClass('on');
      $('.menuBg').addClass('on');
    });
    $('.navClick').click(function () {
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
    goDev(){
      let dev1 = 'http://localhost:9700/'
      let uat = 'https://apiuat.yvrdream.com/en/yvrdeveloper/#/index'
      let pro = 'https://developer.pfdm.cn/cn'

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
      let dev1 = 'http://172.18.0.67:9528/login?iscn=false'
      let uat = 'https://apiuat.yvrdream.com/login?iscn=false'
      let pro = 'https://www.pfdm.cn/login?iscn=false'

      if(this.envi == 'dev'){
        window.location.href = dev1
      }else if(this.envi == 'uat'){
        window.location.href = uat
      }else{
        window.location.href = pro
      }
    },
    changeLanguage(){
      // 当前是英文
      let dev1 = 'http://localhost:9698/'
      let uat = 'https://apiuat.yvrdream.com/yvrofficial/#/index'
      let pro = 'https://www.pfdm.cn/' 

      if(this.envi == 'dev'){
        window.location.href = dev1
      }else if(this.envi == 'uat'){
        window.location.href = uat
      }else{
        window.location.href = pro
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
