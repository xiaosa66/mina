// pages/cart/goodsList.js
// pages/zhishi/index.js
var base64 = require("../../images/base64");
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

    /**
     * 页面的初始数据
     */

    data: {
        tabs: ["分类一", "分类一", "分类一", "分类一"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        goodInfoArray: [
            {
                price: 100,
                title: 'MacBook Pro 13(2017)',
                location: '北京 朝阳',
                imgUrl: '/images/swiper/advertise.png',
                time: '2018/3/1',
                ownerName: '六潇洒',
                ownerAvatar: '/images/defaultFace.png'
            },{
                price: 100,
                title: 'MacBook Pro 13(2017)',
                location: '北京 朝阳',
                imgUrl: '/images/swiper/advertise.png',
                time: '2018/3/1',
                ownerName: '六潇洒',
                ownerAvatar: '/images/defaultFace.png'
            },{
                price: 100,
                title: 'MacBook Pro 13(2017)',
                location: '北京 朝阳',
                imgUrl: '/images/swiper/advertise.png',
                time: '2018/3/1',
                ownerName: '六潇洒',
                ownerAvatar: '/images/defaultFace.png'
            }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            icon20: base64.icon20,
            icon60: base64.icon60
        });

        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
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
