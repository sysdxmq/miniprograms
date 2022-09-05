// pages/index/index.js
import uCharts from "../../components/u-charts/u-charts";
const common = require("../../utils/common");
var uChartsInstance = {};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cWidth: 750,
    cHeight: 500,
    pixelRatio: 2,
    res: undefined,
    inputValue: ""
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady :function() {
    var data = common.getData();
    wx.setStorageSync('res', data);
  },

  getServerData() {
    let res = wx.getStorageSync('res');
    this.setData({
      res: res
    });
    this.drawCharts();
  },

  drawCharts() {
    var id = "words"
    const query = wx.createSelectorQuery().in(this);
    query.select('#' + id).fields({ node: true, size: true }).exec(res => {
      if (res[0]) {
        const canvas = res[0].node;
        const ctx = canvas.getContext('2d');
        canvas.width = res[0].width * this.data.pixelRatio;
        canvas.height = res[0].height * this.data.pixelRatio;
        uChartsInstance[id] = new uCharts({
            type: "word",
            context: ctx,
            width: this.data.cWidth * this.data.pixelRatio,
            height: this.data.cHeight * this.data.pixelRatio,
            series: this.data.res.series,
            pixelRatio: this.data.pixelRatio,
            animation: true,
            background: "#FFFFFF",
            color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
            padding: undefined,
            extra: {
              word: {
                type: "normal",
                autoColors: false
              }
            }
          });
      }else{
        console.error("[uCharts]: 未获取到 context");
      }
    });
  },

  addWord: function(e) {
    var newWord = {
      name: e.detail.value,
      textSize: "25",
      data: undefined,
      detail: {
        num: 0.0,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    };
    this.data.res.series.push(newWord);
    this.setData({inputValue: ""});
    this.drawCharts();
  },

  goToDetail: function(e) {
    let index = uChartsInstance[e.target.id].getCurrentDataIndex(e);
    if (index === -1) return;
    wx.setStorageSync('res', this.data.res);
    wx.navigateTo({
      url: '../to_detail/to_detail?index=' + index
    })
  },

  goToDetail_fromAll: function(e) {
    let index = e.detail.value;
    wx.setStorageSync('res', this.data.res);
    wx.navigateTo({
      url: '../to_detail/to_detail?index=' + index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //这里的第一个 750 对应 css .charts 的 width
    const cWidth = 750 / 750 * wx.getSystemInfoSync().windowWidth;
    //这里的 500 对应 css .charts 的 height
    const cHeight = 500 / 750 * wx.getSystemInfoSync().windowWidth;
    const pixelRatio = wx.getSystemInfoSync().pixelRatio;
    this.setData({ cWidth, cHeight, pixelRatio });
    this.getServerData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})