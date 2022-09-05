// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res: undefined,
    index: -1,
    isStuding: false,
    name: "",
    num: 0.0,
    checkedNum: 0,
    date: undefined,
    items: [
      {value: "empty-placehoder", name: "无详细进度", checked: false}
    ],
    inputValue: ""
  },

  checkboxChange: function(e) {
    const items = this.data.items
    const values = e.detail.value
    const checkedNum = values.length
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    let num = (100 * checkedNum / items.length).toFixed(2)
    let date = {year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0};
    if (num >= 100) {
      let myDate = new Date();
      date.year = myDate.getFullYear();
      date.month = myDate.getMonth()+1;
      date.day = myDate.getDate();
      date.hour = myDate.getHours();
      date.minute = myDate.getMinutes();
      date.second = myDate.getSeconds();
      this.setData({date});
    }
    this.setData({
      checkedNum,
      items,
      num,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log("onLoad")
    let index = options.index;
    let res = wx.getStorageSync('res')
    let studying = wx.getStorageSync('studying')
    let isStuding = false;
    if (studying !== "") {
      for (let i = 0, len = studying.length; i < len; ++i) {
        if (studying[i] === index) {
          isStuding = true;
          break;
        }
      }
    }
    let data = res.series[index]
    this.setData({
      res,
      index,
      name: data.name,
      num: data.detail.num,
      checkedNum: data.detail.checkedNum,
      items: data.detail.items,
      isStuding
    });
  },

  addDetail: function(e) {
    if (e.detail.value.length === 0)
      return
    for (let i = 0, len = this.data.items.length; i < len; ++i) {
      if (this.data.items[i].name === e.detail.value) {
        wx.showToast({
          title: "内容已存在",
          icon: "error"
        })
        this.setData({ inputValue: "" })
        return
      }
    }
    let items = this.data.items;
    let item = {
      value: e.detail.value, 
      name: e.detail.value, 
      checked: false
    }
    items.push(item);
    this.setData({
      items,
      inputValue: ""
    })    
  },

  showModal: function() {
    wx.showModal({
      title: '删除',
      content: '确认删除？',
      cancelColor: 'cancelColor',
      success(res) {
        if (res.confirm) {
          return true;
        } else if (res.cancel) {
          return false;
        }
      }
    });
  },

  deleteItem: function(e) {
    if (this.data.items.length === 1) {
      wx.showToast({
        title: "至少保留一个",
        icon: "error",
      })
      return
    }
    let del = true;
    if (del) {
      let items = this.data.items;
      items.splice(e.target.id, 1);
      this.setData({items: items});
      wx.showToast({
        title: '删除成功',
        icon: 'success',
      })
    }
  },

  addToStudy:function(e) {
    let isStudying = wx.getStorageSync('studying');
    if (isStudying === "") {
      isStudying = new Array();
    }
    if (this.data.isStuding) {
      for (let i = 0, len = isStudying.length; i < len; ++i) {
        if (isStudying[i] === this.data.index) {
          isStudying.splice(i, 1);
          break;
        }
      }
      this.setData({isStuding: false});
      wx.showToast({
        title: '取消学习',
        icon: 'none'
      })
    } else {
      isStudying.push(this.data.index);
      this.setData({isStuding: true});
      wx.showToast({
        title: '加入学习',
        icon: 'none'
      })
    }
    wx.setStorageSync('studying', isStudying);
  },

  deleteDetail: function(e) {
    let res = this.data.res;
    res.series.splice(this.data.index, 1);
    wx.setStorageSync('res', res);
    wx.navigateBack({
      delta: 2,
      success: function() {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // console.log("onUnload")
    let res = this.data.res;
    let detail = {
      num: this.data.num,
      checkedNum: this.data.checkedNum,
      items: this.data.items,
      date: this.data.date
    }
    res.series[this.data.index].detail = detail;
    wx.setStorageSync('res', res);
    wx.navigateBack({
      delta: 2,
    })
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