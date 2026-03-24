Page({
  data: {
    blindBox: {
      id: 1,
      title: "限量款手办盲盒",
      price: 88,
      image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=limited%20edition%20figure%20blind%20box%2C%20collectible%2C%20colorful%2C%20high%20quality&image_size=square",
      description: "内含随机手办，数量有限，全新未拆封，支持验货",
      seller: "小明"
    }
  },
  onLoad(options) {
    // 获取传递的id参数
    const id = options.id
    console.log('盲盒ID:', id)
    // 这里可以根据id从服务器获取数据
  },
  contactSeller() {
    // 联系卖家功能
    wx.showModal({
      title: '联系卖家',
      content: '是否通过微信联系卖家？',
      success(res) {
        if (res.confirm) {
          console.log('用户确认联系卖家')
          // 这里可以实现跳转到微信聊天界面
        }
      }
    })
  }
})