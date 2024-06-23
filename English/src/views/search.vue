<template>
  <div>
    <headertop :class="{ active: true }"></headertop>
    <div style="position: relative;z-index: 1;background: #fff;padding-top: 1px;">
      <div class="seaNySs">
        <input class="seaNySsInp" type="search" placeholder="Please enter a keyword search" v-model="inputValue">
        <div class="malltSConSeaBut" @click="storeList"><img src="../assets/images/store/sea.png" alt="">Search</div>
      </div>
      <div class="seaNyNav">
        <ul class="f20 seaNyNavUl">
          <!-- <li class="active">全部</li> -->
          <li v-for="(item, index) in tabs" :key="index" :class="{ active: item.active }"
            @click="changeTab(item, index)">{{
              item.label }}</li>
        </ul>
      </div>
      <div class="w1600 seaNyCon">
        <!-- 全部 -->
        <div class="seaNyConMk">
          <div class="f48 bolder" style="margin-top: 30px;">Store</div>
          <div class="w1600 MdTjCon wow fadeInUp">
            <div class="MdTjConMk" v-for="(item, index) in dataList" :key="index * 1.111">
              <div class="MdTjConMkImg"><img class="img100" :src="imgUrl + item.image" alt="" /></div>
              <div class="MdTjConMkBot">
                <div class="f20 MdTjConMkBot_1">{{ item.storeName }}</div>
                <div class="f20 MdTjConMkBot_2">{{ item.address }}</div>
                <div class="f17 MdTjConMkBot_3">[Learn More]
								<!-- <img src="../assets/images/store/row1.png" alt="" /> -->
								</div>
              </div>
            </div>
          </div>
          <div class="f36" style="text-align: center;color: #ccc;" v-show="isShowStore">There are no related stores</div>
          <div style="margin-top: 50px;" class="f48 bolder">News</div>
          <ul class="newsList">
            <li class="wow fadeInUp" v-for="(item, index) in newsList" :key="newsList.id"
              @click="jumpDetail(item, index)">
              <div class="newsListImg">
                <a href="javascript:void(0);">
                  <img class="img100" :src="imgUrl + item.image" alt="" />
                </a>
              </div>
              <div class="newsListNr">
                <a href="javascript:void(0);">
                  <div class="f22 twoLine newsListNr_1">{{ item.title }}</div>
                  <div class="f13 newsListNr_2">{{ item.createTime | createTimefilter }}</div>
                </a>
              </div>
            </li>
          </ul>
          <div class="f36" style="text-align: center;color: #ccc;" v-show="isShowNews">There is no related news</div>
        </div>
        <!-- 产品 -->
        <div class="seaNyConMk">
          <div class="w1600 MdTjCon wow fadeInUp">
            <div class="MdTjConMk" v-for="(item, index) in dataList" :key="index * 1.111">
              <div class="MdTjConMkImg"><img class="img100" :src="imgUrl + item.image" alt="" /></div>
              <div class="MdTjConMkBot">
                <div class="f20 MdTjConMkBot_1">{{ item.storeName }}</div>
                <div class="f20 MdTjConMkBot_2">{{ item.address }}</div>
                <div class="f17 MdTjConMkBot_3">[Learn More]
								<!-- <img src="../assets/images/store/row1.png" alt="" /> -->
								</div>
              </div>
            </div>
          </div>
          <div class="f36" style="text-align: center;color: #ccc;" v-show="isShowStore">There are no related stores</div>
        </div>
        <!-- 品牌新闻 -->
        <div class="seaNyConMk">
          <ul class="newsList">
            <li class="wow fadeInUp" v-for="(item, index) in newsList" :key="newsList.id"
              @click="jumpDetail(item, index)">
              <div class="newsListImg">
                <a href="javascript:void(0);">
                  <img class="img100" :src="imgUrl + item.image" alt="" />
                </a>
              </div>
              <div class="newsListNr">
                <a href="javascript:void(0);">
                  <div class="f22 twoLine newsListNr_1">{{ item.title }}</div>
                  <div class="f13 newsListNr_2">{{ item.createTime | createTimefilter }}</div>
                </a>
              </div>
            </li>
          </ul>
          <div class="f36" style="text-align: center;color: #ccc;" v-show="isShowNews">There is no related news</div>
        </div>
      </div>
      <footerbottom></footerbottom>
    </div>
  </div>
</template>

<script>
import headertop from '@/components/header.vue'
import footerbottom from '@/components/footer.vue'
import { getstoreList, getNewsList } from '@/api/index.js'
export default {
  components: {
    headertop,
    footerbottom
  },
  filters: {
    createTimefilter(val) {
      let time = val.slice(0, 10)
      let date = new Date(time)
      return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    }
  },
  watch: {
    "$route.query.value": {
      handler(e) {
        this.inputValue=e
        this.storeList()
      },
    },
  },
  data() {
    var that = this
    return {
      dataList: [],
      inputValue: '',
      tabs: [
        {
          active: true,
          label: 'All'
        }, {
          active: false,
          label: 'Store'
        }, {
          active: false,
          label: 'News'
        }],
      imgUrl: that.BASE_API,
      newsList: [],
      isShowStore:false,
      isShowNews:false
    }
  },
  methods: {
    changeTab(item) {
      this.tabs.every(i => {
        i.active = false
      })
      item.active = true
    },
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
    async storeList() {
      if (this.inputValue == "") {
        alert("The input cannot be empty")
      } else {
        $(".seaNyNavUl li").removeClass("active");
      $(".seaNyCon .seaNyConMk").hide();
        $(".seaNyNavUl li").eq(0).addClass("active");
        $(".seaNyCon .seaNyConMk").eq(0).show();
        let res = await getstoreList({
          keyword: this.inputValue,
          pageNum: this.pageNum,
          pageSize: 100
        })
        let data = res.data.records
        this.dataList = data
        if (this.dataList.length == 0) {
          this.isShowStore = true
        } else {
          this.isShowStore = false
        }

        let resp = await getNewsList({
          keyword: this.inputValue,
          pageNum: 1,
          pageSize: 1000
        })
        this.newsList = resp.data.records
        console.log(resp)
        if (this.newsList.length == 0) {
          this.isShowNews = true
        } else {
          this.isShowNews = false
        }

      }

    }
  },
  async mounted() {
    var that=this;
    const url = new URL(window.location.href);
    // 使用URLSearchParams获取查询参数
    const params = new URLSearchParams(url.search);
    // 获取特定的查询参数
    const param1 = that.$route.query.value
    that.inputValue=param1
    this.storeList()

    $(".seaNyCon .seaNyConMk").eq(0).show();
    $(".seaNyNavUl li").click(function () {
      var index = $(".seaNyNavUl li").index(this);
      $(".seaNyNavUl li").removeClass("active");
      $(".seaNyNavUl li").eq(index).addClass("active");
      $(".seaNyCon .seaNyConMk").hide();
      $(".seaNyCon .seaNyConMk").eq(index).show();
    })
  }
}
</script>

<style scoped></style>
