export const state = () => ({
  isTopbarBlock: true, // 顶部栏隐藏
  isWhite: true, // 白色主题
})

export const mutations = {
  UPDATE_TOPBAR_BLOCK(state, payload){
    // 引用隐藏判断
    if (state.isTopbarBlock !== payload) {
      state.isTopbarBlock = payload
    }
  },
  changeTopicFn(state) {
    if (state.isWhite === true) {
      // 当前主题是白色则转为黑色
      state.isWhite = false
    } else {
      state.isWhite = true
    }
  }
}
