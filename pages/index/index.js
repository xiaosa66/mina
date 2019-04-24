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
      { imgUrl: '../../images/icon/jie.png',title:"课堂实践",url:'/pages/mall/goodsList'},
      { imgUrl: '../../images/icon/huo.png',title:"周边市集",url:'/pages/mall/list'},
    ],
  },




  getJobList(){
    Router.getLobList().then((resp) => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
    // this.getJobList();
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
