<template>
	<div>
		<headertop></headertop>
		<div class="xwXqBan" :style="leftBg">
			<div class="w1455 xwXqBanCon">
				<div class="xwXqBanConLeft wow fadeInUp">
					<div class="f52 bolder xwXqBanConLeft_1" style="white-space: pre-wrap;" v-html="dataXq.title"></div>
					<div class="f20 xwXqBanConLeft_2">{{ dataXq.subtitle }}</div>
				</div>
				<div class="xwXqBanConRight">
					<div class="xwXqBanConRight_1"><span>{{ thisDay }}</span><em>日</em></div>
					<div class="xwXqBanConRight_2">{{ thisYear }} 年 {{ thisMonth }} 月</div>
					<!-- <div class="xwXqBanConRight_3"> 阅读次数：231 次</div> -->
					<div class="xwXqBanConRightIco"><img src="../assets/images/xz/ico1.png" alt="" /></div>
				</div>
			</div>
		</div>
		<!-- <div class="w1455 xwXqCon">
			<div class="xwXqConImg"><img class="img100" :src="imgUrl + dataXq.image" alt="" /></div>
			<div class="xwXqConNr f20 wow fadeInUp">
				<div v-html="dataXq.content"></div>
				<div class="xwXqConFy wow fadeInUp">
					<div class="jsKlJbSwiper-button-prev bjheise" @click="getpreviousNews"></div>
					<div class="jsKlJbSwiper-button-next bjheise" @click="getnextNews"></div>
				</div>
			</div>
		</div> -->
		<div class="w1455 f20 xwXqConXz">
			<div v-html="dataXq.content"></div>
		</div>
		<div class="w1455 f26 newsFy">
			<div @click="getpreviousNews" v-if="!prevShow">上一篇：<a href="javascript:void(0);">{{ previousNews.title }}</a></div>
			<div style="opacity: .6;" v-show="prevShow" v-else>上一篇：没有了</div>
			<div @click="getnextNews" v-if="!nextShow">下一篇：<a href="javascript:void(0);">{{ nextNews.title }}</a></div>
			<div style="opacity: .6;" v-show="nextShow" v-else>下一篇：没有了</div>
		</div>
		<div class="w1455 glNews">
			<div class="f52 bolder glNewsTit wow fadeInUp">相关新闻</div>
			<ul class="glNewsList">
				<li class="wow fadeInUp" v-for="(item, index) in relatedList" :key="item.id"
					@click="jumpDetail(item, index)">
					<a href="javascript:void(0);">
						<img class="img100" :src="imgUrl + item.image" alt="" />
						<div class="glNewsListMc">
							<div class="f22 twoLine glNewsList_1">{{ item.title }}</div>
							<div class="f13 glNewsList_2">{{ item.createTime | createTimefilter }}</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<footerbottom></footerbottom>
	</div>
</template>

<script>
import headertop from '@/components/header.vue'
import footerbottom from '@/components/footer.vue'
import bj6 from '@/assets/images/xz/bj4.jpg'
import { getNewsDetail, getNewsRelated } from '@/api/index.js'

import mockNewsData from '../../mock/news.js';
import relatedListData from '../../mock/related.js';

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
		}
	},
	watch: {
		"$route.query.index": {
			handler(e) {
				this.getNewsDetail()
			},
		},
	},
	data() {
		var that = this
		return {
			leftBg: {
				backgroundImage: `url(${bj6})`
			},
			dataXq: {},
			imgUrl: that.BASE_API,
			thisYear: 2024,
			thisMonth: 6,
			index: 0,
			lds: [],
			thisDay: 1,
			relatedList: [],
			previousNews: {},
			nextNews: {},
			prevShow: false,
			nextShow: false
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
			this.getNewsRelated()
			// localStorage.setItem('cymx_news', JSON.stringify(this.newsList))
		},
		async getNext(index) {
			let list = JSON.parse(localStorage.getItem('cymx_news'))
			if (index == -1) {
				if (this.index == 0) {
					this.index = list.length - 1
				}
				else {
					this.index--
				}
				console.log(this.index)
				let res = await getNewsDetail(list[this.index].id);
				let data = res.data;
				this.dataXq = data;
				let createTime = data.createTime;
				const date = new Date(createTime);
				this.thisYear = date.getFullYear();
				this.thisMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的
				this.thisDay = date.getDate().toString().padStart(2, '0');

			}
			else {
				if (this.index == list.length) {
					this.index = 0
				}
				else {
					this.index++
				}

				let res = await getNewsDetail(list[this.index].id);
				let data = res.data;
				this.dataXq = data;
				let createTime = data.createTime;
				const date = new Date(createTime);
				this.thisYear = date.getFullYear();
				this.thisMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的
				this.thisDay = date.getDate().toString().padStart(2, '0');
			}
		},
		async getNewsDetail() {
			let query = this.$route.query
			this.index = query.index
			// let res = await getNewsDetail(query.id);
			let res = mockNewsData[query.id]
			this.ids = JSON.parse(localStorage.getItem('cymx_news'))
			let data = res;
			// let data = res.data;
			this.dataXq = data;
			let createTime = data.createTime;
			const date = new Date(createTime);
			this.thisYear = date.getFullYear();
			this.thisMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的
			this.thisDay = date.getDate().toString().padStart(2, '0');
		},
		async getNewsRelated() {
			let query = this.$route.query
			this.index = query.index
			// let res = await getNewsRelated(query.id);
			this.ids = JSON.parse(localStorage.getItem('cymx_news'))
			let data = relatedListData;
			// let data = res.data;
			console.log(data)
			if (data.nextNews === null) {
				data.nextNews = { title: "没有了" }
				this.nextShow = true
			}else{
				this.nextShow = false
			}
			if (data.previousNews === null) {
				data.previousNews = { title: "没有了" }
				this.prevShow = true
			}else{
				this.prevShow = false
			}
			this.relatedList = data.relatedNews;
			this.previousNews = data.previousNews;
			this.nextNews = data.nextNews;
		},
		async getpreviousNews() {
			if (this.previousNews.title != "没有了") {
				this.$router.push({
					path: '/details',
					query: {
						id: this.previousNews.id,
						index: this.previousNews.id
					}
				})
				
			}
			await this.getNewsRelated()
		},
		async getnextNews() {
			if (this.nextNews.title != "没有了") {
				this.$router.push({
					path: '/details',
					query: {
						id: this.nextNews.id,
						index: this.nextNews.id
					}
				})
				
			}
			await this.getNewsRelated()
		}
	},
	async mounted() {
		await this.getNewsDetail()
		await this.getNewsRelated()

		$(".allTopConMenu ul li").eq(5).addClass("active");
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
			new WOW().init();
		};
	}
}
</script>

<style scoped>

</style>
