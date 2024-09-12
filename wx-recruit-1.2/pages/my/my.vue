<template>
  <div class="my">
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
						<p class="nav-name">我的</p>
					</view>
			</u-navbar>
		</view>
    <!-- 用户信息 -->
    <view class="user">
      <img class="user-img" src="@/static/icon/logo.png"/>
      <li class="user-text">
        <p class="name">张三</p>
        <p class="school">南昌航空大学</p>
      </li>
    </view>
    <!-- 功能模块 -->
    <view class="module" >
      <li class="item" @click="goApply">
        <p class="num">{{Data.length}}</p>
        <p class="text">全部报名</p>
      </li>
      <li class="item" @click="goWaitlist">
        <p class="num">{{Data.length}}</p>
        <p class="text">待录取</p>
      </li>
      <li class="item">
        <p class="num">0</p>
        <p class="text">已录取</p>
      </li>
    </view>
    <!-- 我的资产 -->
    <view class="asset">
      <li class="top-item">
        <p class="myrmb">我的资产</p>
        <p class="text">去提现 ></p>
      </li>
      <view class="asset-num-box">
        <li class="item">
          <p class="num">0.00</p>
          <p class="text">工资余额 (元)</p>
        </li>
        <li class="cent"></li>
        <li class="item">
          <p class="num">0.00</p>
          <p class="text">红包余额 (元)</p>
        </li>
      </view>
    </view>
    <!-- 资质说明 -->
    <view class="qualify">
      <li class="item">
        <img src="@/static/icon/RMB.svg" class="icon" mode="widthFix"/>
        <p class="title">资金防范</p>
        <p class="text">交易规范不被骗</p>
      </li>
      <li class="item">
        <img src="@/static/icon/safety.svg" class="icon" mode="widthFix"/>
        <p class="title">安全规范</p>
        <p class="text">参加面试需谨慎</p>
      </li>
      <li class="item">
        <img src="@/static/icon/privacy.svg" class="icon" mode="widthFix"/>
        <p class="title">隐私规范</p>
        <p class="text">个人信息不外传</p>
      </li>
      <li class="item">
        <img src="@/static/icon/businesslicense.svg" class="icon" mode="widthFix"/>
        <p class="title">营业执照</p>
        <p class="text">人力资源许可证</p>
      </li>
    </view>
  </div>
</template>

<script>
import Store from '@/store/HomeStore';
export default {
  components: {},
  data() {
    return {
      Data: null,
    }
  },
  computed: {},
  methods: {
    goApply(){
      uni.navigateTo({
        url: '/pages/registerdata/registerdata'
      })
    },
    goWaitlist(){
      uni.navigateTo({
        url: '/pages/Waitlist/Waitlist'
      })
    }
  },
  watch: {},
  created (){
    this.Data = Store.state.registerdata
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
  .my{
    display: flex;
    flex-direction: column;
    .u-nav-slot{
      display: flex;
      align-items: center;
      .nav-name{
        font-size: 15px;
        font-weight: 600;
        color: aliceblue;
      }
    }
    // 用户信息
    .user{
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      .user-img{
        margin: 0 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      .user-text{
        display: flex;
        flex-direction: column;
        .name{
          font-size: 18px;
        }
        .school{
          font-size: 12px;
          color: #999;
        }
      }
    }
    // 功能模块
    .module{
      display: flex;
      width: 95%;
      margin: 5px auto 0 auto;
      padding: 5px;
      align-items: center;
      justify-content: space-around;
      //阴影
      box-shadow: 0 0 5px #d3d3d3;
      .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
    }
    // 我的资产
    .asset{
      display: flex;
      padding-bottom: 40px;
      border-radius: 20px;
      border-bottom:  1px solid #cfcfcf;
      flex-direction: column;
      .top-item{
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .myrmb{
          font-size: 14px;
          font-weight: 600;
        }
        .text{
            font-size: 12px;
            color: #999;
            margin-top: 5px;
          }
      }
      .asset-num-box{
        display: flex;
        width: 95%;
        margin: 5px auto 0 auto;
        padding: 5px;
        align-items: center;
        justify-content: space-around;
        .item{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          .num{
            font-size: 18px;
            font-weight: 600;
          }
          .text{
            font-size: 12px;
            color: #999;
            margin-top: 5px;
          }
        }
        .cent{
          width: 1px;
          height: 40px;
          background-color: #cfcfcf;
          margin: auto 0;
        }
      }
    }
    // app详情
    .qualify{
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        .icon{
          width: 20px;
          height: 20px;
        }
        .title{
          font-size: 10px;
          font-weight: 600;
          margin: 5px 0 ;
          color: #b3b3b3;
        }
        .text{
          font-size: 7px;
          color: #e7e7e7;
        }
      }
    }
  }
</style>