<template>
    <div class="header header-fixed">
      <div class="nav">
        <el-row type="flex" justify="space-between">
          <el-col :xs="1" :sm="1" :md="1">
            <nuxt-link to="/">
              <img src="~/assets/images/mainlogo.png" height="40px">
            </nuxt-link>
          </el-col>
          <!-- 根据窗口大小显示或隐藏菜单 md根据ipad横竖屏调整-->
          <el-col class="hidden-sm-and-down" :md="10">
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
                <el-menu-item index="/app">APP</el-menu-item>
                <el-menu-item index="/chajian">插件</el-menu-item>
            </el-menu>
          </el-col>
          <el-col class="nav-right"   :xs="8" :sm="8" :md="8">
            <div class="nav-sign">
              <el-dropdown split-button type="primary" @command="handleCommand">
                创作者中心
                <el-dropdown-menu slot="dropdown" class="nav-down">
                  <el-dropdown-item command="article">写文章</el-dropdown-item>
                  <el-dropdown-item command="pins">发沸点</el-dropdown-item>
                  <el-dropdown-item command="local">写本地</el-dropdown-item>
                  <el-dropdown-item command="codes">写代码</el-dropdown-item>
                  <el-dropdown-item command="caogao">草稿箱</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </div>  
    </div>
</template>
<script>
export default {
  methods: {
    handleCommand(command){
      this.$message('点击了'+ command)
    }
  }
}
</script>   
<style scoped>
/* 头部 */
.header {
  width: 100%;
  height: 80px;
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
.header .nav {
  max-width: 90%;
  /* 居中 */
  margin: 10px; 
  padding: 5px;
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
.nav-down{
  width: auto;
}
</style>