<template>
    <div>
        <j-header />
        <nuxt />
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
</style>