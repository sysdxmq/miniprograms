// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    nickName: "未登入",
    src: "/images/index.png",
    res: {
      series: [
        {
          name: "C",
          num: 0.0,
          textSize: "25",
          data: undefined,
          date: undefined
        }
      ]
    },
    studying: []
  },

  getMyInfo: function () {
    wx.getUserProfile({
      desc: '获取用户信息',
      success:(res) => {
        let userInfo = res.userInfo
        this.setData ({
          src: userInfo.avatarUrl,
          nickName: userInfo.nickName,
          isLogin: true
        })
      }
    })
    this.getMyFavorites();
  },

  getMyFavorites:function() {
    let info = wx.getStorageInfoSync();
    let keys = info.keys;
    let num = keys.length;    
    if (keys[num-1] == "logs") {
      --num;  // 获取到的信息中最后一条可能为log，此时要删去
    }

    let myList = [];
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i]);
      myList.push(obj);
    }
    this.setData({
      newsList: myList,
      num: num
    })
  },

  toTop: function() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 400
    })
  },

  goToDetail: function(e) {
    let index = e.target.id;
    wx.navigateTo({
      url: '../to_detail/to_detail?index=' + index
    })
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // console.log('onShow');
    if (this.data.isLogin) {
      this.getMyFavorites();
    }
    
    let res = wx.getStorageSync('res');
    let studying = wx.getStorageSync('studying');
    this.setData({
      res,
      studying
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log('onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // console.log('onUnload');
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