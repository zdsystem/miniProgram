// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus:[
      { key: 'tuijian', name: '推荐', type: 'T1348647909107'},
      { key: 'bendi', name: 'NBA', type:'T1348649145984'},
      { key: 'redian', name: 'CBA', type:'T1348649475931'},
      { key: 'shipin', name: '视频', type:'T1348649580692'},
      { key: 'xinwen', name: '要闻', type:'T1467284926140'},
      { key: 'kexue', name: '科学', type:'T1348649654285' },
      { key: 'tiyu', name: '体育', type:'T1348654225495'}
    ],
    height:1000,
    current:'tuijian',
    page:1,
    news:[],
    typeid:'T1348647909107'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  swicher(e) {
    var k = e.target.dataset.key
    this.setData({current:k})
    var t = e.target.dataset.type
    this.setData({typeid:t})
    console.log(this)
  },
  change(e) {
    // wx.getStorageInfo({
    //   success: function (res) {
    //     console.log(res.keys)
    //   }
    // })
    var that = this;
    this.setData({current:e.detail.currentItemId})
    var i = e.detail.current;
    var changeX = this.data.menus[i].type
    console.log(changeX);
    var start = (this.data.page - 1) * 10;
    var end = start + 10;
    var url = 'http://c.m.163.com/nc/article/headline/'+changeX+'/' + start + '-' + end + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstor';
    wx.request({
      url: url,
      success: function (res) {
        that.setData({ news: res.data[changeX] })
        wx.setStorage({
          key: url,
          data: url
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        var h = res.windowHeight*2-90-2;
        that.setData({height:h});
      },
    })
    var start = (this.data.page - 1) * 10;
    var end = start + 10;
    var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/' + start + '-' + end + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstor';
    wx.request({
      url: url,
      success: function (res) {
        that.setData({ news: res.data.T1348647853363 })
        that.setData({ page: that.data.page + 1 })
      }
    })
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
    wx.showNavigationBarLoading()
    this.data.news=[];
    var that = this;
    var start = (this.data.page) * 10;
    var end = start + 10;
    var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/' + start + '-' + end + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstor';

    wx.request({
      url: url,
      success: function (res) {
      var news = res.data.T1348647853363;
        that.setData({ page: that.data.page + 1 })
        that.setData({ news: news });
      }
    })
    wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  bottom: function () {
    var that = this;
    var start = (this.data.page - 1) * 10;
    var end = start + 10;
    var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/' + start + '-' + end + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstor';

    wx.request({
      url: url,
      success: function (res) {
        console.log(res.data);
        var news = that.data.news;
        var rs = news.concat(res.data.T1348647853363);
        that.setData({ news: rs });
        that.setData({ page: that.data.page + 1 })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
