<template>
    <div>
    <el-row type="flex" justify="space-between">
      <!-- 中间 -->
      <el-col :md="20">
        <div class="blog-center">
          <!-- 头部标签 -->
          <el-tabs v-model="activeName" @tab-click="handleClick" router>
            <el-tab-pane label="推荐"  index="/">
                 <!-- 文章列表 -->
                 <nuxt-child />
            </el-tab-pane>
            <el-tab-pane label="最新"  index="/newest">
                 <!-- 文章列表 -->
                 <nuxt-child />
            </el-tab-pane>
            <el-tab-pane label="热榜"  index="/hot">
                 <!-- 文章列表 -->
                 <nuxt-child />
            </el-tab-pane>
          </el-tabs>

        </div>
      </el-col>
      <!-- 右侧广告区 -->
      <el-col class="hidden-sm-and-down" :md="8">
        <!-- 广告页 -->
        <el-card class="right-card" shadow="hover" :body-style="{padding: '10px'}">
                  <img src="~/assets/images/shop1.png" >
        </el-card>
        <el-card class="right-card" shadow="hover" :body-style="{padding: '10px'}">
                  <img src="~/assets/images/shop2.png" >
        </el-card>
        <div class="right-card">
          <div :class="[isWhite? 'day':'night', 'author-block__title']">
            🎖️ 作者榜
          </div>
          <div v-for="item in list" :key="item.id">
            <div :class="[isWhite? 'day':'night', 'author-item']">
              <div class="author__avatar">
                <user-avatar :url="getUrl(item.attributes.avatar_large.data.attributes.url)" :round="true"></user-avatar>
              </div>
              <div class="author__info">
                <div :class="[isWhite? 'day':'night', 'author__name']">
                  {{ item.attributes.user_name }}
                  <level :level="item.attributes.level"></level>
                </div>
                <div class="ellipsis">
                  {{ item.attributes.job_title }}
                  {{ item.attributes.job_title && item.attributes.company ? '@' : '' }}
                  {{ item.attributes.company }}
                </div>
              </div>
            </div>
          </div>
          <nuxt-link to="/recommendation/authors/recommended">
            <div :class="[isWhite? 'day':'night', 'author-block__footer']">
              完整榜单
            </div>
          </nuxt-link>
        </div>
        <div class="r-bottom">
          <el-link type="info">用户协议</el-link>
          <el-link type="info">营业执照</el-link>
          <el-link type="info">隐私政策</el-link>
          <el-link type="info">关于我们</el-link>
          <div></div>
          <el-link type="info">站点地图</el-link>
          <el-link type="info">使用指南</el-link>
          <el-link type="info">友情链接</el-link>
          <el-link type="info">更多文章</el-link>
          <el-link type="info">京ICP备18012699号-3</el-link>
          <div></div>
          <el-link type="info">京ICP证：京B2-20191272</el-link>
          <div></div>
          <el-link type="info"><img src="~/assets/images/police.png">京公网安备11010802026719号</el-link>
          <div></div>
          <span>版权所有：北京北比信息技术有限公司</span>
          <div></div>
          <span>公司地址：北京市海淀区信息路甲28号13层B座13B-5</span>
          <div></div>
          <span>公司座机：010-83434395</span>
          <div></div>
          <span>举报邮箱：</span>
          <el-link type="info"> feedback@xitu.io</el-link>
          <div></div>
          <el-link type="info">©2023 稀土掘金</el-link>
          <div></div>
          <el-button type="text">
              <img src="~/assets/images/weibo.png">
          </el-button>
          <el-button type="text">
              <img src="~/assets/images/wechat.png">
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getUrl(url){
      return `http://lzzzs.top:1337${url}`
    }
    },
    computed: {
    ...mapState(['isWhite'])
  },
};

</script>

<style lang='scss' scoped>
 @import '@/assets/css/main/index.css';
 .author-block__title{
    padding: 15px;
    font-size: 15px;
    border-bottom: 1px solid #eee;
  }

  .author-block__footer{
    padding: 15px;
    font-size: 14px;
    text-align: center;
    border-top: 1px solid #eee;
    color: $theme;
    cursor: pointer;

    &:after{
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-left: 3px;
      border: 2px solid currentColor;
      border-left-color: transparent;
      border-bottom-color: transparent;
      transform: rotate(45deg);
    }
  }

  .author-item{
    display: flex;
    padding: 15px;
    cursor: pointer;

    &:hover{
      background: hsla(0,0%,84.7%,.1);
    }
  }

  .author__avatar{
    flex: 0 0 auto;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .author__info{
    flex: 1 1 auto;
    font-size: 12px;
    color: #909090;
    line-height: 1.5;
    overflow: hidden;

    .author__name{
      font-size: 15px;
      color: #262626;
    }
  }

</style>