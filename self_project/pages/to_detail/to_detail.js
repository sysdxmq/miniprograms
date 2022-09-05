// pages/to_detail/to_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    saying: "差之毫厘，谬以千里。",
    trans: "做任何事情，开始一定要认真地做好，如果做差了一丝一毫，结果会发现相差很远。",
    source: "宋·陆九渊"
  },

  goToDetail: function(index) {
    wx.navigateTo({
      url: '../detail/detail?index=' + index
    })
  },

  getText: function() {
    let that = this
    wx.request({
      url: 'http://api.tianapi.com/lzmy/index',
      data: {key: '504dd5aebfe1972ebdd1bb188fc92330'},
      success: function(info) {
        that.setData({
          saying: info.data.newslist[0].saying,
          trans: info.data.newslist[0].transl,
          source: info.data.newslist[0].source
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let index = options.index;
    let that = this;
    this.getText();
    setTimeout(()=>{
      that.goToDetail(index)
    }, 2000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})