<template>
    <div>
    <el-row type="flex" justify="space-between">
      <!-- 中间 -->
      <el-col :md="16">
        <div class="blog-center">
          <!-- 头部标签 -->
          <!-- 文章列表 -->
          <nuxt-child />
        </div>
      </el-col>
      <!-- 右侧广告区 -->
      <el-col class="hidden-sm-and-down" :md="5">
         <el-card class="right-card" shadow="hover" :body-style="{padding: '10px'}">
                  <img src="~/assets/images/shop1.png" >
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
 @import '@/assets/css/main/index.css';
</style>