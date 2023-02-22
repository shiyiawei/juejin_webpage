<template>
  <div class="about-author shadow" v-if="info">
    <div :class="[isWhite? 'topBarDay':'topBarNight', 'about-author__main']">
      <nuxt-link :to="'/user/'+info.attributes.author.data.id" class="author__info-block" target="_blank">
        <div class="author__avatar">
          <user-avatar :to="'/user/'+info.attributes.author.data.avater" :round="true"></user-avatar>
        </div>
        <div class="author__info">
          <div class="author__username">
            {{ info.attributes.author.data.attributes.user_name }}
            <level :level="info.attributes.author.data.attributes.level"></level>
          </div>
          <div class="author__job ellipsis">
            {{ info.attributes.author.data.attributes.job_title }}
            {{ info.attributes.author.data.attributes.job_title && info.attributes.author.data.attributes.company ? '@' : '' }}
            {{ info.attributes.author.data.attributes.company }}
          </div>
        </div>
      </nuxt-link>
      <div class="follow">
        <div class="following">
          <el-button type="primary">关注</el-button>
        </div>
        <div class="chatting">
          <el-button type="primary" plain>私信</el-button>
        </div>
      </div>
          
      <div :class="[isWhite? 'topBarDay':'topBarNight', 'author__meta']">
        <div class="honor-item">
          <img class="honor-item__icon shadow" src="~/assets/images/honor-4.svg" />
          <span class="honor-item__title">获得点赞 {{ info.attributes.author.data.attributes.got_digg_count }}</span>
        </div>
        <div class="honor-item">
          <img class="honor-item__icon shadow" src="~/assets/images/honor-5.svg" />
          <span class="honor-item__title">文章被阅读 {{ info.attributes.author.data.attributes.got_view_count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['isWhite'])
  },

  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang='scss' scoped>
.follow{
  height: 60px;
  display: flex;
  border-bottom: 1px solid rgb(136, 136, 136);
  .following{
    width: 70px;
    margin: auto;
  }
  .chatting{
    width: 70px;
    margin: auto;
  }
}
.about-author{
  background: #fff;
  border-radius: 2px;
  height: 210px;
  .about-author__main{
    padding: 15px;
    height: 210px;
  }

  .author__meta{
    margin-top: 15px;
    height: 60px ;

    .honor-item{
      display: flex;
      align-items: center;
      margin-left: 40px;
      margin-top: 3px;
      height: 20px;

      &:not(:last-child){
        margin-bottom: 10px;
      }

      .honor-item__icon{
        width: 25px;
        height: 25px;
        margin-right: 15px;
        border-radius: 50%;
      }

      .honor-item__title{
        font-size: 12px;
        color: #000;
      }
    }
  }

  .author__info-block{
    border-top: 10px;
    height: 50px;
    display: flex;
    cursor: pointer;

    .author__avatar{
      flex: 0 0 auto;
      width: 50px;
      height: 50px;
      border-top: 10px;
      margin-right: 12px;
    }

    .author__info{
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      line-height: 1.2;
      overflow: hidden;

      .author__username{
        font-weight: bold;
        fon-size: 16px;
      }

      .author__job{
        font-size: 15px;
        color: #909090;
      }
    }
  }
}
</style>
