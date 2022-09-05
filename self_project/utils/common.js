const res = {
  series: [
    {
      name: "跨全端图表",
      textSize: 25,
      data: undefined,
      detail: {
        num: 0.0,
        date: undefined,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    },
    {
      name: "微信小程序",
      textSize: 20,
      data: undefined,
      detail: {
        num: 0.0,
        date: undefined,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    },
    {
      name: "支付宝小程序",
      textSize: 20,
      data: undefined,
      detail: {
        num: 0.0,
        date: undefined,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    },
    {
      name: "百度小程序",
      textSize: 20,
      data: undefined,
      detail: {
        num: 0.0,
        date: undefined,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    },
    {
      name: "QQ小程序",
      textSize: 20,
      data: undefined,
      detail: {
        num: 0.0,
        date: undefined,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    },
    {
      name: "头条小程序",
      textSize: 20,
      data: undefined,
      detail: {
        num: 0.0,
        date: undefined,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    },
    {
      name: "抖音小程序",
      textSize: 20,
      data: undefined,
      detail: {
        num: 0.0,
        date: undefined,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    },
    {
      name: "360小程序",
      textSize: 20,
      data: undefined,
      detail: {
        num: 0.0,
        date: undefined,
        checkedNum: 0,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    },
    {
      name: "跨全端",
      textSize: 10,
      data: undefined,
      detail: {
        num: 0.0,
        checkedNum: 0,
        date: undefined,
        items: [
          {value: "empty", name: "无详细进度", checked: false}
        ]
      }
    }
  ]
}

function getData() {
  return res;
}

function getDetail(index) {
  return res.series[index];
}

module.exports = {
  getData: getData,
  getDetail: getDetail
}