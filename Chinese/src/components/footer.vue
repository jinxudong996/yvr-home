<template>
  <div>
    <div class="nyFooter">
      <div class="nyFooterTop">
        <div class="nyFooterTopNr">
          <div class="nyFooterTopLeft">
            <div class="nyFooterTopLeft_1"><img src="../assets/images/logo1.png" alt="" /></div>
            <div class="nyFooterTopLeft_2">意见与建议<br>
              021-57098200
            </div>
            <div class="nyFooterTopLeft_3Wap">
              <div class="nyFooterTopLeft_3">关注我们</div>
              <div class="nyFooterTopLeft_4">
                <div class="nyFooterTopLeft_4Mk">
                  <img src="../assets/images/wx1.png" alt="" />
                  <div class="nyFooterTopLeft_4MkPos">
                    <img src="../assets/images/wxewm.png" alt="" />
                  </div>
                </div>
                <div class="nyFooterTopLeft_4Mk">
                  <a href="https://weibo.com/u/7740187132" target="_blank"><img src="../assets/images/wb1.png"
                      alt="" /></a>
                </div>
              </div>
            </div>
            <!-- <div class="nyFooterTopLink">
              <div class="nyFooterTopLinkTop">友情链接</div>
              <div class="nyFooterTopLinkCon">
                <ul>
                  <li v-for="(item, index) in dataList" :key="index * 1.111"><a :href="item.link"
                      target="_blank">{{ item.name }}</a></li>
                </ul>
              </div>
            </div> -->
          </div>
          <div class="nyFooterTopRight">
            <dl>
              <dt><router-link to="/mr">MR 系列</router-link></dt>
              <dd><router-link to="/mr">玩出梦想 MR</router-link></dd>
              <dd><a href="https://mall.jd.com/index-1000425743.html" target="_blank">现在订购 </a></dd>
            </dl>
            <dl>
              <dt><router-link to="/vr">VR 系列 </router-link></dt>
              <dd><router-link to="/vr">YVR 2 </router-link></dd>
              <dd><a href="https://mall.jd.com/index-1000425743.html" target="_blank">现在订购 </a></dd>
            </dl>
            <dl>
              <dt><router-link to="/store">购买渠道 </router-link></dt>
              <dd><router-link to="/store">线上商城 </router-link></dd>
              <dd><router-link to="/store?index=1">线下体验店 </router-link></dd>
            </dl>
            <dl>
              <dt><router-link to="/service">服务与支持 </router-link></dt>
              <dd><router-link to="/service?index=3">玩出梦想助手 </router-link></dd>
              <dd><router-link to="/service?index=1">串流助手 </router-link></dd>
              <dd><router-link to="/service?index=2">飞屏助手 </router-link></dd>
            </dl>
            <dl>
              <dt><router-link to="/about">关于我们 </router-link></dt>
              <dd><router-link to="/about?index=1">品牌故事 </router-link></dd>
              <dd><router-link to="/about?index=2">发展历程 </router-link></dd>
              <dd><router-link to="/news">品牌新闻 </router-link></dd>
              <dd><router-link to="/join">人才储备 </router-link></dd>
              <dd><router-link to="/about?index=3">联系我们 </router-link></dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="nyFooterBot">
        <div class="nyFooterBot_1">玩出梦想(上海)科技有限公司 <span>沪公网安备31011702009037号</span> <span>沪ICP备2020035905号</span>
        </div>
        <div class="nyFooterBot_2">
          <router-link to="/page?index=1">法律条款</router-link>
          <router-link to="/page?index=2">隐私保护</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { friendList } from '@/api/index.js'
export default {
  data() {
    return {
      dataList: []
    }
  },
  methods: {
    async friendList() {
      let res = await friendList({})
      let data = res.data
      this.dataList = data

    }
  },
  async mounted() {
    await this.friendList()
  }
}
</script>

<style scoped></style>
