<template>
    <div class="ft">
        <j-header />
        <div class="j-main">
            <nuxt />
        </div>  
        <el-backtop :bottom="80"></el-backtop>
    </div>
  
</template>
<script>
import JHeader from '@/components/layout/Header'
export default {
    components: {
        JHeader
    }
}
</script>
<style>
.ft{
    display: flex;
    flex-direction: column;
}
.j-main {
    padding-top: 160px;
    max-width: 1140px;
    margin: 0 auto;
}
</style>