<template>
    <div class="top">
        <top-bar></top-bar>
        <main>
            <nuxt />
        </main>
        <el-backtop :bottom="80"></el-backtop>
    </div>
</template>
  
<script>
</script>
  
<style>
.top {
    background-color: #fff;
    min-height: 100vh;
}
</style>