<template>
  <div :class="[isWhite? 'topBarDay':'topBarNight', 'artic-list']">
    <ul v-for="item in list" :key="item.article_id">
      <li class="artic-item--border">
        <artic-item :item.sync="item"></artic-item>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    hasDesc: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  created() {
    console.log('topicwhit', this.isWhite);
  },
  methods: {
  },
  computed: {
  ...mapState(['isWhite'])
  },
}
</script>

<style lang='scss' scoped>
.artic-list {
  background-color: #fff;

  .artic-item--border:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
}
</style>