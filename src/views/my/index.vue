<template>
<div class="my-wrap">
    <div class="header">
        
    </div>

    <div class="list bg-fff mt-10">
        <p class="item flex jc-sb aic pl-15 pr-15"><span>我的订单</span><span ><i class="iconfont icon-youjiantou1"></i></span></p>
        <p class="item flex jc-sb aic pl-15 pr-15"><span>收藏</span><span ><i class="iconfont icon-youjiantou1"></i></span></p>
        <p class="item flex jc-sb aic pl-15 pr-15"><span>足迹</span><span ><i class="iconfont icon-youjiantou1"></i></span></p>
        <p class="item flex jc-sb aic pl-15 pr-15"><span>优惠券</span><span ><i class="iconfont icon-youjiantou1"></i></span></p>
        <p class="item flex jc-sb aic pl-15 pr-15"><span>我的地址</span><span ><i class="iconfont icon-youjiantou1"></i></span></p>
        <p class="item flex jc-sb aic pl-15 pr-15"><span>设置</span><span ><i class="iconfont icon-youjiantou1"></i></span></p>
    </div>

    <Footer></Footer>
</div>
</template>
<style lang="less" scoped>
@import './my.less';
</style>
<script>
import Footer from '@/components/Footer'
export default {
    components:{
        Footer
    }
}
</script>