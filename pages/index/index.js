// pages/index/index.js
import Agent from "../../utils/agent";
import Router from "../../utils/router";
var base64 = require("../../images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    imgUrls: [
      '../../images/swiper/advertise.png',
      '../../images/swiper/class.png',
      '../../images/swiper/advertise.png',
      '../../images/swiper/class.png',
    ],
    // grids: [0, 1, 2,3],
    grids: [
      { imgUrl: '../../images/icon/chuan.png',title:"知识普及",url:'/pages/article/list'},
      { imgUrl: '../../images/icon/dao.png',title:"互动社区",url:'/pages/forum/index'},
      { imgUrl: '../../images/icon/jie.png', title: "课堂实践", url:'/pages/forum/index'},
      { imgUrl: '../../images/icon/huo.png',title:"周边市集",url:'/pages/mall/list'},
    ],
    articleArray: [

      { "id": "从小到大按 12345 数,递增", "coverImg": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557159718479&di=f7f90e93d4b62b61ca36ca813b4116cd&imgtype=0&src=http%3A%2F%2Fn1.cmsfile.pg0.cn%2Fgroup4%2FM00%2F04%2F6C%2FCgoOFVn2jEuAaYXfAAClbs4Hbn4874.jpg", "title": "文章标题", "time": "写作时间  比如 前天 昨天 2019-08-07 等 任选即可","author":"作者名称", "desc": "文章的缩略描述","content":"在这里填写文章内容"},
      { "id": "从小到大按 12345 数,递增", "coverImg": "文章的图片地址(可不填)", "title": "文章标题", "time": "写作时间  比如 前天 昨天 2019-08-07 等 任选即可","author":"作者名称", "desc": "文章的缩略描述","content":"在这里填写文章内容"},
      { "id": "从小到大按 12345 数,递增", "coverImg": "文章的图片地址(可不填)", "title": "文章标题", "time": "写作时间  比如 前天 昨天 2019-08-07 等 任选即可","author":"作者名称", "desc": "文章的缩略描述","content":"在这里填写文章内容"},
      { "id": "从小到大按 12345 数,递增", "coverImg": "文章的图片地址(可不填)", "title": "文章标题", "time": "写作时间  比如 前天 昨天 2019-08-07 等 任选即可","author":"作者名称", "desc": "文章的缩略描述","content":"在这里填写文章内容"},
      { "id": "从小到大按 12345 数,递增", "coverImg": "文章的图片地址(可不填)", "title": "文章标题", "time": "写作时间  比如 前天 昨天 2019-08-07 等 任选即可","author":"作者名称", "desc": "文章的缩略描述","content":"在这里填写文章内容"},
      { "id": "从小到大按 12345 数,递增", "coverImg": "文章的图片地址(可不填)", "title": "文章标题", "time": "写作时间  比如 前天 昨天 2019-08-07 等 任选即可","author":"作者名称", "desc": "文章的缩略描述","content":"在这里填写文章内容"},

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
