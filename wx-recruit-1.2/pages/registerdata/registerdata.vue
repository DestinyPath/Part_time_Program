<template>
  <div class="registerdata">
    <!-- 顶部导航栏 -->
    <view style="height: 90px; width: 100%;">
			<u-navbar
				safeAreaInsetTop
				:border="true"
				:bgColor="'#0077ff'"
				>
          <view
              class="u-nav-slot-left"
              slot="left"
          >
            <u-icon
                @click="gobackClick"
                name="arrow-left"
                color="#ffffff"
                size="19"
            ></u-icon>
            <u-line
                direction="column"
                :hairline="true"
                length="0"
                margin="0 2px"
            ></u-line>
            <u-icon
                @click="goHomeClick"
                color="#ffffff"
                name="home"
                size="23"
            ></u-icon>
            <u-line
                direction="column"
                :hairline="true"
                length="0"
                margin="0 2px"
            ></u-line>
        </view>
					<view
						class="u-nav-slot"
						slot="center"
					>
						<p class="nav-name">全部报名</p>
					</view>

			</u-navbar>
		</view>
    <!-- 内容 -->
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
						<p class="apply">已经报名</p>
					</view>
					
		</view>
  </div>
</template>

<script>
import Store from '@/store/HomeStore';
export default {
  components: {},
  data() {
    return {
      RqInfo:null
    }
  },
  computed: {},
  methods: {
     //返回按钮
     gobackClick() {
      uni.navigateBack({
        delta: 1
      })
    },
    //返回首页
    goHomeClick(){
      uni.switchTab({
        url: '/pages/index/index'
      })
    },
    async goDetail(item){
				console.log('点击详情')
				await Store.commit('upshowdata',item)
				uni.navigateTo({
					url: `/pages/PositionInformation/PositionInformation?PositionName=${item.title}`,
				})
			}
  },
  watch: {},
  created(){
    this.RqInfo = Store.state.registerdata
  },
  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
} 
</script>

<style lang="scss" scoped>
.registerdata{
  display: flex;
    flex-direction: column;
    .u-nav-slot-left{
      display: flex;
      align-items: center;
    }
    .u-nav-slot{
      width: 200px;
      display: flex;
      align-items: center;
      .nav-name{
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 15px;
        font-weight: 600;
        color: #ffffff;
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
					color: #777777;
					align-items: center;
					justify-content: center;
					border: none;
					padding: 5px;
					background-color: #b9edb252;
				}
			}
}
</style>