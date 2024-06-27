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

  let aboutusIndexData = {
    "aboutUs": "<p>Founded in 2020, we are a high-tech company specializing in spatial computing devices, dedicated to providing users with innovative entertainment experiences. Our mission is to Reform how everyone acquires information, drive the 3D information technology revolution, and advance human technological evolution.</p><p>We focus on the independent development and delivery of XR technologies, exploring cutting-edge spatial computing technologies. As one of the few companies in China with full-stack R&amp;D capabilities in this field, we have already released two groundbreaking XR products and are now fully engaged in developing our third-generation spatial computing device.</p>",
    "sloganVoList": [
        {
            "title": "Our Mission",
            "subTitle": "Encourage more people\nto play for dream",
            "image": "/profile/2024/06/17/img1-2efa471.png",
            "sortOrder": 1
        },
        {
            "title": "Our Vision",
            "subTitle": "Reform how everyone\nacquires information",
            "image": "/profile/2024/06/21/img2-8950f00.png",
            "sortOrder": 2
        },
        {
            "title": "品牌价值观",
            "subTitle": "聚焦用户需求，\n以科技之力打造未来\n娱乐新方式",
            "image": "/profile/2024/06/17/img3-38b11e4.png",
            "sortOrder": 3
        },
        {
            "title": "品牌主张",
            "subTitle": "无限空间\n玩出梦想",
            "image": "/profile/2024/06/21/061502.85874c4.png",
            "sortOrder": 4
        },
        {
            "title": "品牌定位",
            "subTitle": "娱乐空间\n计算设备",
            "image": "/profile/2024/06/17/061501-b5ba5c6.png",
            "sortOrder": 5
        }
    ],
    "founderVo": {
        "founderName": "Huang Feng",
        "founderPosition": "The Founder,CEO",
        "founderHistory": "CEIBS EMBA\nVice Chairman,Songjiang District \nFederation of Industry and Commerce",
        "founderBio": "Mr.Huang is a serial entrepreneur with profound business insights and excellent product development capabilities,boasting a proven track record of success in Wanyoo Esports and Bixin app.\nHis exploration into spatial computing began in 2018.Mr.Huang kicked off the Play For Dream R&D project and founded a company under the same name in 2020,beginning a journey of the R&D and sale of spatial computing platforms.",
        "image": "/profile/2024/06/17/boss-ea95c71.png"
    },
    "growthStoryVoList": [
        {
            "title": "2020.10",
            "content": "Play For Dream Technology Officially established",
            "image": "/profile/2024/06/21/1玩出梦想科技正式成立_20240621190230A019.png",
            "sortOrder": 1
        },
        {
            "title": "2020.11",
            "content": "YUI Launcher Beta Version completed",
            "image": "/profile/2024/06/21/2YUI Launcher Beta版本开发完成_20240621190956A020.png",
            "sortOrder": 2
        },
        {
            "title": "2021.07",
            "content": "Developer platform launched",
            "image": "/profile/2024/06/21/3开发者平台上线_20240621193326A021.png",
            "sortOrder": 3
        },
        {
            "title": "2021.12",
            "content": "YVR 1 officially launched.The very first 6DoF VR glass designed and manufactured.",
            "image": "/profile/2024/06/21/4发布第一代XR产品 YVR 1 眼镜_20240621193359A022.jpg",
            "sortOrder": 4
        },
        {
            "title": "2022.07",
            "content": "YVR 2 Launched.The global first All-in-one VR headset with Pancake optical solution.",
            "image": "/profile/2024/06/21/5发布第二代XR产品YVR 2 眼镜_20240621193423A023.jpg",
            "sortOrder": 5
        },
        {
            "title": "2022.08",
            "content": "The first offline flagship store opened in Shanghai",
            "image": "/profile/2024/06/21/6首家线下旗舰店在上海开业_20240621193443A024.jpeg",
            "sortOrder": 6
        },
        {
            "title": "2022.11",
            "content": "YVR was sold on Double 11 for the first time, and achieve TOP 2 in JD XR  Sales Category.",
            "image": "/profile/2024/06/21/7双十一京东XR品类销量TOP2_20240621193505A025.jpg",
            "sortOrder": 7
        },
        {
            "title": "2023.06",
            "content": "Self-developed hand tracking algorithm V1.0 released",
            "image": "/profile/2024/06/21/8手势识别算法上线_20240621193524A026.png",
            "sortOrder": 8
        },
        {
            "title": "2023.08",
            "content": "专精特新获奖照片",
            "image": "/profile/2024/06/21/9专精特新获奖照片_20240621193543A027.jpg",
            "sortOrder": 9
        },
        {
            "title": "2023.09",
            "content": "Play For Dream Technology announced the new brand upgrade",
            "image": "/profile/2024/06/21/10玩出梦想科技宣布全新品牌升级_20240621193603A028.jpg",
            "sortOrder": 10
        },
        {
            "title": "2023.11",
            "content": "Settled in Sundan,covering more than 16 major cities including Beijing-Tianjin-Hebei, Zhejiang-Shanghai-Jiangsu-Anhui, and Guangdong-Fujian",
            "image": "/profile/2024/06/21/11入驻顺电，涵盖京津冀、浙沪苏皖、粤闵等16+主要城市_20240621193622A029.jpg",
            "sortOrder": 11
        },
        {
            "title": "2024.02",
            "content": "Play For Dream Technology  Presented at 2024MWC",
            "image": "/profile/2024/06/21/12玩出梦想科技亮相2024MWC_20240621193640A030.png",
            "sortOrder": 12
        }
    ],
    "companyHonorsVoList": [
        {
            "title": "2022年度 经济贡献奖",
            "image": "/profile/2024/06/21/2022年度 经济贡献奖_20240621185406A014.jpg",
            "sortOrder": 1
        },
        {
            "title": "2023年度 领军企业奖",
            "image": "/profile/2024/06/21/2023年度 领军企业奖_20240621185416A015.jpg",
            "sortOrder": 2
        },
        {
            "title": "上海数字化转型体验馆 明星展项",
            "image": "/profile/2024/06/21/上海数字化转型体验馆 明星展项_20240621185423A016.jpg",
            "sortOrder": 3
        },
        {
            "title": "上海元宇宙产业联盟 会员单位",
            "image": "/profile/2024/06/21/上海元宇宙产业联盟 会员单位_20240621185455A017.jpg",
            "sortOrder": 4
        },
        {
            "title": "中国元宇宙与数字人才培养产教融合实训基地",
            "image": "/profile/2024/06/21/中国元宇宙与数字人才培养产教融合实训基地_20240621185509A018.jpg",
            "sortOrder": 5
        },
        {
            "title": "2023-2025年度 专精特新企业",
            "image": "/profile/2024/06/21/2023-2025年度 专精特新企业_20240621184718A001.jpg",
            "sortOrder": 6
        },
        {
            "title": "2021年度 中国区最佳雇主奖",
            "image": "/profile/2024/06/21/2021年度 中国区最佳雇主奖_20240621184754A002.jpg",
            "sortOrder": 7
        },
        {
            "title": "2022-2023年度 最佳科创力企业",
            "image": "/profile/2024/06/21/2022-2023年度 最佳科创力企业_20240621184823A003.jpg",
            "sortOrder": 8
        },
        {
            "title": "2022年度 最暖心企业奖",
            "image": "/profile/2024/06/21/2022年度 最暖心企业奖_20240621184853A004.jpg",
            "sortOrder": 9
        },
        {
            "title": "IDEA-2023年度 入围奖",
            "image": "/profile/2024/06/21/IDEA-2023年度 入围奖_20240621184944A005.jpg",
            "sortOrder": 10
        },
        {
            "title": "Tech G-2023年度 消费电子人气奖",
            "image": "/profile/2024/06/21/Tech G-2023年度 消费电子人气奖_20240621185038A007.jpg",
            "sortOrder": 11
        },
        {
            "title": "2022年度 IF 奖",
            "image": "/profile/2024/06/21/2022年度 IF 奖_20240621185011A006.jpg",
            "sortOrder": 12
        },
        {
            "title": "上海设计100+ 洞见未来单元大奖",
            "image": "/profile/2024/06/21/上海设计100+ 洞见未来单元大奖_20240621185107A008.jpg",
            "sortOrder": 13
        },
        {
            "title": "2022年度 红点奖",
            "image": "/profile/2024/06/21/2022年度 红点奖_20240621185127A009.jpg",
            "sortOrder": 14
        },
        {
            "title": "第八届金陀螺奖 年度优秀VR消费硬件",
            "image": "/profile/2024/06/21/第八届金陀螺奖 年度优秀VR消费硬件_20240621185147A010.jpg",
            "sortOrder": 15
        },
        {
            "title": "金V奖-2023年度 年度最受欢迎硬件",
            "image": "/profile/2024/06/21/金V奖-2023年度 年度最受欢迎硬件_20240621185221A011.jpg",
            "sortOrder": 16
        },
        {
            "title": "宙斯奖-2022年度 影响力XR硬件",
            "image": "/profile/2024/06/21/宙斯奖-2022年度 影响力XR硬件_20240621185243A012.jpg",
            "sortOrder": 17
        },
        {
            "title": "2022-2023年度 最成功设计大奖",
            "image": "/profile/2024/06/21/2022-2023年度 最成功设计大奖_20240621185302A013.jpg",
            "sortOrder": 18
        }
    ],
    "contactUsVo": {
        "contactAddress": "Building 3, No.1 Caosong Road, Xinqiao Town, Songjiang District, Shanghai",
        "contactPhone": "021-57098200（Monday to Friday)",
        "businessEmail": "bd@yvr.cn",
        "developerEmail": "yvrdevelopers@yvr.cn"
    }
}
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
        // let res = await aboutusIndex({})
        // let data = res.data
        // let res = await aboutusIndex({})
        // let data = res.data
        let data = aboutusIndexData
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
