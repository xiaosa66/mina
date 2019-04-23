// pages/forum/detail.js
// pages/detail/detail.js
var app = getApp();
var utils = require('../../utils/util.js')
const API_URL = app.globalData.URL;
var vid = 0
Page({
    data: {
        auth: 0,
        view_id: 0,
        views: {
            username: '潇洒',
            content: '这里是内容',
            createTime: '昨天',
            avatarurl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2632691548,964849237&fm=27&gp=0.jpg',
            photoUrl: [],
        },
        l: 0,
        windowWidth: '',
        windowHeight: '',
        comments: [
            {
                "userName": "祝美华",
                "createTime": "2018/11/11",
                "content": "略略略略略略",
                "avatarurl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=180767159,197605453&fm=27&gp=0.jpg"
            }, {
                "userName": "祝美华",
                "createTime": "2018/11/11",
                "content": "略略略略略略",
                "avatarurl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=180767159,197605453&fm=27&gp=0.jpg"
            }, {
                "userName": "祝美华",
                "createTime": "2018/11/11",
                "content": "略略略略略略",
                "avatarurl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=180767159,197605453&fm=27&gp=0.jpg"
            }, {
                "userName": "祝美华",
                "createTime": "2018/11/11",
                "content": "略略略略略略",
                "avatarurl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=180767159,197605453&fm=27&gp=0.jpg"
            }, {
                "userName": "祝美华",
                "createTime": "2018/11/11",
                "content": "略略略略略略",
                "avatarurl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=180767159,197605453&fm=27&gp=0.jpg"
            },
        ],
        nsdata: true,
        isLoading: false,
        cfBg: false,
        content: '',
        content_push: '',
        isLoad: true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (params) {

        vid = params.id;

        that.umessage(params.id);
        wx.request({
            url: API_URL + 'view/detail.do',
            data: {viewId: params.id},
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': cookie
            },
            success: function (res) {
                var data = res.data.data;
                var photo = data.photoUrl;
                var ll = photo.length;
                var get_time = new Date(data.createTime);
                data.createTime = utils.formatTime(get_time);
                that.setData({
                    views: data,
                    view_id: params.id,
                    l: ll
                })
                wx.showLoading({
                    title: '加载中'
                })
            },
            complete: function () {
                setTimeout(function () {
                    wx.hideLoading()
                }, 1000)
                wx.hideNavigationBarLoading()
            }
        })
    },
    umessage: function (vid) {
        var that = this;
        var cookie = app.globalData.cookie;
        wx.request({
            url: API_URL + 'comment/list.do',
            data: {
                viewId: vid
            },
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': cookie
            },
            success: function (res) {
                console.log(res);
                var data = res.data.data;
                var msNum = data.length;
                var emojis = that.data.emojis;
                for (var i = 0; i < msNum; i++) {
                    var get_time = new Date(data[i].createTime);
                    data[i].createTime = utils.formatTime(get_time);
                    var tmp_content = data[i].content;
                    var len = tmp_content.length;
                    var tmp = "";
                    while (tmp_content.indexOf("0x1f") != -1) {
                        var index = tmp_content.indexOf("0x1f");
                        var k = tmp_content.substring(index, index + 7);
                        tmp += tmp_content.substring(0, index);
                        tmp_content = tmp_content.substring(index + 7, len);
                        for (var j = 0, length = emojis.length; j < length; j++) {
                            if (emojis[j].emoji == k) {
                                tmp += emojis[j].char;
                                break;
                            }
                        }
                    }
                    tmp += tmp_content;
                    data[i].content = tmp;
                }
                if (msNum == 0) {
                    that.setData({
                        nsdata: false,
                        comments: data
                    })
                } else {
                    that.setData({
                        comments: data,
                        view_id: vid
                    })
                }
            }
        })

    },
    reply(){
        let cfBg = !this.data.cfBg;
        this.setData({
            cfBg
        });
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function (e) {
        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth * 0.92
                })
            }
        })
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        var vid = this.data.view_id;
        console.log(vid);
        this.umessage(vid);
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
        return {
            title: '[我有一条秘密要告诉你~]',
            path: '/pages/detail/detail?id=' + this.data.view_id
        }
    },
    send: function () {
        var vid = this.data.view_id;
        var that = this;
        var cookie = app.globalData.cookie;
        var conArr = [];
        var userInfo = app.globalData.userInfo;
        //console.log(this.data.content);
        var content = this.data.content_push;
        if (content.length > 0) {
            setTimeout(function () {
                //console.log(content);
                wx.request({
                    url: API_URL + 'comment/insert.do',
                    data: {
                        content: content,
                        viewId: vid
                    },
                    method: 'POST',
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Cookie': cookie
                    },
                    success: function (res) {
                        console.log(res);
                        that.umessage(vid);
                        that.setData({
                            content: "",
                            content_push: "",
                            isShow: false,
                            cfBg: false
                        })
                        wx.showToast({
                            title: '发送成功',
                            icon: 'loading',
                            duration: 1000
                        })
                    }
                })
            }, 100)
        }
    },
    textAreaBlur: function (e) {
        this.setData({
            content: e.detail.value,
            content_push: e.detail.value
        })

    },

    textAreaFocus: function () {
        console.log('focus');
        this.setData({
            isShow: false,
            cfBg: false
        })
    },
    valueChange: function (e) {
        this.setData({
            content: e.detail.value,
            content_push: e.detail.value
        })
    },

    cemojiCfBg: function () {
        this.setData({
            isShow: false,
            cfBg: false
        })
    },
    emojiScroll: function (e) {

    },
    emojiChoose: function (e) {
        this.setData({
            content: this.data.content + e.currentTarget.dataset.emoji,
            content_push: this.data.content_push + e.currentTarget.dataset.oxf
        })
    },
    previewImage: function (e) {
        var current = e.target.dataset.src;
        var urlink = new Array(current);
        wx.previewImage({
            current: 'current',
            urls: urlink
        })
    },
    del: function (e) {
        var that = this;
        var userid = app.globalData.userId;
        console.log(userid);
        var user = e.currentTarget.dataset.id;
        var cooment_id = e.currentTarget.dataset.comment;
        var content = e.currentTarget.dataset.content;
        var cookie = app.globalData.cookie;
        if (userid == user) {
            wx.showActionSheet({
                itemList: ['删除', '复制'],
                success: function (res) {
                    if (res.tapIndex == 0) {
                        wx.request({
                            url: API_URL + 'comment/delete.do',
                            data: {
                                commentId: cooment_id
                            },
                            method: 'POST',
                            header: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Cookie': cookie
                            },
                            success: function (res) {
                                that.umessage(vid);
                                wx.showToast({
                                    title: '删除成功',
                                    icon: 'loading',
                                    duration: 1000
                                })
                            }
                        })
                    } else {
                        wx.setClipboardData({
                            data: content,
                            success: function (res) {
                                console.log('复制成功');
                            }
                        })
                    }
                }
            })
        } else {
            wx.showActionSheet({
                itemList: ['复制'],
                success: function (res) {
                    if (res.tapIndex == 0) {
                        wx.setClipboardData({
                            data: content,
                            success: function (res) {
                                console.log('复制成功');
                            }
                        })
                    }
                }
            })
        }

    }
})
