<template>
	<div>
		<headertop></headertop>
		<div class="xwXqBan" :style="leftBg">
			<div class="w1455 xwXqBanCon">
				<div class="wow fadeInUp">
					<div style="text-align: center;" class="f52 bolder xwXqBanConLeft_1">{{ dataContent.title }}</div>
				</div>
			</div>
		</div>
		<div class="w1455 f26 pageContent" v-html="dataContent.content">
		</div>

		<footerbottom></footerbottom>
	</div>
</template>

<script>
import headertop from '@/components/header.vue'
import footerbottom from '@/components/footer.vue'
import bj6 from '@/assets/images/xz/bj4.jpg'
import { getPage } from '@/api/index.js'
export default {
	components: {
		headertop,
		footerbottom
	},
	watch: {
		"$route.query.index": {
			handler(e) {
				console.log(e)
				if (e == 1) {
					this.thisTitle = "Legal clause"
					this.code = "legal_terms"

				}
				if (e == 2) {
					this.thisTitle = "Privacy protection"
					this.code = "privacy_policy"

				}
				this.getPage()
			},
		},
	},
	data() {
		var that = this
		return {
			leftBg: {
				backgroundImage: `url(${bj6})`
			},
			thisTitle: "",
			code: '',
			dataContent: {}
		}
	},
	methods: {
		async getPage() {
			var that = this
			let res = await getPage(
				that.code
			)
			that.dataContent = res.data
		}
	},
	async mounted() {



		var that = this;
		var thisIndex = 1;
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
			thisIndex = 1;
		}
		if (thisIndex == 1) {
			that.thisTitle = "Legal clause"
			that.code = "legal_terms"
		}
		if (thisIndex == 2) {
			that.thisTitle = "Privacy protection"
			that.code = "privacy_policy"
		}

		await this.getPage()

	}
}
</script>

<style scoped></style>
