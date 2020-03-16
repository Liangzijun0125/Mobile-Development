//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg: [
      { src:"https://tse1-mm.cn.bing.net/th/id/OIP.V8N3A8iLgRsEGt8U3xO1jwHaFG?w=230&h=160&c=7&o=5&dpr=1.5&pid=1.7"},
      { src:"https://n.sinaimg.cn/collect/crawl/157/w550h407/20180417/bneJ-fzihnen9462308.jpg"},
      { src:"https://p2.ifengimg.com/a/2017_26/30354f66230322d_size74_w600_h394.jpg"}
      ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    x:0,
    y:0,
    toView: 'green',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  tap: function (e) {
    this.setData({
      x: 30,
      y: 30
    });
  },
  onChange: function (e) {
    console.log(e.detail)
  },
  onScale: function (e) {
    console.log(e.detail)
  },
  scroll(e) {
    console.log(e)
  },
 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
