<template>
  <div style="background-color: #f4f4f4;min-height: 100vh;" :class="[isWhite? 'day':'night', 'box']" ref="box">
    <top-bar v-if="show" :topic-white="isWhite"></top-bar>
    <div class="changeTopic">
      <!-- 主题更改按钮 -->
      <el-button style="margin-right: 40px;" type="el-icon-search" icon="el-icon-moon" circle @click="changeTopic"></el-button>
    </div>
    <main v-if="show" :class="[isWhite? 'day':'night', 'main']" ref="main">
      <nuxt v-if="show" ref="nuxt" />
    </main>
    <back-top></back-top>
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
        // 月亮点击切换成太阳
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
.changeTopic {
  position: fixed;
  top: 5px;
  right: 20px;
  background: none;
  z-index: 99999;
}
</style>
