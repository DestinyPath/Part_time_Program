<template>
	<view class="shouye_view">
		<!-- 导航栏 -->
		<view style="height: 90px; width: 100%;">
			<u-navbar
				safeAreaInsetTop
				:border="true"
				:bgColor="'#0077ff'"
				>
					<view
						class="u-nav-slot"
						slot="left"
					>
						<img src="@/static/icon/logo.png" mode="widthFix" class="nav-logo">
						<li class="nav-TextBox">
							<p class="nav-name">零工小站 | 校园兼职</p>
							<p class="nav-text">校园的零工网 • 打造学生的校园兼职平台</p>
						</li>
					</view>
			</u-navbar>
		</view>
		<!-- 位置|搜索 -->
		<view class="searchBox">
			<li class="location">
				NCHU >
			</li>
			<view class="search">
				<u-search 
					:showAction="true" 
					placeholder="多达100种兼职正在招人" 
					actionText="搜索" 
					:animation="true" 
					bgColor="#e9e5e5" 
					style="z-index: 999;" 
					@change="SearchChange" 
					v-model="SearchText" 
					@custom="customSearch"
					>
				</u-search>
			</view>
		</view>
		<!-- 展示区 -->
		<view class="homeView" v-if="swiperData.length > 0">
			<!-- 通知栏 -->
			<u-notice-bar :text="notice" mode="closable" direction="row"></u-notice-bar>
			<!-- tab栏 -->
			<view v-if="Rqlist.length > 0">
				<u-tabs 
				:current="tab"
				@click="tabclick"
				:list="Rqlist"
				keyName="TypeName"
				activeStyle="color: #0077ff;"
				inactiveStyle="color: #000000;"
				>
				</u-tabs>
			</view>
			<!-- 滑动内容区 -->
			<view class="followView">
				<!-- 图片内容区 -->
				<view class="imgView">
					<!-- 轮播图 -->
					<view class="swiper">
						<u-swiper 
						:list="swiperData"
						keyName="img"
						autoplay
						radius = 20
						height = 100
						indicator="aspectFill"
						>
						</u-swiper>
					</view>
					<!-- 模块-推荐其他 -->
					<view class="module">
						<img class="module-title1" src="@/static/img/btn1.png" mode="aspectFill"/>
						<img class="module-title2" src="@/static/img/btn2.png" mode="aspectFill"/>
					</view>
				</view>
				<!-- 列表内容区 -->
				<view class="listView" v-for="(item, index) in RqInfo" :key="index" v-if="RqInfo" @click="goDetail(item)">
					<!-- 列表 -->
					<li class="title-list">
						<p class="title">{{item.title}}</p>
						<p class="salary">{{item.RMB}}</p>
					</li>
					<!-- 简介字段块 -->
					<li class="list-info">
						<p v-for="(item2, index) in item.TextList" :key="index" class="list-info-text">{{item2.text}}</p>
					</li>
					<view class="Bottombox">
						<!-- 公司信息 -->
						<li class="company">
							<img src="@/static/img/company1.png" mode="widthFix" class="companyimg"/>
							<p class="companyname">{{item.company}}</p>
						</li>
						<p class="apply">立即报名</p>
					</view>
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
import Store from '@/store/HomeStore';
	export default {
		data() {
			return {
				tab: 0,
				title: 'Hello',
				SearchText: '',
				notice: '欢迎来到Nchu零工小站！',
				swiperData: [
					{
						img: '/static/img/lbt1.jpg',
					},
					{
						img: '/static/img/lbt2.jpg',
					}
				],
				//列表
				Rqlist: [],
				//招聘信息
				RqInfo: null,
			}
		},
		onLoad() {

		},
		async created() {
			await Store.dispatch('getALLdata')
			this.Rqlist = Store.state.ALLdata
			this.RqInfo = Store.state.ALLdata[0].Data
		},
		methods: {
			//搜索
			//--点击搜索按钮
			customSearch(text){
				console.log('搜索')
			},
			//--变动监听值
			SearchChange(text){
				console.log('搜索')
			},
			//改变tab栏
			tabclick(index){
				console.log(index.Data)
				this.RqInfo = index.Data
			},
			async goDetail(item){
				console.log('点击详情')
				await Store.commit('upshowdata',item)
				uni.navigateTo({
					url: `/pages/PositionInformation/PositionInformation?PositionName=${item.title}`,
				})
			}
		},
		computed: {
		}
	}
</script>

<style lang="scss" scoped>
.shouye_view{
	display: flex;
	overflow: auto;
	background-color: #0077ff;
	flex-direction: column;
	//导航栏
	.u-nav-slot{
	display: flex;
	align-items: center;
	.nav-logo{
		border-radius: 8px;
		width: 40px;
		height: 40px;
	}
	.nav-TextBox{
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		.nav-name{
			font-size: 14px;
			font-weight: 600;
			color: #ffffff;
		}
		.nav-text{
			font-size: 9px;
			color: #fff;
		}
	}
	}
	//搜索
	.searchBox{
		display: flex;
		margin-bottom: 20px;
		//地址
		.location{
			display: flex;
			align-items: center;
			color: #fff;
			margin: 0 10px;
		}
		//输入框
		.search{
			margin-left: 10px;
			width: 250px;
		}
	}
	//首页展示
	.homeView{
		display: flex;
		flex-direction: column;
		background-color: #ffffff;
		border-radius: 30px 30px 0 0;
		padding: 10px 10px 0 10px;
		width: 95%;
		height: 100%;
		.followView{
			display: flex;
			flex-direction: column;
			//图片内容区
			.imgView{
				display: flex;
				.swiper{
					margin: 5px;
					width: 60%;
				}
				.module{
					width: 40%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.module-title1{
						margin-bottom: 2.5px;
						border-radius: 15px;
						width: 90%;
						height: 45px;
					}
					.module-title2{
						margin-top: 2.5px;
						border-radius: 15px;
						width: 90%;
						height: 45px;
					}
				}
			}
			//招聘信息盒子
			.listView{
				display: flex;
				flex-direction: column;
				border-radius: 10px;
				padding: 5px;
				width: 95%;
				margin: 5px auto;
				box-shadow: 0 0 10px #bfbfbf;//阴影
				//标题
				.title-list{
					display: flex;
					align-items: center;
					.title{
						width: 60%;
						font-size: 15px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.salary{
						text-align: right;
						width: 40%;
						font-size: 15px;
						color: #e73535;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
				//描述
				.list-info{
					display: flex;
					align-items: center;
					width: 100%;
					margin: 5px 0;
					.list-info-text{
						border-radius: 10px;
						margin: 0 3px;
						padding: 2px;
						font-size: 8px;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: #e9e9e9;
						color: #000000;
					}
				}
				//公司信息
				.Bottombox{
					display: flex;
					justify-content: space-between;//水平分布
					align-items: center;
					width: 100%;

				}
				.company{
					display: flex;
					align-items: center;
					.companyimg{
						margin: 0 5px;
						width: 20px;
						height: 20px;
						border-radius: 50%;
					}
					.companyname{
						font-size: 10px;
					}
				}
				.apply{
					display: flex;
					width: 60px;
					height: 15px;
					border-radius: 10px;
					font-size: 12px;
					color: #6eef5d;
					align-items: center;
					justify-content: center;
					border: none;
					padding: 5px;
					background-color: #b9edb252;
				}
			}
		}
	}
}

</style>
