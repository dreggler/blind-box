Page({
  data: {
    title: '',
    price: '',
    description: '',
    imageUrl: ''
  },
  onTitleInput(e) {
    this.setData({ title: e.detail.value })
  },
  onPriceInput(e) {
    this.setData({ price: e.detail.value })
  },
  onDescInput(e) {
    this.setData({ description: e.detail.value })
  },
  chooseImage() {
    // 选择图片
    wx.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({ imageUrl: res.tempFilePaths[0] })
        console.log('选择的图片:', res.tempFilePaths[0])
      }
    })
  },
  publish() {
    // 发布盲盒
    const { title, price, description, imageUrl } = this.data
    if (!title || !price || !description) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    wx.showToast({ title: '发布成功', icon: 'success' })
    // 跳转到首页
    setTimeout(() => {
      wx.switchTab({ url: '/pages/index/index' })
    }, 1500)
  }
})