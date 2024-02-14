// pages/group/group.js
Page({
      //左侧导航栏数据。
  data: {
    navItems: [
      { name: '求职' },
      { name: '爱好' },
      { name: '问答' },
      { name: '学习' },
      { name: '老乡' },
      { name: '其他' }
    ],
        selectMenuID:0,
    //主页面数据

    conItemsQQ:[
      {number:"721519763", desc:"学生邮箱开通申请，及微信小程序“微精弘”问题反馈群"},
      {number:"610487247", desc:"朝晖校区电信网络维护群"},],

    conItemsWX:[
      {number:"暂无", desc:"敬请期待"}
    ],
    
  },

  //跳转页面函数
  navToPage: function(event) {
    /*event是一个事件对象，它包含了触发事件的相关信息，包括用户点击的元素、事件类型等。
     currentTarget是事件对象中的一个属性，它表示当前事件所绑定的元素。在这个上下文中，currentTarget 代表被点击的导航项元素。     
     dataset是一个包含元素自定义属性的对象 
    */
     const path = event.currentTarget.dataset.path; 
     let id = event.currentTarget.dataset.id;
     let index = parseInt(event.currentTarget.dataset.index);
     wx.navigateTo({
       url: path,
     });
     this.setData({//跳转后更改把curNav的值更改为当前项的id
       curNav: id,
       curIndex: index,
     });
   },
   switchToRight: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      selectMenuID: index
    });},
  //长按复制函数
  copyText: function(event){
    //获取data-number属性的值，即要复制的文本。
    const textToCopy = event.currentTarget.dataset.number;
    //调用微信小程序的API复制文本到剪贴板
    wx.setClipboardData({
      data: String(textToCopy),
      success: function () {
        //复制成功的回调函数
        wx.showToast({
          title:'复制成功',
        });
      },
      fail: function (res) {
        //复制失败的回调函数
        console.error('复制失败，错误信息：', res.errMsg), // 打印错误消息
        wx.showToast({
          title: '复制失败',
          icon:'none',
        });
      },
    });
  },
  })