<template>
  <div id="ft" :class="[isWhite ? 'day' : 'night', 'box']" ref="box">
    <top-bar v-if="show" :topic-white="isWhite"></top-bar>
    <main v-if="show" :class="[isWhite ? 'day' : 'night', 'main']" ref="main">
      <nuxt v-if="show" ref="nuxt" />
    </main>
    <el-backtop :bottom="80"></el-backtop>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      white: '',
      show: true
    }
  },
  created() {
    if (process.client) {
      this.white = localStorage.getItem('isWhite')
      console.log(this.white);
      console.log('is', this.isWhite);
    }
  },
  computed: {
    ...mapState([
      'isWhite'
    ]),
  },
  methods: {
    ...mapMutations(["changeTopicFn"]),
    changeTopic() {
      if (this.white == true) {
        // 白色点击切换成黑色
        localStorage.removeItem('isWhite')
        localStorage.setItem("isWhite", false)
        this.white = false
        this.changeTopicFn()
      } else {
        localStorage.removeItem('isWhite')
        localStorage.setItem("isWhite", true)
        this.white = true
        this.changeTopicFn()
      }
    }
  }
}
</script>
<style>
#ft {
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>