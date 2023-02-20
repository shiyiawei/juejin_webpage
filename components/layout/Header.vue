<template>
    <div class="header header-fixed">
      <div class="nav">
        <el-row type="flex" justify="space-between">
          <el-col :xs="5" :sm="5" :md="5" :lg="5">
            <nuxt-link to="/">
              <img src="~/assets/images/mainlogo.png" height="40px">
            </nuxt-link>
          </el-col>
          <!-- 根据窗口大小显示或隐藏菜单 md根据ipad横竖屏调整-->
          <el-col class="hidden-sm-and-down" :md="20" >
            <el-menu 
              default-active="defaultActive" 
                mode="horizontal" 
              active-text-color="#345dc2"
              background-color="#fafafa"
              router
            >
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/pins">沸点</el-menu-item>
                <el-menu-item index="/course">课程</el-menu-item>
                <el-menu-item index="/live">直播</el-menu-item>
                <el-menu-item index="/events">活动</el-menu-item>
                <el-menu-item index="/challenge">竞赛</el-menu-item>
                <el-menu-item index="/shop">商城</el-menu-item>
                <el-badge value="邀请有礼" class="item">
                  <el-menu-item index="/app">APP</el-menu-item>
                </el-badge>
                <el-menu-item index="/chajian">插件</el-menu-item>
            </el-menu>
          </el-col>
          <el-col class="nav-right"   :xs="1" :sm="1" :md="1">
            <!-- 主题更改按钮 -->
            <div class="nav-sign">
              <el-button type="info" icon="el-icon-moon" circle></el-button>
            </div>
          </el-col>
        </el-row>
        <!--第二级导航栏-->
        <el-row type="flex" justify="center">
          <el-col class="hidden-sm-and-down" :md="20">
                <el-menu 
                  default-active="defaultActive" 
                    mode="horizontal" 
                  active-text-color="#345dc2"
                  background-color="#fafafa"
                  router
                >
                    <el-menu-item index="/recommended">综合</el-menu-item>
                    <el-menu-item index="/following">关注</el-menu-item>
                    <el-menu-item index="/backend">后端</el-menu-item>
                    <el-menu-item index="/frontend">前端</el-menu-item>
                    <el-menu-item index="/android">Android</el-menu-item>
                    <el-menu-item index="/ios">iOS</el-menu-item>
                    <el-menu-item index="/ai">人工智能</el-menu-item>
                    <el-menu-item index="/freebie">开发工具</el-menu-item>
                    <el-menu-item index="/career">代码人生</el-menu-item>
                    <el-menu-item index="/article">阅读</el-menu-item>
                </el-menu>
          </el-col>
        </el-row>  
      </div>
  </div>
</template>
<script>

</script>   
<style scoped>
/* 头部 */
.header {
  width: 100%;
  height: 70px;
  border-top: 3px solid #345dc2;
  background-color: #fafafa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .12);
  z-index: 1501;
}
/* 固定头部 */
.header-fixed {
  position: fixed;
}

/* 导航 */
.header {
  max-width: 98%;
  /* 居中 */
  margin: 10px; 
  padding: 5px;
} 
.nav {
  margin: 10px;
  padding: 5px;
  position:relative;
}
/* 导航右侧 */
.nav-right {

  text-align: right;
}
.nav-sign {
  position:absolute;
  right: 0;
  margin-left: 50px;
}
</style>