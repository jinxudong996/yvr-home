<template>
  <div>
    <div class="nyFooter">
    	<div class="nyFooterTop">
    		<div class="nyFooterTopNr">
    			<div class="nyFooterTopLeft">
    				<div class="nyFooterTopLeft_1"><img src="../assets/images/logo1.png" alt="" /></div>
    				<div class="nyFooterTopLeft_2">Feedback<br>
    					021-57098200
    				</div>
    				<div class="nyFooterTopLeft_3Wap">
    					<div class="nyFooterTopLeft_3">Follow Us</div>
    					<div class="nyFooterTopLeft_4">
    						<div class="nyFooterTopLeft_4Mk">
    							<img src="../assets/images/wx1.png" alt="" />
    							<div class="nyFooterTopLeft_4MkPos">
    								<img src="../assets/images/wxewm.png" alt="" />
    							</div>
    						</div>
    						<div class="nyFooterTopLeft_4Mk">
    							<a href="https://weibo.com/u/7740187132" target="_blank"><img src="../assets/images/wb1.png" alt="" /></a>
    						</div>
    					</div>
    				</div>
    				<!-- <div class="nyFooterTopLink">
    					<div class="nyFooterTopLinkTop">Useful Links</div>
    					<div class="nyFooterTopLinkCon">
    						<ul>
    							<li v-for="(item, index) in dataList" :key="index * 1.111"><a :href="item.link" target="_blank">{{item.name}}</a></li>
    						</ul>
    					</div>
    				</div> -->
    			</div>
    			<div class="nyFooterTopRight">
            <dl>
              <dt><router-link to="/mr">MR Series</router-link></dt>
              <dd><router-link to="/mr">Play For Dream MR</router-link></dd>
              <dd><a href="https://mall.jd.com/index-1000425743.html" target="_blank">Order Now</a></dd>
            </dl>
            <dl>
              <dt><router-link to="/vr">VR Series</router-link></dt>
              <dd><router-link to="/vr">YVR 2</router-link></dd>
              <dd><a href="https://mall.jd.com/index-1000425743.html" target="_blank">Order Now</a></dd>
            </dl>
            <dl>
              <dt><router-link to="/store">Where to Buy</router-link></dt>
              <dd><router-link to="/store">Shop Online</router-link></dd>
              <dd><router-link to="/store?index=1">Find a Store</router-link></dd>
            </dl>
            <dl>
              <dt><router-link to="/service">Support</router-link></dt>
              <dd><router-link to="/service?index=3">Play For Dream Mobile Assistant</router-link></dd>
              <dd><router-link to="/service?index=1">PCVR Assistant</router-link></dd>
              <dd><router-link to="/service?index=2">Film Stream Assistant</router-link></dd>
            </dl>
            <dl>
              <dt><router-link to="/about">About Us</router-link></dt>
              <dd><router-link to="/about?index=1">Our Stories</router-link></dd>
              <dd><router-link to="/about?index=2">Milestones</router-link></dd>
              <dd><router-link to="/news">Newsroom</router-link></dd>
              <dd><router-link to="/join">Career</router-link></dd>
              <dd><router-link to="/about?index=3">Contact Us</router-link></dd>
            </dl>
    			</div>
    		</div>
    	</div>
    	<div class="nyFooterBot">
    		<div class="nyFooterBot_1">Copyright Play For Dream (Shanghai)Technology Co.,Ltd.All rights reserved.
    		</div>
    		<div class="nyFooterBot_2">
          <a href="https://developer.pfdm.cn/yvrdoc/vrce/Publish/Legal/PrivacyPolicy.html" target="_blank">Legal clause</a>
          <a href="https://developer.pfdm.cn/yvrdoc/vrce/Publish/Legal/PrivacyPolicy.html" target="_blank">Privacy protection</a>
    			<!-- <router-link to="/page?index=1">Legal clause</router-link>
    			<router-link to="/page?index=2">Privacy protection</router-link> -->
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
    async friendList(){
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
