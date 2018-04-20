// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    this.setData({id:options.id})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    var that = this;
    var url = 'http://c.m.163.com/nc/article/' + this.data.id +'/full.html'
    wx.request({
      url: url,
      success(res) {
        var rs = res.data[that.data.id]
        var title = rs.title;
        var body = rs.body;   
        for (var i =0;i<rs.img.length;i++) {
          body = body.replace(rs.img[i].ref,'<img src="'+ rs.img[i].src +'" />')
          console.log(body)
          WxParse.wxParse('body', 'html', body, that, 5);
          that.setData({ title: title })
        }
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '加载中',
    })
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
    return;
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})