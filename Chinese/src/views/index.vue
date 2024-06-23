<template>
  <div>
    <headertop></headertop>
    <!-- 第一屏 -->
    <div class="sjxxFsDypWc" style="position: relative;width: 100%;">
      <div class="swiper sjxxFsDyp">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-no-swiping">
            <!-- <img class="img100" src="../assets/images/bj1.jpg"> -->
            <video style="" id="" src="../assets/video/home.mp4" loop autoplay muted></video>
            <div class="sjxxFsDypMc">
              <div class="sjxxFsDypCon">
                <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s">
                  <div class="sjxxFsDypCon_2">
                    <div class="allBtn active"><a href="https://live.bilibili.com/25397624"
                        target="_blank">观看直播<span>&nbsp;</span></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="swiper-slide swiper-no-swiping">
            <img class="img100" src="../assets/images/bannerkv.jpg">
            <div class="sjxxFsDypMc">
              <div class="sjxxFsDypCon">
                <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s">
                  <div class="sjxxFsDypCon_2">
                    <div class="allBtn active"><a href="javascript:void(0);" @click="showMc">立即预约<span>&nbsp;</span></a></div>
                    <div class="allBtn"><router-link to="/mr">探索更多<span>&nbsp;</span></router-link></div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <div class="swiper-slide swiper-no-swiping" v-for="(item, index) in bannerVoList1" :key="index * 1.111">
            <img class="img100" :src="imgUrl + item.image">
            <div class="sjxxFsDypMc">
              <div class="sjxxFsDypCon">
                <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s">
                  <div class="f70 colorfff bolder sjxxFsDypCon_1">{{ item.title }}</div>
                  <div class="sjxxFsDypCon_2">
                    <div class="allBtn active"><a href="javascript:void(0);" @click="jumpActive(item.button1Url)">{{
                        item.button1Text }}<span>&nbsp;</span></a>
                    </div>
                    <div class="allBtn"><a href="javascript:void(0);" @click="jumpActive(item.button2Url)">{{
                      item.button2Text
                        }}<span>&nbsp;</span></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-pagination  sjxxFsDyp-pagination"></div> -->
      <div class="sjxxFsDyp-pagination">
        <!-- <span class="swiper-pagination-customs" >01<span>&nbsp;</span></span>
        <span class="swiper-pagination-customs" >02<span>&nbsp;</span></span> -->
        <span class="swiper-pagination-customs" v-for="(item, index) in bannerVoList1"
          :key="index * 1.1111111">0{{ item.id +2 }}<span>&nbsp;</span></span>
      </div>
    </div>

    <!-- 第二屏 -->
    <div class="swiper wcmxDep">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="img100" src="../assets/images/bannerkv1.png" alt="" />
          <div class="w_1760 wcmxDepCon">
            <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s">
              <!-- <div class="f88 colorfff bolder wcmxDepCon_1">YVR 2</div>
              <div class="f51 colorfff wcmxDepCon_2">无限空间 玩出梦想</div> -->
              <!-- <div class="f88 colorfff bolder wcmxDepConXzYs">
                玩出梦想<br>
                <span>MR</span>真8K
              </div> -->
              <div class="wcmxDepConXzImg">
                <img src="../assets/images/bannerkv1wz.png" alt="">
              </div>
              <div class="wcmxDepCon_3">
                <div class="allBtn active"><a href="javascript:void(0);" @click="showMc">立即预约<span>&nbsp;</span></a>
                </div>
                <div class="allBtn"><router-link to="/mr">探索更多<span>&nbsp;</span></router-link></div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide" v-for="(item, index) in bannerVoList2" :key="index * 2.222">
          <img class="img100" :src="imgUrl + item.image" alt="" />
          <div class="w_1760 wcmxDepCon">
            <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s">
              <div class="f88 colorfff bolder wcmxDepCon_1">{{ item.title }}</div>
              <div class="f51 colorfff wcmxDepCon_2">{{ item.subtitle }}</div>
              <div class="wcmxDepCon_3">
                <div class="allBtn active"><a href="javascript:void(0);" @click="jumpActive(item.button1Url)">{{
                    item.button1Text }}<span>&nbsp;</span></a>
                </div>
                <div class="allBtn"><a href="javascript:void(0);" @click="jumpActive(item.button2Url)">{{
                  item.button2Text
                    }}<span>&nbsp;</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
    </div>
    <!-- 第三屏 -->
    <div class="yhxqFsWc">
      <div class="yhxqFs" id="yhxqFs">
        <div class="yhxqFsBj" id="yhxqFsBj" style="">
          <img src="../assets/images/videoMc.png" alt="" />

        </div>
        <video id="video" :src="imgUrl + bannerVoList3.video" loop autoplay muted></video>
        <div class="yhxqFsCon wow fadeInUp">
          <div class="f48 colorfff bolder yhxqFsCon_1">
            <!-- 聚焦用户需求<br>
    			以科技之力打造未来娱乐新方式 -->
            &nbsp;
            <br>
            {{ bannerVoList3.title }}
          </div>
          <div class="yhxqFsCon_2">
            <div class="allBtn active"><a href="javascript:void(0);" @click="jumpActive(bannerVoList3.button1Url)">{{
            bannerVoList3.button1Text
              }}<span>&nbsp;</span></a></div>
          </div>
        </div>

      </div>
    </div>
    <!-- 第四屏 -->
    <div class="syNewsBj" :style="syNewsBg">
      <div class="swper syNewsSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide wow fadeInUp" v-for="(item, index) in bannerVoList4" :key="index * 3.333">
            <img class="img100" :src="imgUrl + item.image" alt="" />
            <div class="syNewsSwiperCon">
              <div class="f32 colorfff syNewsSwiperCon_1">{{ item.title }}</div>
              <div class="f16 colorfff syNewsSwiperCon_2">{{ item.subtitle }}</div>
              <div class="syNewsSwiperCon_3">
                <div class="allBtn "><a href="javascript:void(0);" @click="jumpActive(item.button1Url)">{{
                    item.button1Text }}<span>&nbsp;</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5 -->
    <div class="qdtySm">
      <div class="qdtySmCon">
        <div class="colorfff f70 bolder wow fadeInUp qdtySmCon_1">
          <div v-html="bannerVo5.title"></div>
          <div>{{ bannerVo5.subtitle }}</div>
        </div>
        <div class="wow fadeInUp qdtySmCon_2">
          <div class="allBtn active"><a href="javascript:void(0);" @click="jumpActive(bannerVo5.button1Url)">{{
            bannerVo5.button1Text }}<span>&nbsp;</span></a></div>
        </div>
      </div>
    </div>

    <!-- 6 -->
    <div class="mxzlNr">
      <div class="w_1760 mxzlNrCon">
        <div class="f70 colorfff bolder wow fadeInUp mxzlNrCon_1">
          <div v-html="bannerVo6.title"></div>
          <div>{{ bannerVo6.subtitle }}</div>
        </div>
        <div class="wow fadeInUp mxzlNrCon_2">
          <div class="allBtn active"><a href="javascript:void(0);" @click="jumpActive(bannerVo6.button1Url)">{{
            bannerVo6.button1Text }}<span>&nbsp;</span></a></div>
        </div>
      </div>
    </div>
    <footerbottom></footerbottom>
    <!-- <div style="position: fixed;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.8);z-index: 999999999999;">
      <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);">
        <div class="allBtn active"><a href="https://live.bilibili.com/25397624" target="_blank">观看直播<span>&nbsp;</span></a></div>
      </div>

    </div> -->
    <div class="homeFormMc" v-show="isShow">
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
</template>

<script>
  import headertop from '@/components/header.vue'
  import footerbottom from '@/components/footer.vue'
  import bj3 from '@/assets/images/bj3.jpg'
  import {
    homeIndex,
    feedback
  } from '@/api/index.js'
  import {
    isvalidMobile
  } from '@/utils/validate.js'
  export default {
    components: {
      headertop,
      footerbottom
    },
    data() {
      var that = this
      return {
        syNewsBg: {
          backgroundImage: `url(${bj3})`
        },
        imgUrl: that.BASE_API,
        bannerVoList1: [],
        bannerVoList2: [],
        bannerVoList3: {},
        bannerVoList4: [],
        bannerVo5: {},
        bannerVo6: {},
        isShow: false,
        useName: '',
        phone: '',
        location: ''
      }
    },
    methods: {
      async homeIndex() {
        let res = await homeIndex({})
        let data = res.data
        this.bannerVoList1 = data.bannerVoList1;
        this.bannerVoList2 = data.bannerVoList2;
        this.bannerVoList3 = data.bannerVoList3[0];
        this.bannerVoList4 = data.bannerVoList4;
        this.bannerVo5 = data.bannerVo5;
        this.bannerVo6 = data.bannerVo6;
      },
      jumpActive(url) {
        if (url.indexOf('http') > -1) {
          window.open(url, '_blank');
        } else {
          this.$router.push({
            path: url,
            query: {

            }
          })
        }

      },
      showMc() {
        this.isShow = true
      },
      toSubmmit() {
        if (this.useName == '') {
          alert('请输入姓名')
          return
        }
        if (!isvalidMobile(this.phone)) {
          alert('请输入正确的手机号')
          return
        }
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


      }
    },
    async mounted() {
      await this.homeIndex()
      var that = this
      $(function() {


        $(".allTopConMenu ul li").eq(0).addClass("active");
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
          new WOW().init();
        };

        var sjxxFsDypSwiper = new Swiper('.sjxxFsDyp', {
          observer: true, //开启动态检查器，监测swiper和slide
          observeParents: true, //监测Swiper 的祖/父元素
          // autoplay: {
          //   delay: 5000,
          //   stopOnLastSlide: false,
          //   disableOnInteraction: true,
          // },
          // noSwiping: true,
          spaceBetween: 0,
          effect: 'fade',
          on: {
            init: function() {
              swiperAnimateCache(this); //隐藏动画元素
              swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function() {
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
              //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            },
            slideChangeTransitionStart: function() {
              $(".sjxxFsDyp-pagination .swiper-pagination-customs").removeClass(
                'swiper-pagination-customs-active');
              $(".sjxxFsDyp-pagination .swiper-pagination-customs").eq(this.activeIndex).addClass(
                'swiper-pagination-customs-active');
            },
            slideChange: function() {
              swiperAnimateCache(this); //隐藏动画元素
              swiperAnimate(this); //初始化完成开始动画
            },
          },
          breakpoints: {
            960: {
              noSwiping: false
            }
          }
        })
        $(".sjxxFsDyp-pagination .swiper-pagination-customs").eq(0).addClass('swiper-pagination-customs-active');
        $(".sjxxFsDyp-pagination .swiper-pagination-customs").click(function() {
          var index = $(this).index();
          $(".sjxxFsDyp-pagination .swiper-pagination-customs").removeClass(
            'swiper-pagination-customs-active');
          $(this).addClass('swiper-pagination-customs-active');
          sjxxFsDypSwiper.slideTo(index, 1000, false); //切换到第一个slide，速度为1秒
          // sjxxFsDypSwiper.autoplay.start();

        })


        var wcmxDep = new Swiper('.wcmxDep', {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          speed: 500,
          effect: 'fade',
          // loop: true, //必须
          navigation: {
            nextEl: '.wcmxDep .swiper-button-next',
            prevEl: '.wcmxDep .swiper-button-prev',
          },
          on: {
            init: function() {
              swiperAnimateCache(this); //隐藏动画元素
              swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function() {
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
              //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            }
          },
          breakpoints: {
            960: {
              noSwiping: false
            }
          }
        });



        var syNewsSwiper = new Swiper(".syNewsSwiper", {
          slidesPerView: 2.6,
          spaceBetween: 68,
          breakpoints: {
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10
            },
            430: {
              slidesPerView: 1.1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 1.4,
              spaceBetween: 15
            },
            1280: {
              slidesPerView: 2.6,
              spaceBetween: 38
            }
          }
        });
        that.$nextTick(() => {
          $('.counter').countUp({
            time: 1500
          });
        })



        $(".sjxxFsDyp .allBtn").hover(function() {
          $(this).siblings().removeClass("active")
          $(this).addClass("active")
        })

        $(".wcmxDep .allBtn").hover(function() {
          $(this).siblings().removeClass("active")
          $(this).addClass("active")
        })

        $(".syNewsSwiper .swiper-slide").hover(function() {
          $(".syNewsSwiper .swiper-slide .allBtn").removeClass("active")
          $(this).find(".allBtn").addClass("active")
        })


        videoTX()
        window.addEventListener("resize", () => {
          // videoTX()
        });

      })

      function videoTX() {

        var controller = new ScrollMagic.Controller();
        var durationHeight = "150%";
        //console.log(durationHeight)
        var wipeAnimation = new TimelineMax()
          .fromTo("#yhxqFsBj", 1, {
            scale: '1'
          }, {
            scale: '5',
            ease: Linear.easeNone
          }, "+=0.4") // in from right
        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#yhxqFs",
            triggerHook: "onLeave",
            duration: durationHeight,
            pinSpacing: false
          })
          .setPin("#yhxqFs")
          .setTween(wipeAnimation)
          // .addIndicators() // add indicators (requires plugin)
          .addTo(controller);

        if (window.innerWidth > 960) {

        } else {
          // 添加控件
          // document.getElementById('video').controls = true;
          // document.getElementById('video').play();
        }
      }

      // window.onscroll = function() {
      // 	var scrollPosition = window.scrollY;
      // 	var aaHeight = window.innerHeight * 2;
      // 	var bbHeight = window.innerHeight * 4.3;
      // 	console.log(scrollPosition, aaHeight)
      // 	if (scrollPosition >= aaHeight && scrollPosition < bbHeight) {
      // 		document.getElementById('video').play();
      // 	} else {
      // 		document.getElementById('video').pause();
      // 	}
      // };

    }
  }
</script>

<style scoped></style>
