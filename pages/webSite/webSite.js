// pages/webSite/webSite.js
Page({
  data: {
    item1:[
      {title: "浙江工业大学", value: "学校官网", label: "https://www.zjut.edu.cn/"},
      {title: "工大校历",value: "学年计划",label:"https://www.zjut.edu.cn/"},
 ], 

      curNav: 1,
      curIndex: 0,
    item2:[
      {title:"浙江工业大学图书馆", value:"学校图书馆", label:"http://www.lib.zjut.edu.cn/" },
      { title:"正方教务系统", value:"课程相关" ,label:"http://www.gdjw.edu.cn/"},
      {title:"网络教学平台", value:"学习通网页版" ,label:"http://zjut.fanya.chaoxing.com/"},
      {title:"在线听课平台", value:"线上听课", label:"http://eclass.zjut.edu.cn/"},],

    item3:[
      {title:"网上办事大厅", value:"常用生活服务", label:"http://ehall.zjut.edu.cn/"},
      { title:"浙江工业大学邮箱" ,value:"学术行政沟通", label:"http://mail.zjut.edu.cn/"},
      {title:"毕业生就业信息网", value:"职业发展", label:"http://zjut.jysd.com/"},
      {title:"校园地图服务系统", value:"校园风貌", label:"http://map.zjut.edu.cn/",},],
    
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

  //长按复制函数
  copyText: function(event){
    //获取data-number属性的值，即要复制的文本。
    const textToCopy = event.currentTarget.dataset.label;
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