<template>
  <div>
    <headertop></headertop>
    <div class="allNyBan" :style="allNyBanBg">
      <img class="img100" src="../assets/images/xz/banner2.jpg" alt="" />
      <div class="allNyBanPos">
        <div class="f52 bolder colorfff textCenter allNyBanPosTit_1 wow fadeInUp">Join Us</div>
        <div class="f24 colorfff textCenter wow fadeInUp allNyBanPosTit_2">Reform how everyone acquires information</div>
      </div>
      <div class="llMoreNr">
        <p class="llMoreNr_1">View More</p>
        <div class="llMoreNrImg"><img src="../assets/images/xz/rowdown.png" alt="" /></div>
      </div>
    </div>
    <div class="jrMxQh">
      <div class="f46 bolder jrMxQh_1 wow fadeInUp">Welcome to Play For Dream</div>
      <div class="jsKlJbSwiperBut jrMxQh_2 wow fadeInUp">
        <div class="jsKlJbSwiper-button-prev bjheise rowLeft"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
        <div class="jsKlJbSwiper-button-next bjheise rowRight"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      </div>
    </div>
    <div class="swiper jrMxQhSwiper wow fadeInUp">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in dataListSlogan" :key="index * 1.111">
          <img class="img100" :src="imgUrl + item.image" alt="" />
          <div class="jrMxQhSwiperMc">
            <div class="f20 colorfff jrMxQhSwiperTit"><i></i>{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="gdrWcmX" style="background-image: url(../assets/images/xz/bj5.jpg);">
      <img class="img100" src="../assets/images/xz/bj5.jpg" alt="" />
      <div class="f52 bolder colorfff gdrWcmXNr">
        <div class="wow fadeInUp">Encourage more people to play for dream <br> Infinite Our Space, Play Your Dream</div>
      </div>
    </div>
    <div class="w1440 zpJob wow fadeInUp">
      <div class="f46 bolder textCenter zpJobTit">Job Types</div>
      <div class="zpJobSx">
        <div class="zpJobSxMk">
          <select class="zpJobSelect" name="" id="" v-model="data1">
            <option :value="null">City</option>
            <option :value="item.dictValue" v-for="(item, index) in option1" :key="index * 1.11">{{ item.dictLabelEn }}
            </option>

          </select>
        </div>
        <div class="zpJobSxMk">
          <select class="zpJobSelect" name="" id="" v-model="data2">
            <option :value="null">Job title</option>
            <option :value="item.dictValue" v-for="(item, index) in option2" :key="index * 1.33">{{ item.dictLabelEn }}
            </option>
          </select>
        </div>
        <div class="zpJobSxMk">
          <select class="zpJobSelect" name="" id="" v-model="data3">
            <option :value="null">Work experience</option>
            <option :value="item.dictValue" v-for="(item, index) in option3" :key="index * 1.33">{{ item.dictLabelEn }}
            </option>
          </select>
        </div>
        <!-- <div class="zpJobSxMk">
      			<select class="zpJobSelect" name="" id="">
      				<option value="">学历</option>
      				<option value="">学历1</option>
      				<option value="">学历2</option>
      			</select>
      		</div> -->
        <div class="zpJobSxMk">
          <input class="zpJobInp" type="search" placeholder="Find your interest" v-model="inputValue" />
          <div class="zpJobSxMkPos"  @click="seaarchFun">
            Search<img src="../assets/images/xz/ss.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="w1440 zpJobList wow fadeInUp" v-if="isShow">
      <!-- zpJobListMk -->
      <div class="zpJobListMk" v-for="(item, index) in dataList" :key="index * 9.999">
        <div class="zpJobListMkTop f18">
          <div class="zpJobListMkTopMk zpJobListMkTop_1">{{ item.city }}</div>
          <div class="zpJobListMkTopMk zpJobListMkTop_2">{{ item.position }}</div>
          <div class="zpJobListMkTopMk zpJobListMkTop_3">{{ item.yearsRequired }}Years</div>
          <!-- <div class="zpJobListMkTopMk zpJobListMkTop_4">本科及以上</div> -->
          <div class="zpJobListMkRow"></div>
        </div>
        <div class="zpJobListMkBot">
          <div class="zpJobListMkBotTop">
            <div class="zpJobListMkBotTopMk">
              <h3 class="f18">Job description</h3>
              <p class="f14" style="white-space: pre-wrap;" v-html="item.positionDescription"></p>
            </div>
            <div class="zpJobListMkBotTopMk">
              <h3 class="f18">Job requirement</h3>
              <p class="f14" style="white-space: pre-wrap;" v-html="item.positionRequirements"></p>
            </div>
            <div class="zpJobListMkBotTopMk">
              <h3 class="f18">Bonus</h3>
              <p class="f14" style="white-space: pre-wrap;" v-html="item.benefits"></p>
            </div>
          </div>
          <div class="zpJobListMkBotJlWc">
            <div class="zpJobListMkBotJl">Please send your resume to <span>liuf@sinolf.com</span> <img src="../assets/images/xz/row4.png"
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="f26 noSjAll" v-else>No relevant position available</div>
    <div class="fyPages mt0 mb5 wow fadeInUp" v-show="isShow">
      <span class="fyPagesLink"><a @click="jumpD(-1)" href="javascript:void(0);">Previous</a></span>
      {{ pageNum }}/{{ total }}
      <span class="fyPagesLink"><a @click="jumpD(1)" href="javascript:void(0);">Next</a></span>
    </div>
    <footerbottom></footerbottom>
  </div>
</template>

<script>
  import headertop from '@/components/header.vue'
  import footerbottom from '@/components/footer.vue'
  import banner2 from '@/assets/images/xz/banner2.jpg'
  import {
    jobList,
    dictType
  } from '@/api/index.js'
  import {
    slogan
  } from '@/api/index.js'
  export default {
    components: {
      headertop,
      footerbottom
    },
    data() {
      var that = this
      return {
        allNyBanBg: {
          backgroundImage: `url(${banner2})`
        },
        pageNum: 1,
        option1: [],
        option2: [],
        option3: [],
        total: 0,
        data1: null,
        data2: null,
        data3: null,
        dataList: [],
        dataListSlogan: [],
        imgUrl: that.BASE_API,
        inputValue: '', // 绑定的值
        isShow: true
      }
    },
    methods: {
      async jumpD(index) {
        if (index == -1) {
          if (this.pageNum == 1) {
            return
          }
          this.pageNum--
          await this.jobList()
        } else {
          if (this.pageNum >= this.total) {
            return
          }
          this.pageNum++
          await this.jobList()
        }
      },
      seaarchFun() {
        this.pageNum = 1
        this.jobList()
      },
      async dictType() {
        let res1 = await dictType('cms_job_city')
        let res2 = await dictType('cms_job_position')
        let res3 = await dictType('cms_job_year')
        this.option1 = res1.data
        this.option2 = res2.data
        this.option3 = res3.data
      },
      async jobList() {
        this.dataList = []
        // this.total=0
        // this.pageNum=0
        let res = await jobList({
          city: this.data1,
          keyword: this.inputValue,
          pageNum: this.pageNum,
          pageSize: 10,
          position: this.data2,
          yearsRequired: this.data3
        })
        this.dataList = res.data.records
        this.total = res.data.pages
        if (this.dataList.length > 0) {
          this.isShow = true
          this.$nextTick(() => {
            setTimeout(() => {
              $(".zpJobList .zpJobListMk").eq(0).find(".zpJobListMkRow").addClass("on");
              $(".zpJobList .zpJobListMk").eq(0).find(".zpJobListMkBot").show();
              $(".zpJobListMkTop").click(function() {
                if ($(this).find(".zpJobListMkRow").hasClass("on")) {
                  $(this).find(".zpJobListMkRow").removeClass("on");
                  $(this).next().slideUp();
                } else {
                  $(".zpJobListMkRow").removeClass("on");
                  $(this).find(".zpJobListMkRow").addClass("on");
                  $(".zpJobListMkBot").slideUp();
                  $(this).next().slideDown();
                }
              })
            }, 300)
            // $(".zpJobList .zpJobListMk").eq(0).find(".zpJobListMkBot").show();
            // $(".zpJobListMkTop").click(function () {
            //     if (!$(this).next().is(":hidden")) {
            //       $(this).find(".zpJobListMkRow").removeClass("on");
            //       $(this).next().slideUp();
            //     } else {
            //       $(".zpJobListMkRow").removeClass("on");
            //       $(this).find(".zpJobListMkRow").addClass("on");
            //       $(".zpJobListMkBot").slideUp();
            //       $(this).next().slideDown();
            //     }
            //   })

          })
        } else {
          this.isShow = false
        }



        console.log(this.total)
      },
      async slogan() {
        let res = await slogan({})
        let data = res.data
        this.dataListSlogan = data

      }
    },
    async mounted() {
      await this.dictType()
      await this.jobList()
      await this.slogan()
      $(".allTopConMenu ul li").eq(5).addClass("active");
      if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        new WOW().init();
      };
      var jrMxQhSwiper = new Swiper('.jrMxQhSwiper', {
        initialSlide: 0,
        slidesPerView: 1.9,
        spaceBetween: 65,
        navigation: {
          nextEl: '.jsKlJbSwiper-button-next',
          prevEl: '.jsKlJbSwiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          430: {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 1.9,
            spaceBetween: 55
          }
        }
      })



    }
  }
</script>

<style scoped></style>
