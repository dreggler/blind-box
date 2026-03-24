Page({
  data: {
    blindBoxes: [
      {
        id: 1,
        title: "限量款手办盲盒",
        price: 88,
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=limited%20edition%20figure%20blind%20box%2C%20collectible%2C%20colorful%2C%20high%20quality&image_size=square",
        description: "内含随机手办，数量有限"
      },
      {
        id: 2,
        title: "美妆盲盒",
        price: 68,
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beauty%20blind%20box%2C%20cosmetics%2C%20makeup%20products%2C%20gift%20box&image_size=square",
        description: "包含多种美妆产品"
      },
      {
        id: 3,
        title: "数码配件盲盒",
        price: 49,
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=digital%20accessories%20blind%20box%2C%20phone%20cases%2C%20cables%2C%20gadgets&image_size=square",
        description: "数码爱好者的必备"
      }
    ]
  },
  onLoad() {
    // 页面加载时执行
  },
  onSearchInput(e) {
    // 搜索输入处理
    console.log('搜索:', e.detail.value)
  },
  goToDetail(e) {
    // 跳转到详情页
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
})