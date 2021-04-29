// app.js
App({
  onLaunch() {
    const that = this;

    wx.getSystemInfo({
      success(res) {
        console.log("screenWidth:", res.screenWidth)
        that.globalData.screenWidth = res.screenWidth
      }
    })
  },
  globalData: {
    screenWidth: 375  //!< px
  },
})
