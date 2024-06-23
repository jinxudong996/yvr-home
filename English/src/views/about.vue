<template>
  <div>
    <headertop></headertop>
    <div class="allNyBan" :style="allNyBanBg">
      <img class="img100" src="../assets/images/xz/bj1.jpg" alt="" />
      <div class="allNyBanPos">
        <div class="f52 bolder colorfff textCenter allNyBanPosTit_1 wow fadeInUp">Reform how everyone acquires information</div>
      </div>
      <div class="llMoreNr">
        <p class="llMoreNr_1">View More</p>
        <div class="llMoreNrImg"><img src="../assets/images/xz/rowdown.png" alt="" /></div>
      </div>
    </div>
    <div class="abJsNr colorfff label1">
      <div class="abJsNrCon wow fadeInUp">
        <div class="f52 bolder abJsNrCon_1">About Play For Dream</div>
        <div class="abJsNrCon_2"><img class="img100" src="../assets/images/xz/line.png" alt="" /></div>
        <div class="f28 abJsNrCon_3" v-html="aboutUs">
          
        </div>
      </div>
    </div>
    <div class="lxJsQy"> 
      <div class="lxJsQyTop wow fadeInUp">
        <div class="f52 bolder lxJsQyTit">
          Global Leader in Spatial Computing Technology
          <!-- <span class="huise">(占位)</span> -->
        </div>
        <div class="jsKlJbSwiperBut noDw">
          <div class="jsKlJbSwiper-button-prev lxJsQySwiper_prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
          <div class="jsKlJbSwiper-button-next lxJsQySwiper_next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
        </div>
      </div>
      <div class="swiper lxJsQySwiper wow fadeInUp">
        <div class="swiper-wrapper">


          <div class="swiper-slide" v-for="(item,index) in sloganVoList" :key="index*1.111">
            <img class="img100" :src="imgUrl +  item.image" alt="" />
            <div class="lxJsQySwiperPos">
              <p class="f22 bolder">{{ item.title }}</p>
              <h3 class="f48 bolder" style="white-space: pre-wrap;" v-html="item.subTitle"></h3>
            </div>
          </div>
      
        </div>
      </div>
    </div>
    <div class="csrBk">
      <div class="csrBkNr wow fadeInUp">
        <div class="f46 bolder csrBkNr_1">{{  founderVo.founderName}}</div>
        <div class="f18 bolder csrBkNr_2" v-html="founderVo.founderPosition"></div>
        <div class="f20 csrBkNr_3">
          <p class="bolder">{{ founderVo.founderHistory }}</p>
        </div>
        <div class="f20 csrBkNr_4" v-html="founderVo.founderBio">
          
        </div>
      </div>
      <div class="csrBkImg"><img class="img100" :src="imgUrl + founderVo.image" alt="" /></div>
    </div>
    <div class="fzlc label2">
      <div class="fzlcTit wow fadeInUp">
        <ul class="fzlcTitList">
          <li class="active">Milestones</li>
          <li>Awards</li>
        </ul>
      </div>
      <div class="fzlcTitListMkWc wow fadeInUp">
        <!-- 发展历程 -->
        <div class="fzlcTitListMk">
          <div class="fzlcNr">
            <div class="fzlcNrTime">
              <div class="swiper fzlcNrTimeSwiper" id="fzlcNrTimeSwiper_0">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" :class="{active:index == 0}" v-for="(item,index) in growthStoryVoList" :key="index*3.33">{{ item.title }}<span class="fzlcNrTimeSwiperIco"></span></div>
                
                </div>
              </div>
            </div>
            <div class="fzlcNrCon">
              <div class="swiper fzlcNrConSwiper" id="fzlcNrConSwiper_0">
                <div class="swiper-wrapper">
                  <div class="swiper-slide swiper-no-swiping" v-for="(item,index) in growthStoryVoList" :key="index*5.55">
                    <div class="fzlcNrConSwiper_1"><img class="img100" :src="imgUrl + item.image" alt="" />
                    </div>
                    <div class="f30 bolder fzlcNrConSwiper_2">{{ item.content }}</div>
                  </div>
                

                </div>
              </div>
            </div>
            <div class="fzlcNrRow">
              <div class="jsKlJbSwiperBut noDw">
                <div class="jsKlJbSwiper-button-prev bjheise fzlcNrConSwiper_prev" id="fzlcNrConSwiper_0_prev"></div>
                <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
                <div class="jsKlJbSwiper-button-next bjheise fzlcNrConSwiper_next" id="fzlcNrConSwiper_0_next"></div>
                <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
              </div>
            </div>
          </div>
        </div>
        <!-- 企业荣誉 -->
        <div class="fzlcTitListMk">
          <div class="fzlcNr">
         
            <div class="fzlcNrCon">
              <div class="swiper fzlcNrConSwiper" id="fzlcNrConSwiper_1">
                <div class="swiper-wrapper">
                  <div class="swiper-slide swiper-no-swiping" v-for="(item,index) in companyHonorsVoList" :key="index*2.22">
                    <div class="fzlcNrConSwiper_1"><img class="img100" :src="imgUrl + item.image" alt="" />
                    </div>
                    <div class="f30 bolder fzlcNrConSwiper_2">{{ item.title }}</div>
                  </div>
                


                </div>
              </div>
            </div>
           

          </div>
        </div>
      </div>
    </div>
    <div class="w1406 abPPxw">
      <div class="abPPxwMk wow fadeInUp">
        <img class="img100" src="../assets/images/xz/img5.png" alt="" />
        <div class="abPPxwMkPos">
          <div class="f40 bolder colorfff abPPxwMkPos_1">Newsroom</div>
          <div class="abPPxwMkPos_2">
            <div class="allBtn bjWhite"><router-link to="/news">More News<span>&nbsp;</span></router-link></div>
          </div>
        </div>
      </div>
      <div class="abPPxwMk wow fadeInUp">
        <img class="img100" src="../assets/images/xz/img6.png" alt="" />
        <div class="abPPxwMkPos">
          <div class="f40 bolder colorfff abPPxwMkPos_1">Career Opportunities</div>
          <div class="abPPxwMkPos_2">
            <div class="allBtn bjWhite"><router-link to="/join">Join Us<span>&nbsp;</span></router-link></div>
          </div>
        </div>
      </div>
    </div>
    <div class="abLxWm label3">
      <div class="w1440 abLxWmCon wow fadeInUp">
        <div class="f52 bolder abLxWmCon_1">Contact Us</div>
        <div class="f18 abLxWmCon_2">Address：{{ contactUsVo.contactAddress }} <span>Tel:{{ contactUsVo.contactPhone }}</span></div>
        <div class="abLxWmCon_3">
          <div class="f22 abLxWmCon_3Mk"><img src="../assets/images/hz.svg" alt="" />Business cooperation：{{ contactUsVo.businessEmail }}</div>
          <!-- <div class="f16 colorfff abLxWmCon_3Mk">销售邮箱：seles@yvr.cn</div> -->
          <div class="f22 abLxWmCon_3Mk"><img src="../assets/images/yx.svg" alt="" />Developer relationship：{{ contactUsVo.developerEmail }}
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
  import bj1 from '@/assets/images/xz/bj1.jpg'
  import {aboutusIndex} from '@/api/index.js'
  export default {
    components: {
      headertop,
      footerbottom
    },
    
    data() {
      var that = this
      return {
        allNyBanBg: {
          backgroundImage: `url(${bj1})`
        },
        sloganVoList:[],
        aboutUs:{},
        growthStoryVoList:[],
        companyHonorsVoList:[],
        founderVo:{},
        contactUsVo:{},
        imgUrl:that.BASE_API,
      }
    },
    methods:{
      async aboutusIndex(){
        let res = await aboutusIndex({})
        let data = res.data
        console.log(data)
        this.sloganVoList = data.sloganVoList
        this.aboutUs = data.aboutUs
        this.founderVo = data.founderVo
        this.companyHonorsVoList = data.companyHonorsVoList
        this.growthStoryVoList = data.growthStoryVoList
        this.contactUsVo = data.contactUsVo
      }
    },
    watch: {
      "$route.query.index": {
        handler(e) {
          var _topHeader = $("#header").outerHeight(true);
          var distanceToTop_1 = $('.label1').offset().top - _topHeader;
          var distanceToTop_2 = $('.label2').offset().top - _topHeader;
          var distanceToTop_3 = $('.label3').offset().top - _topHeader;
          if (e == 1) {
            $('html,body').animate({
              scrollTop: distanceToTop_1
            }, 'slow');
            $("#header").addClass("bjHeise")
          }
          if (e == 2) {
            $('html,body').animate({
              scrollTop: distanceToTop_2
            }, 'slow');
            $("#header").addClass("bjHeise")
          }
          if (e == 3) {
            $('html,body').animate({
              scrollTop: distanceToTop_3
            }, 'slow');
            $("#header").addClass("bjHeise")
          }
        },
      },
    },
    async mounted() {
      var that = this
      await this.aboutusIndex()
      $(function() {


        $(".allTopConMenu ul li").eq(5).addClass("active");
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
          new WOW().init();
        };
        var lxJsQySwiper = new Swiper('.lxJsQySwiper', {
          slidesPerView: 2.2,
          spaceBetween: 50,
          navigation: {
            nextEl: '.lxJsQySwiper_next',
            prevEl: '.lxJsQySwiper_prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10
            },
            430: {
              slidesPerView: 1.2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 2.2,
              spaceBetween: 40
            }
          }
        })



        //发展历程
        var fzlcNrTimeSwiper_0 = new Swiper('#fzlcNrTimeSwiper_0', {
          observer: true, //开启动态检查器，监测swiper和slide
          observeParents: true, //监测Swiper 的祖/父元素
          slidesPerView: 5,
          spaceBetween: 0,
          direction: 'vertical',
        })
        var fzlcNrConSwiper_0 = new Swiper('#fzlcNrConSwiper_0', {
          observer: true, //开启动态检查器，监测swiper和slide
          observeParents: true, //监测Swiper 的祖/父元素
          slidesPerView: 1,
          spaceBetween: 0,
          direction: 'vertical',
          noSwiping: false,
          breakpoints: {
            960: {
              noSwiping: true,
            }
          },
          navigation: {
            nextEl: '#fzlcNrConSwiper_0_next',
            prevEl: '#fzlcNrConSwiper_0_prev',
          },
          controller: {
            control: fzlcNrTimeSwiper_0,
          },

          on: {
            slideChange: function() {
              $("#fzlcNrTimeSwiper_0 .swiper-slide").removeClass("active");
              $("#fzlcNrTimeSwiper_0 .swiper-slide").eq(this.activeIndex).addClass("active");
              // alert('改变了，activeIndex为' + this.activeIndex);
            },
          }
        })
        $("#fzlcNrTimeSwiper_0 .swiper-slide").click(function() {
          $("#fzlcNrTimeSwiper_0 .swiper-slide").removeClass("active");
          $(this).addClass("active");
          var index = $(this).index();
          fzlcNrConSwiper_0.slideTo(index, 1000, false); //切换到第一个slide，速度为1秒
        })

        //企业荣誉
        // var fzlcNrTimeSwiper_1 = new Swiper('#fzlcNrTimeSwiper_1', {
        //   observer: true, //开启动态检查器，监测swiper和slide
        //   observeParents: true, //监测Swiper 的祖/父元素
        //   slidesPerView: 5,
        //   spaceBetween: 0,
        //   direction: 'vertical',
        // })
        // var fzlcNrConSwiper_1 = new Swiper('#fzlcNrConSwiper_1', {
        //   observer: true, //开启动态检查器，监测swiper和slide
        //   observeParents: true, //监测Swiper 的祖/父元素
        //   slidesPerView: 1,
        //   spaceBetween: 0,
        //   direction: 'vertical',
        //   noSwiping: false,
        //   breakpoints: {
        //     960: {
        //       noSwiping: true,
        //     }
        //   },
        //   navigation: {
        //     nextEl: '#fzlcNrConSwiper_1_next',
        //     prevEl: '#fzlcNrConSwiper_1_prev',
        //   },
        //   // controller: {
        //   //   control: fzlcNrTimeSwiper_1,
        //   // },
        //   // on: {
        //   //   slideChange: function() {
        //   //     $("#fzlcNrTimeSwiper_1 .swiper-slide").removeClass("active");
        //   //     $("#fzlcNrTimeSwiper_1 .swiper-slide").eq(this.activeIndex).addClass("active");
        //   //     // alert('改变了，activeIndex为' + this.activeIndex);
        //   //   },
        //   // }
        // })
        // // $("#fzlcNrTimeSwiper_1 .swiper-slide").click(function() {
        // //   $("#fzlcNrTimeSwiper_1 .swiper-slide").removeClass("active");
        // //   $(this).addClass("active");
        // //   var index = $(this).index();
        // //   fzlcNrConSwiper_1.slideTo(index, 1000, false); //切换到第一个slide，速度为1秒
        // // })

        //
        $(".fzlcTitListMkWc .fzlcTitListMk").eq(0).show();
        $(".fzlcTitList li").click(function() {
          var index = $(this).index();
          $(".fzlcTitList li").removeClass("active");
          $(this).addClass("active");
          $(".fzlcTitListMkWc .fzlcTitListMk").hide();
          $(".fzlcTitListMkWc .fzlcTitListMk").eq(index).show();
        })




      })
      that.$nextTick(() => {

      })
      setTimeout(() => {
        var _topHeader = $("#header").outerHeight(true);
        var distanceToTop_1 = $('.label1').offset().top - _topHeader;
        var distanceToTop_2 = $('.label2').offset().top - _topHeader;
        var distanceToTop_3 = $('.label3').offset().top - _topHeader;
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
          $("#header").addClass("bjHeise")
        }
        if (thisIndex == 2) {
          $('html,body').animate({
            scrollTop: distanceToTop_2
          }, 'slow');
          $("#header").addClass("bjHeise")
        }
        if (thisIndex == 3) {
          $('html,body').animate({
            scrollTop: distanceToTop_3
          }, 'slow');
          $("#header").addClass("bjHeise")
        }
      }, 200)


    }
  }
</script>

<style scoped>

</style>
