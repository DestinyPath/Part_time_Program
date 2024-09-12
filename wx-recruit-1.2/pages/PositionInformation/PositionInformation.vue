<template>
  <div class="view">
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
						<p class="nav-name">{{PositionName}}</p>
					</view>

			</u-navbar>
		</view>
    <!-- 内容区 -->
    <view v-if="Data" class="content">
      <view class="title">
        <li class="title-text">
          <img src="@/static/icon/AnQuan.svg" class="icon" mode="widthFix"/>
          <p style="color: #06cd1d; font-size: 14px; font-weight: 600;">求职保障</p>
          <p class="text">已经参加求职者保障计划 安心赚钱</p>
        </li>
        <p style="font-size: 16px; font-weight: 600;width: 90%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{PositionName}}</p>
        <p style="color: #ff0000;">{{Data.RMB}}</p>
        <p style="color: #ff0000;">{{Data.over}}</p>
      </view>
      <p style="font-size: 16px; font-weight: 500; margin: 10px">发布企业</p>
      <view class="company">
        <view class="company-info">
          <img src="@/static/img/company1.png" mode="widthFix" style="width: 40px; height: 40px; border-radius: 50%; margin: 0 10px;">
          <li style="display: flex; flex-direction: column;">
            <p class="name" style="font-size: 17px; font-weight: 600;">{{Data.company}}</p>
            <p class="text" style="font-size: 13px; color: #bcbcbc;">企业认证</p>
          </li>
        </view>
        <li style="width: 90%; height: 1px; background-color: #d4d4d4; margin: 10px auto;"></li>
        <p style="font-size: 13px; color: #bcbcbc; margin: 5px 13px;">已经通过芝麻企业信用认证</p>
      </view>
      <p style="font-size: 16px; font-weight: 500; margin: 10px">职位详情</p>
      <view class="detail">
        {{Data.text}}
      </view>
    </view>
    <!-- 底部栏 -->
    <view class="bottomTab">
     <p class="bottomTab-btn" @click="on">立即报名</p>
    </view>
  </div>
</template>

<script>
import Store from '@/store/HomeStore';
export default {
  components: {},
  data() {
    return {
      PositionName: '',
      Data:null
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
    async on(){
      //弹窗通知
      let arr = Store.state.registerdata
      //重复报名检测
      if (arr.includes(this.Data)) {
        uni.showToast({
          title: '已经报名了',
          icon: 'none'
        })
      }else{
        arr.push(this.Data)
        await Store.commit('upregisterdata',arr)
        uni.showToast({
          title: '报名成功',
          icon: 'success'
        })
      }
    }
  },
  watch: {},

  // 页面周期函数--监听页面加载
  async onLoad(option) {
    console.log(option)
    this.Data = Store.state.showdata
    this.PositionName = option.PositionName
    console.log(this.Data)
  },
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
  .view{
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

    /* 内容 */
    .content{
      overflow: scroll;
      display: flex;
      flex-direction: column;
      .title{
        border-radius: 20px;
        border: #c4c4c4 1px solid;
        padding: 10px;
        display: flex;
        width: 90%;
        margin: 5px auto;
        flex-direction: column;
        .title-text{
          display: flex;
          align-items: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 10px;
         .icon{
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
          .text{
            margin-left: 10px;
            font-size: 10px;
            color: #c4c4c4;
          }
        }
      }
      .company{
        border-radius: 10px;
        border: #c4c4c4 1px solid;
        padding: 10px;
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 5px auto;
        .company-info{
          display: flex;  
        }
      }
      /* 详情 */
      .detail{
        border-radius: 10px;
        border: #c4c4c4 1px solid;
        padding: 10px;
      }
    }
    /* 底部栏 */
    .bottomTab{
      background-color: #f1f1f1;
      z-index: 999;
      width: 100%;
      position: fixed;
      bottom: 0;
      .bottomTab-btn{
        float: right;
        background-color: #3af250;
        width: 150px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
</style>