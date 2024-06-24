<template>
  <div>
    <headertop></headertop>
    <div class="allNyBan" :style="allNyBanBg">
      <img class="img100" src="../assets/images/xz/banner3.jpg" alt="" />
      <div class="allNyBanPos">
        <div class="f52 bolder colorfff textCenter allNyBanPosTit_1 wow fadeInUp">与<span class="counter">50000</span>+玩家
          一起探索无尽可能</div>
      </div>
      <div class="llMoreNr">
        <p class="llMoreNr_1">往下浏览更多内容</p>
        <div class="llMoreNrImg"><img src="../assets/images/xz/rowdown.png" alt="" /></div>
      </div>
    </div>
    <div class="serNyCon">
      <!-- serNyConMk -->
      <div class="serNyConMk serNyConMk_3" :style="serNyConMkBg3">
        <div class="w1335 serNyConMkNr">
          <div class="serNyConMkNrLeft wow fadeInUp">
            <div class="f60 bolder serNyConMkNrLeft_1" style="white-space: pre-wrap;" v-html="serviceVoList0.title">
            </div>
            <div class="f20 serNyConMkNrLeft_2" style="white-space: pre-wrap;" v-html="serviceVoList0.subtitle"></div>
            <div class="serNyConMkNrLeft_3">
              <div class="allBtn addBk"><a :href="serviceVoList0.downloadUrl"
                  target="_blank">点击下载<span>&nbsp;</span></a></div>
              <!-- <div class="allBtn addBk goToDetail"><a href="javascript:void(0);">查看详情<span>&nbsp;</span></a></div> -->
            </div>
          </div>
          <div class="serNyConMkNrRight">
            <img class="img100" :src="imgUrl +  serviceVoList0.image" alt="" />
          </div>
        </div>

      </div>

      <!-- serNyConMk -->
      <div class="serNyConMk serNyConMk_1" :style="serNyConMkBg1">
        <div class="w1335 serNyConMkNr">
          <div class="serNyConMkNrLeft wow fadeInUp">
            <div class="f60 bolder serNyConMkNrLeft_1" style="white-space: pre-wrap;" v-html="serviceVoList1.title">
            </div>
            <div class="f20 serNyConMkNrLeft_2" style="white-space: pre-wrap;" v-html="serviceVoList1.subtitle"></div>
            <div class="serNyConMkNrLeft_3">
              <div class="allBtn addBk"><a :href="serviceVoList1.downloadUrl"
                  target="_blank">点击下载<span>&nbsp;</span></a></div>
              <div class="allBtn addBk goToDetail"><a href="javascript:void(0);">查看详情<span>&nbsp;</span></a></div>
            </div>
          </div>
          <div class="serNyConMkNrRight">
            <img class="img100" :src="imgUrl +  serviceVoList1.image" alt="" />
          </div>
        </div>
        <div class="w1335 serNyConMkNrXq">
          <div class="serNyConMkNrXqCon">
            <div class="f20 serNyConMkNrXqConTit">串流配置要求</div>
            <div class="f16 xzFwBot">
              <div class="xzFwBot_1 f20"><a download="/static/doc/YVR串流助手使用指南.docx" href="/static/doc/YVR串流助手使用指南.docx" target="_blank">串流助手使用指南 ⬇️</a></div>
            </div>
            <div class="serNyConMkNrXqConBot" v-html="serviceVoList1.streamingRequirements">
              <!--  -->
            </div>
          </div>
        </div>
      </div>
      <!-- serNyConMk -->
      <div class="serNyConMk serNyConMk_2" :style="serNyConMkBg2">
        <div class="w1335 serNyConMkNr">
          <div class="serNyConMkNrLeft wow fadeInUp">
            <div class="f60 bolder serNyConMkNrLeft_1" style="white-space: pre-wrap;" v-html="serviceVoList2.title">
            </div>
            <div class="f20 serNyConMkNrLeft_2" style="white-space: pre-wrap;" v-html="serviceVoList2.subtitle"></div>
            <div class="serNyConMkNrLeft_3">
              <div class="allBtn addBk"><a :href="serviceVoList2.downloadUrl"
                  target="_blank">点击下载<span>&nbsp;</span></a></div>
              <div class="allBtn addBk goToDetail"><a href="javascript:void(0);">查看详情<span>&nbsp;</span></a></div>
            </div>
          </div>
          <div class="serNyConMkNrRight">
            <img class="img100" src="../assets/images/xz/fw2.png" alt="" />
          </div>
        </div>
        <div class="w1335 serNyConMkNrXq">
          <div class="serNyConMkNrXqCon">
            <!-- <div class="f20 serNyConMkNrXqConTit">串流配置要求</div> -->
            <div class="f16 xzFwBot">
              <div class="xzFwBot_1 f20"><a download="/static/doc/YVR飞屏助手使用指南.docx" href="/static/doc/YVR飞屏助手使用指南.docx" target="_blank">飞屏助手使用指南下载 ⬇️</a></div>
              <div class="xzFwBot_2">
                <p>1.下载并安装“YVR飞屏助手”，打开应用并添加视频。</p>
                <p>2.保持VR设备和PC设备在相同网络，在VR端点击【搜索设备】按钮，选择你的电脑。</p>
                <p>注：当前仅支持Vindows.系统</p>
              </div>
            </div>
            <!-- <div class="serNyConMkNrXqConBot" v-html="serviceVoList2.streamingRequirements">

            </div> -->
          </div>
        </div>
      </div>

    </div>
    <footerbottom></footerbottom>
  </div>
</template>

<script>
  import headertop from '@/components/header.vue'
  import footerbottom from '@/components/footer.vue'
  import banner3 from '@/assets/images/xz/banner3.jpg'
  import bj6 from '@/assets/images/xz/bj6.jpg'
  import bj7 from '@/assets/images/xz/bj7.jpg'
  import bj8 from '@/assets/images/xz/bj8.jpg'
  import {
    serviceIndex
  } from '@/api/index.js'

  export default {
    components: {
      headertop,
      footerbottom
    },
    watch: {
      "$route.query.index": {
        handler(e) {
          console.log(e)
          var distanceToTop_1 = $('.serNyConMk_1').offset().top;
          var distanceToTop_2 = $('.serNyConMk_2').offset().top;
          var distanceToTop_3 = $('.serNyConMk_3').offset().top;
          if (e == 1) {
            $('html,body').animate({
              scrollTop: distanceToTop_1
            }, 'slow');
          }
          if (e == 2) {
            $('html,body').animate({
              scrollTop: distanceToTop_2
            }, 'slow');
          }
          if (e == 3) {
            $('html,body').animate({
              scrollTop: distanceToTop_3
            }, 'slow');
          }
        },
      },
    },
    data() {
      var that = this
      return {
        allNyBanBg: {
          backgroundImage: `url(${banner3})`
        },
        serNyConMkBg1: {
          backgroundImage: `url(${bj6})`
        },
        serNyConMkBg2: {
          backgroundImage: `url(${bj7})`
        },
        serNyConMkBg3: {
          backgroundImage: `url(${bj8})`
        },
        imgUrl: that.BASE_API,
        serviceVoList0: {},
        serviceVoList1: {},
        serviceVoList2: {}
      }
    },
    methods: {
      async serviceIndex() {
        let res = await serviceIndex({})
        let data = res.data
        this.serviceVoList0 = data.serviceVoList[0];
        this.serviceVoList1 = data.serviceVoList[1];
        this.serviceVoList2 = data.serviceVoList[2];

      }
    },
    async mounted() {
      await this.serviceIndex()

      var that = this
      $(function() {
        $(".allTopConMenu ul li").eq(4).addClass("active");
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
          new WOW().init();
        };
        $('.counter').countUp({
          time: 1500
        });
        $(".goToDetail").click(function() {
          if ($(this).parents(".serNyConMkNr").next().is(':hidden')) {
            $(this).parents(".serNyConMkNr").next().slideDown();
          } else {
            $(this).parents(".serNyConMkNr").next().slideUp();
          }

        })


      })


      var distanceToTop_1 = $('.serNyConMk_1').offset().top;
      var distanceToTop_2 = $('.serNyConMk_2').offset().top;
      var distanceToTop_3 = $('.serNyConMk_3').offset().top;
      console.log(distanceToTop_1, distanceToTop_2, distanceToTop_3)
      var thisIndex = 0;
      // 创建一个URL对象
      const url = new URL(window.location.href);
      // 使用URLSearchParams获取查询参数
      const params = new URLSearchParams(url.search);
      // 获取特定的查询参数
      const param1 = that.$route.query.index
      console.log(param1);
      if (param1 != undefined) {
        thisIndex = param1
      } else {
        thisIndex = 0;
      }
      if (thisIndex == 1) {
        $('html,body').animate({
          scrollTop: distanceToTop_1
        }, 'slow');
      }
      if (thisIndex == 2) {
        $('html,body').animate({
          scrollTop: distanceToTop_2
        }, 'slow');
      }
      if (thisIndex == 3) {
        $('html,body').animate({
          scrollTop: distanceToTop_3
        }, 'slow');
      }
    }
  }
</script>

<style scoped></style>
