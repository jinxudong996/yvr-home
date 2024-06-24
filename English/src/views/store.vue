<template>
  <div>
    <headertop :class="{ active: true }"></headertop>
    <div class="mallXs textCenter" :style="mallXsBg">
      <div class="wow fadeInUp">
        <div class="f52 bolder mallXsTit">Shop Online</div>
        <ul class="mallXsLink_1">
          <li>
            <div class="mallXsLink_1Top"><a
                href="https://shop513745436.taobao.com/?spm=pc_detail.27183998.shop_block.dshopinfo.5f107dd6y0MbyA"
                target="_blank"><img src="../assets/images/store/tianmao.png" alt="" /></a></div>
            <div class="mallXsLink_1But"><a
                href="https://shop513745436.taobao.com/?spm=pc_detail.27183998.shop_block.dshopinfo.5f107dd6y0MbyA"
                target="_blank">Buy Now</a></div>
          </li>
          <li>
            <div class="mallXsLink_1Top"><a href="https://mall.jd.com/index-1000425743.html" target="_blank"><img
                  src="../assets/images/store/jd.png" alt="" /></a></div>
            <div class="mallXsLink_1But"><a href="https://mall.jd.com/index-1000425743.html" target="_blank">Buy Now</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="malltS">
      <div class="malltSCon wow fadeInUp">
        <div class="f60 bolder colorfff textCenter malltSCon_1">Join <span class="counter">50,000</span>+ Players<br>in Exploring Endless Possibilities</div>
        <div class="f30 colorfff textCenter bolder malltSCon_2">Find a Store Nearby</div>
        <div class="malltSConSea">
          <input id="myInput" type="search" placeholder="Search by city" v-model="inputValue" @keyup.enter="storeList" />
          <div class="malltSConSeaBut" @click="storeList"><img src="../assets/images/store/sea.png" alt="" />Search</div>
        </div>
      </div>
    </div>

    <div class="MdTj label1">
      <div class="f52 bolder colorfff textCenter MdTjTit wow fadeInUp">Recommended Stores</div>
      <div class="w1600 MdTjCon wow fadeInUp">
        <div class="MdTjConMk" v-for="(item, index) in dataList" :key="index * 1.111">
          <div class="MdTjConMkImg"><img class="img100" :src="imgUrl + item.image" alt="" /></div>
          <div class="MdTjConMkBot">
            <div class="f20 MdTjConMkBot_1">{{ item.storeName }}</div>
            <div class="f20 MdTjConMkBot_2">{{ item.address }}</div>
            <!-- <div class="f17 MdTjConMkBot_3">[Learn More]

						</div> -->
          </div>
        </div>
      </div>

      <div class="f26" style="text-align: center;color: #ccc;" v-show="isShow">No shop available</div>

    </div>
    <div class="storeArea">
      <div class="storeAreaLeft"><img class="img100" src="../assets/images/store/area.png" alt="" /></div>
      <div class="storeAreaRig colorfff wow fadeInUp">
        <div class="f52 bolder storeAreaRig_1">Expanding Across China</div>
        <p class="f24"><span class="f30">3</span> Flagship Stores in Major Cities </p>
        <p class="f24">Over <span class="f30">150+</span> Retail Outlets Nationwide</p>
        <p class="f24"> Focused Growth in <span class="f30">2024</span>  <span class="f30">29</span>Major Cities</p>
        <p class="f24">Adding <span class="f30">300+</span> New Retail Stores</p>
        <p class="f24">Bring Innovative Spaitial Entertainment Experiences to Our Users</p>
      </div>
    </div>
    <div class="mdFw">
      <div class="mdFwTop wow fadeInUp">
        <div class="f52 bolder colorfff">In-Store Services</div>
        <div class="jsKlJbSwiperBut">
          <div class="jsKlJbSwiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
          <div class="jsKlJbSwiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
        </div>
      </div>
      <div class="swiper mdFwSwiper wow fadeInUp">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="mdFwSwiperMk">
              <a href="javascript:void(0);">
                <div class="mdFwSwiper_1"><img src="../assets/images/store/ico1.png" alt="" /><img
                    src="../assets/images/store/ico1act.png" alt="" /></div>
                <div class="mdFwSwiper_2">
                  <div class="f30 bolder mdFwSwiper_2_1">Hardware Repairs</div>
                  <!-- <div class="f27 bolder mdFwSwiper_2_2">More<img src="../assets/images/store/row2.png" alt="" /><img
                      src="../assets/images/store/rowcolor.png" alt="" /></div> -->
                </div>
              </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mdFwSwiperMk">
              <a href="javascript:void(0);">
                <div class="mdFwSwiper_1"><img src="../assets/images/store/ico2.png" alt="" /><img
                    src="../assets/images/store/ico2act.png" alt="" /></div>
                <div class="mdFwSwiper_2">
                  <div class="f30 bolder mdFwSwiper_2_1">Software Updates</div>
                  <!-- <div class="f27 bolder mdFwSwiper_2_2">More<img src="../assets/images/store/row2.png" alt="" /><img
                      src="../assets/images/store/rowcolor.png" alt="" /></div> -->
                </div>
              </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mdFwSwiperMk">
              <a href="javascript:void(0);">
                <div class="mdFwSwiper_1"><img src="../assets/images/store/ico3.png" alt="" /><img
                    src="../assets/images/store/ico3act.png" alt="" /></div>
                <div class="mdFwSwiper_2">
                  <div class="f30 bolder mdFwSwiper_2_1">Consultations</div>
                  <!-- <div class="f27 bolder mdFwSwiper_2_2">More<img src="../assets/images/store/row2.png" alt="" /><img
                      src="../assets/images/store/rowcolor.png" alt="" /></div> -->
                </div>
              </a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="mdFwSwiperMk">
              <a href="javascript:void(0);">
                <div class="mdFwSwiper_1"><img src="../assets/images/store/ico4.png" alt="" /><img
                    src="../assets/images/store/ico4act.png" alt="" /></div>
                <div class="mdFwSwiper_2">
                  <div class="f30 bolder mdFwSwiper_2_1">Device Diagnostics</div>
                  <!-- <div class="f27 bolder mdFwSwiper_2_2">More<img src="../assets/images/store/row2.png" alt="" /><img
                      src="../assets/images/store/rowcolor.png" alt="" /></div> -->
                </div>
              </a>
            </div>
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
import bj6 from '@/assets/images/store/bj6_1.jpg'
import { recommend, getstoreList } from '@/api/index.js'
export default {
  components: {
    headertop,
    footerbottom
  },
  data() {
    var that = this
    return {
      mallXsBg: {
        backgroundImage: `url(${bj6})`
      },
      dataList: [],
      imgUrl: that.BASE_API,
      pageNum: 1,
      inputValue: '', // 绑定的值
      isShow: false
    }
  },
  watch: {
    "$route.query.index": {
      handler(e) {
        var _topHeader = $("#header").outerHeight(true);
        var distanceToTop_1 = $('.label1').offset().top - _topHeader;
        if (e == 1) {
          $('html,body').animate({
            scrollTop: distanceToTop_1
          }, 'slow');
          $("#header").addClass("bjHeise")
        }
      },
    },
  },
  methods: {
    async recommend() {
      let res = await recommend({})
      let data = res.data
      this.dataList = data
    },
    async storeList() {
      if (this.inputValue == "") {
        alert("The input cannot be empty")
      } else {
        let res = await getstoreList({
          keyword: this.inputValue,
          pageNum: this.pageNum,
          pageSize: 100
        })
        let data = res.data.records
        this.dataList = data

        var _topHeader11 = $("#header").outerHeight(true);
        var distanceToTop_11 = $('.label1').offset().top - _topHeader11;
        $('html,body').animate({
          scrollTop: distanceToTop_11
        }, 'slow');
        $("#header").addClass("bjHeise")

        if (this.dataList.length == 0) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      }

    }
  },
  async mounted() {
    await this.recommend()
    // await this.storeList()

    var that = this
    $(function () {
      $(".allTopConMenu ul li").eq(3).addClass("active");
      if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        new WOW().init();
      };
      $('.counter').countUp({
        time: 1500
      });


      var mdFwSwiper = new Swiper('.mdFwSwiper', {
        initialSlide: 0,
        slidesPerView: 3.3,
        spaceBetween: 26,
        navigation: {
          nextEl: '.jsKlJbSwiper-button-next',
          prevEl: '.jsKlJbSwiper-button-prev',
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
            slidesPerView: 3.3,
            spaceBetween: 26,
          }
        }
      });


    })

    var _topHeader = $("#header").outerHeight(true);
    var distanceToTop_1 = $('.label1').offset().top - _topHeader;
    var thisIndex = 0;
    // 创建一个URL对象
    const url = new URL(window.location.href);
    // 使用URLSearchParams获取查询参数
    const params = new URLSearchParams(url.search);
    // 获取特定的查询参数
    const param1 = that.$route.query.index
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

  }
}
</script>

<style scoped></style>
