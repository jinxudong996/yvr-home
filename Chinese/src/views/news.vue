<template>
  <div>
    <headertop></headertop>
    <div class="allNyBan" :style="leftBg">
      <img class="img100" src="../assets/images/xz/banner1.jpg" alt="" />
      <div class="allNyBanPos">
        <div class="f52 bolder colorfff textCenter allNyBanPosTit_1 wow fadeInUp">品牌动态</div>
        <div class="f24 colorfff textCenter wow fadeInUp allNyBanPosTit_2">了解最新品牌热门资讯</div>
      </div>
      <div class="llMoreNr">
        <p class="llMoreNr_1">往下浏览更多内容</p>
        <div class="llMoreNrImg"><img src="../assets/images/xz/rowdown.png" alt="" /></div>
      </div>
    </div>
    <div class="w1600 newsZy">
      <div class="newsZyTit wow fadeInUp" v-show="headlineList.length>0">
        <div class="f52 bolder newsZyTit_1">最新头条</div>
        <div class="jsKlJbSwiperBut">
          <div class="jsKlJbSwiper-button-prev bjheise rowLeft"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
          <div class="jsKlJbSwiper-button-next bjheise rowRight"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
        </div>
      </div>
      <div class="swiper newsZySwiper wow fadeInUp">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in headlineList" :key="item.id">
            <div class="newsZySwiperNr">
              <div class="newsZySwiperNrLeft colorfff" @click="jumpDetail(item, index)">
                <div class="newsZySwiperNrLeftCon">
                  <div class="newsZySwiperNrLeft_1"><span class="f60 bolder">{{ item.createTime | createTimefilter2 }} </span><span class="f16">日</span></div>
                  <div class="f20 newsZySwiperNrLeft_2">{{ item.createTime | createTimefilter1 }}</div>
                  <div class="f46 bolder threeLine newsZySwiperNrLeft_3">
                    <a href="javascript:void(0);">
                      <div v-html="item.title"></div>
                    </a>
                  </div>
                  <div class="f20 newsZySwiperNrLeft_4 twoLine" style="white-space: pre-wrap;" v-html="item.subtitle">
                  </div>
                  <div class="newsZySwiperNrLeft_5">
                    <div class="allBtn addBk" @click="jumpDetail(item, index)"><a
                        href="javascript:void(0);">查看详情<span>&nbsp;</span></a></div>
                  </div>
                </div>
              </div>
              <div class="newsZySwiperNrRight" @click="jumpDetail(item, index)">
                <a href="javascript:void(0);"><img class="img100" :src="imgUrl + item.image" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w1600 newsListWc">
      <ul class="newsList">
        <li class="wow fadeInUp" v-for="(item, index) in newsList" :key="item.id" @click="jumpDetail(item, index)">
          <div class="newsListImg">
            <a href="javascript:void(0);">
              <img class="img100" :src="imgUrl + item.image" alt="" />
            </a>
          </div>
          <div class="newsListNr">
            <div class="f22 twoLine newsListNr_1"><a href="javascript:void(0);">{{ item.title }}</a></div>
            <div class="f13 newsListNr_2">{{ item.createTime | createTimefilter }}</div>
          </div>
        </li>
      </ul>
      <div class="fyPages wow fadeInUp">
        <span class="fyPagesLink"><a @click="jumpD(-1)" href="javascript:void(0);">上一页</a></span>
        {{ pageNum }}/{{ total }}
        <span class="fyPagesLink"><a @click="jumpD(1)" href="javascript:void(0);">下一页</a></span>
      </div>
    </div>
    <footerbottom></footerbottom>
  </div>
</template>

<script>
import headertop from '@/components/header.vue'
import footerbottom from '@/components/footer.vue'
import bj6 from '@/assets/images/xz/banner1.jpg'
import { headline, getNewsList } from '@/api/index.js'

let newListData1 = {
    "records": [
        {
            "id": 31,
            "title": "用手触摸未来，玩出梦想YVR品牌携手势识别最新进展亮相WAIC",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621153902A126.png",
            "createTime": "2024-06-21 15:41:16"
        },
        {
            "id": 30,
            "title": "YVR正式搭载自研手势识别功能，打造更自然的交互方式",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621153029A122.png",
            "createTime": "2024-06-21 15:35:23"
        },
        {
            "id": 29,
            "title": "始于梦想 与你同行，2023 YVR品牌粉丝节线下派对完美落地",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621152742A115.png",
            "createTime": "2024-06-21 15:29:53"
        },
        {
            "id": 28,
            "title": "YVR首发空间感应功能，可同时实现动态与静态障碍物识别",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621152620A111.png",
            "createTime": "2024-06-21 15:27:20"
        },
        {
            "id": 27,
            "title": "YVR受邀参加香港国际创科展，获得全球观众、媒体高度评价",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621152338A102.png",
            "createTime": "2024-06-21 15:25:55"
        },
        {
            "id": 26,
            "title": "开启元宇宙“新视界”，YVR 2获SGS低蓝光护眼认证",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621152159A099.png",
            "createTime": "2024-06-21 15:23:08"
        },
        {
            "id": 25,
            "title": "独家首创多地图记忆功能，YVR再秀科技硬实力",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621152024A095.png",
            "createTime": "2024-06-21 15:21:39"
        },
        {
            "id": 24,
            "title": "双11预售60分钟破1500台，专业游戏玩家选YVR",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621151658A086.png",
            "createTime": "2024-06-21 15:19:38"
        },
        {
            "id": 23,
            "title": "2022世界人工智能大会顺利落幕  YVR亮相WAIC元宇宙核心展",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621151354A075.png",
            "createTime": "2024-06-21 15:16:32"
        }
    ],
    "total": 25,
    "size": 9,
    "current": 1,
    "orders": [],
    "optimizeCountSql": true,
    "searchCount": true,
    "countId": null,
    "maxLimit": null,
    "pages": 3
}

let newListData2 = {
    "records": [
        {
            "id": 22,
            "title": "YVR首家线下零售体验店正式开业，品牌发展迈入加速跑阶段",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621150948A064.png",
            "createTime": "2024-06-21 15:13:09"
        },
        {
            "id": 21,
            "title": "YVR 2搭载划时代Pancake光学方案，开启VR眼镜新纪元",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621150524A055.png",
            "createTime": "2024-06-21 15:09:07"
        },
        {
            "id": 20,
            "title": "“玩出梦想在浮梁2023” 用科技与人文助力乡村振兴",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621142340A051.jpg",
            "createTime": "2024-06-21 14:25:08"
        },
        {
            "id": 19,
            "title": "新里程碑：玩出梦想科技荣获“专精特新”，坚定技术创新发展理念",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621142246A049.jpg",
            "createTime": "2024-06-21 14:23:06"
        },
        {
            "id": 18,
            "title": "玩出梦想携高通联合举办的2023 Qualcomm XR 创新应用挑战赛创新奖结果揭晓",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621142145A046.jpg",
            "createTime": "2024-06-21 14:22:14"
        },
        {
            "id": 17,
            "title": "玩出梦想荣获“上海设计100+”大奖，彰显设计与创新领域领先地位",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621141935A042.jpg",
            "createTime": "2024-06-21 14:20:25"
        },
        {
            "id": 16,
            "title": "创新驱动未来   玩出梦想科技首次亮相",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621141820A039.jpg",
            "createTime": "2024-06-21 14:19:03"
        },
        {
            "id": 15,
            "title": "玩出梦想科技亮相进博会 硬核科技体验成关注焦点",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621141621A035.jpg",
            "createTime": "2024-06-21 14:17:42"
        },
        {
            "id": 14,
            "title": "玩出梦想科技：空间计算设备将赋能全行业",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621141429A030.jpg",
            "createTime": "2024-06-21 14:15:42"
        }
    ],
    "total": 25,
    "size": 9,
    "current": 2,
    "orders": [],
    "optimizeCountSql": true,
    "searchCount": true,
    "countId": null,
    "maxLimit": null,
    "pages": 3
}

let newListData3 = {
    "records": [
        {
            "id": 13,
            "title": "玩出梦想集团工业设计负责人亮相XR产品论坛 ",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621141329A029.jpg",
            "createTime": "2024-06-21 14:13:52"
        },
        {
            "id": 12,
            "title": "玩出梦想参加技术开发者论坛，聚焦XR行业现状及材料应用",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621141143A026.jpg",
            "createTime": "2024-06-21 14:12:44"
        },
        {
            "id": 11,
            "title": "共创未来：玩出梦想科技在跨界品牌合作中连续亮相",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621140939A021.jpg",
            "createTime": "2024-06-21 14:11:22"
        },
        {
            "id": 10,
            "title": "携手前进：玩出梦想科技与顺电新合作",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621140712A017.jpg",
            "createTime": "2024-06-21 14:09:16"
        },
        {
            "id": 9,
            "title": "玩出梦想携手高通举办2023 Qualcomm XR 创新应用挑战赛，初赛结果已公布",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621140559A012.jpg",
            "createTime": "2024-06-21 13:09:49"
        },
        {
            "id": 8,
            "title": "沉浸式观影，玩出梦想科技引领“XR＋文化”新浪潮",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621140515A007.jpg",
            "createTime": "2024-06-21 12:30:18"
        },
        {
            "id": 7,
            "title": "玩出梦想科技：荣获2023世界VR产业大会创新奖与Tech G消费电子人气奖的双重荣誉",
            "subtitle": null,
            "image": "/profile/2024/06/21/x_20240621140457A006.jpg",
            "createTime": "2023-01-01 18:02:21"
        }
    ],
    "total": 25,
    "size": 9,
    "current": 3,
    "orders": [],
    "optimizeCountSql": true,
    "searchCount": true,
    "countId": null,
    "maxLimit": null,
    "pages": 3
}

export default {
  components: {
    headertop,
    footerbottom
  },
  filters: {
    createTimefilter(val) {
      let time = val.slice(0, 10)
      let date = new Date(time)
      return date.getFullYear() + ' 年 ' + (date.getMonth() + 1) + ' 月 ' + date.getDate() + ' 日'
    },
    createTimefilter1(val) {
      let time = val.slice(0, 10)
      let date = new Date(time)
      return date.getFullYear() + ' 年 ' + (date.getMonth() + 1) + ' 月 '
    },
    createTimefilter2(val) {
      let time = val.slice(0, 10)
      let date = new Date(time)
      return  date.getDate()
    }
  },
  data() {
    var that = this
    return {
      leftBg: {
        backgroundImage: `url(${bj6})`
      },
      headlineList: [],
      newsList: [],
      pageNum: 1,
      imgUrl: that.BASE_API,
      total: 0,
    }
  },
  methods: {
    jumpDetail(item, index) {
      console.log(item)
      this.$router.push({
        path: '/details',
        query: {
          id: item.id,
          index: index
        }
      })
      localStorage.setItem('cymx_news', JSON.stringify(this.newsList))
    },
    async jumpD(index) {
      if (index == -1) {
        if (this.pageNum == 1) {
          return
        }
        this.pageNum--
        await this.getNewsList()
      }
      else {
        if (this.pageNum >= this.total) {
          return
        }
        this.pageNum++
        await this.getNewsList()
      }
    },
    async headline() {
      // let res = await headline({})
      // let data = res.data
      // this.headlineList = data

    },
    async getNewsList() {
      // let res = await getNewsList({
      //   keyword: '',
      //   pageNum: this.pageNum,
      //   pageSize: 9
      // })
      let res = {}
      if(this.pageNum == 1){
        res = newListData1
      }else if(this.pageNum == 2){
        res = newListData2
      }else if(this.pageNum == 3){
        res = newListData3
      }
      // let data = res.data
      this.total = res.pages
      this.newsList = res.records


    }
  },
  async mounted() {
    await this.headline()
    await this.getNewsList()

    $(".allTopConMenu ul li").eq(5).addClass("active");
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
      new WOW().init();
    };

    var newsZySwiper = new Swiper('.newsZySwiper', {
      observer: true, //开启动态检查器，监测swiper和slide
      observeParents: true, //监测Swiper 的祖/父元素
      initialSlide: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.jsKlJbSwiper-button-next',
        prevEl: '.jsKlJbSwiper-button-prev',
      },
      // on: {
      //   init: function () {
      //     swiperAnimateCache(this); //隐藏动画元素
      //     swiperAnimate(this); //初始化完成开始动画
      //   },
      //   slideChangeTransitionEnd: function () {
      //     swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      //     //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      //   }
      // }
    })


  }
}
</script>

<style scoped></style>
