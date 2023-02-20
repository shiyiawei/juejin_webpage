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
         <el-card class="right-card" shadow="hover" :body-style="{padding: '10px'}">
                  <img src="~/assets/images/shop1.png" >
        </el-card>
        <el-card class="right-card" shadow="hover" :body-style="{padding: '10px'}">
                  <img src="~/assets/images/shop2.png" >
        </el-card>
        <el-card class="right-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>🎖️作者榜</span>
          </div>
          <div>
            <el-button type="text">
              <img src="~/assets/images/writer1.png">
            </el-button>
            <el-button type="text">
              <img src="~/assets/images/writer2.png">
            </el-button>
            <el-button type="text">
              <img src="~/assets/images/writer3.png">
            </el-button>
          </div>
          <div>
            <el-button type="text">
              <img src="~/assets/images/bangdan.png">
            </el-button>
          </div>
        </el-card>
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
export default {
  name: 'IndexPage',
  data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>

<style>
 @import '@/assets/css/main/index.css';
</style>