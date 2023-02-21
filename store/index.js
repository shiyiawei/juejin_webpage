export const state = () => ({
  isTopbarBlock: true, // 顶部栏是否显示
  isWhite: true, // 是否为白天主题
})

export const mutations = {
  UPDATE_TOPBAR_BLOCK(state, payload){
    if (state.isTopbarBlock !== payload) {
      state.isTopbarBlock = payload
    }
  },
  changeTopicFn(state) {
    if (state.isWhite === true) {
      // 主题色转换
      state.isWhite = false
    } else {
      state.isWhite = true
    }
    console.log(state.isWhite);
  }
}
