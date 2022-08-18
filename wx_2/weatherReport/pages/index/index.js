// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:["山东省", "青岛市", "崂山区"],
    now: {
      temp: 0,
      text:"未知",
      icon:"999",
      humidity:0,
      pressure:0,
      vis:0,
      windDir:0,
      windSpeed:0,
      windScale:0
    }
  },

  getWeather: function(e) {
    var that = this;
    var utils = require("../../utils/util.js");
    var local = that.data.region[1];
    var localID = utils.getLocationID(local);
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now',
      data:{
        location: localID,
        key: "472080fd72cd43b2b747d0e589c4aef3"
      },
      success:function(res){
        console.log(res);
        that.setData({
          now: res.data.now
        })
      }
    })
  },

  regionChange: function(e) {
    this.setData({region: e.detail.value});
    this.getWeather();
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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
    
  }
})