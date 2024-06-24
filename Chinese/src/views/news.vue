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
        <li class="wow fadeInUp" v-for="(item, index) in newsList" :key="newsList.id" @click="jumpDetail(item, index)">
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
      let res = await headline({})
      let data = res.data
      this.headlineList = data

    },
    async getNewsList() {
      let res = await getNewsList({
        keyword: '',
        pageNum: this.pageNum,
        pageSize: 9
      })
      let data = res.data
      this.total = res.data.pages
      this.newsList = data.records


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
