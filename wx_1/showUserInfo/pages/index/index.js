// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    info: null,
    src: "/image/defaultImage.png",
    name: "Hello World"
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
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
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
    
  },

  getMyInfo: function () {
    wx.getUserProfile({
      desc: '获取用户信息',
      success:(res) => {
        let userInfo = res.userInfo
        console.log(userInfo)
        this.setData ({
          hasUserInfo: true,    //是否已获取用户信息
          info: userInfo,           //保存用户信息
          src: userInfo.avatarUrl,  //更新用户头像
          name: userInfo.nickName   //更新用户昵称
        })
      }
    })
  },
})