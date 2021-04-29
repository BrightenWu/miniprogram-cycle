// pages/month_travel/month_travel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    months: [
      { month: 'Jan', url: 'http://120.78.139.131:12121/Video/Yuan Ri.mp4', title: '中国唱诗班《元日》' },
      { month: 'Feb', url: 'http://120.78.139.131:12121/Video/Your Name.mp4', title: '你的名字《前前前世》' },
      { month: 'Mar', url: 'http://120.78.139.131:12121/Video/DARLING IN THE FRANXX.mp4', title: 'DARLING IN THE FRANXX' },
      { month: 'Apr', url: 'http://120.78.139.131:12121/Video/Your Lie in April.mp4', title: '四月是你的谎言《光るなら》' },
      { month: 'May', url: 'http://120.78.139.131:12121/Video/Lotus Lantern.mp4', title: '宝莲灯《想你的365天》' },
      { month: 'Jun', url: 'http://120.78.139.131:12121/Video/Eat Me.mp4', title: '红小豆《吃掉我》' },
      { month: 'Jul', url: 'http://120.78.139.131:12121/Video/My Hero Academy.mp4', title: '我的英雄学院' },
      { month: 'Aug', url: 'http://120.78.139.131:12121/Video/Anohana.mp4', title: '我们仍未知道那天所看见的花的名字。' },
      { month: 'Sep', url: 'http://120.78.139.131:12121/Video/Only My Railgun.mp4', title: '某科学的超电磁炮《Only My Railgun》' },
      { month: 'Oct', url: 'http://120.78.139.131:12121/Video/That Rabbit.mp4', title: '那年那兔那些事' },
      { month: 'Nov', url: 'http://120.78.139.131:12121/Video/Big Fish & Begonia.mp4', title: '大鱼海棠《大鱼》' },
      { month: 'Dec', url: 'http://120.78.139.131:12121/Video/Arthur Christmas.mp4', title: '亚瑟圣诞' }],
    tabCur: 0,
    titleScrollLeft: 0,
    videoScrollLeft: 0,
    videoScrollX: true,
    hitokotoText: "我们把世界看错，反说它欺骗了我们。",
    hitokotoWorks: "飞鸟集",
    hitokotoAuthor: "泰戈尔",
    timer: 0
  },

  /**
   * 
   * 月份跳转函数
   */
  tabSelect(e) {
    var screenWidth = getApp().globalData.screenWidth

    this.setData({
      tabCur: e.currentTarget.dataset.id,
      titleScrollLeft: (e.currentTarget.dataset.id - 1) * screenWidth / 7,
      videoScrollLeft: e.currentTarget.dataset.id * screenWidth,
      videoScrollX: true
    })
  },

  /**
   * 
   * 视频滚动停止函数，微信binddragend事件无效，无法使用
   */
  scrollEnd(e) {
    this.setData({ videoScrollX: false })
    console.log("scrollEnd:", e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var updateHitokoto = (that) => {
      wx.request({
        url: 'https://v1.hitokoto.cn/?c=a&c=b&c=d&c=i&c=k&c=f&c=h', //一言接口
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          that.setData({
            hitokotoText: res.data.hitokoto,
            hitokotoWorks: res.data.from,
            hitokotoAuthor: res.data.from_who
          })

          //console.log(res.data)
        }
      })
    }

    this.setData({ timer: setInterval(updateHitokoto, 8000, this) })
    console.log("timer:", this.data.timer)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.data.timer)
    console.log("onHide clear timer:", this.data.timer)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timer)
    console.log("onUnload clear timer:", this.data.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})