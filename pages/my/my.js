Page({
  data: {
    myBlindBoxes: [
      {
        id: 1,
        title: "限量款手办盲盒",
        price: 88,
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=limited%20edition%20figure%20blind%20box%2C%20collectible%2C%20colorful%2C%20high%20quality&image_size=square"
      }
    ],
    myFavorites: [
      {
        id: 2,
        title: "美妆盲盒",
        price: 68,
        image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beauty%20blind%20box%2C%20cosmetics%2C%20makeup%20products%2C%20gift%20box&image_size=square"
      }
    ]
  },
  onLoad() {
    // 页面加载时执行
  }
})