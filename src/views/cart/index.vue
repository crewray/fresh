<template>
  <div class="cart-wrap">
    <div class="header flex bg-fff">
      <span class="red"><i class="iconfont icon-zuojiantou"></i>返回</span>
      <span class="f16">购物车</span>
      <span class="red">编辑</span>
    </div>
    <ul class="orders">
      <li class="item">
        <div class="pl-15 pr-15">
          <van-checkbox checked-color="red" icon-size="16px" v-model="checked"></van-checkbox>
        </div>
        <img height="100%" src="https://mall.s.maizuo.com/86d8414272e50b4b9a7b185ac30dfc86.png" alt="">
        <div class="info fg1 flex fdc jc-sb">
            <span>【山东】金秋红蜜桃</span>
            <p class="flex jc-sb"><span class="red"><i class="iconfont icon-fl-renminbi"></i> 57.80</span> <span class="num">x1</span></p>
        </div>
      </li>
    </ul>
    <div class="bottom flex jc-sb aic bg-fff">
        <van-checkbox checked-color="red" icon-size="16px" v-model="checkAll">全选</van-checkbox>
        <div class="end flex aic">
            <div class= "flex cost  mr-15">
                <span class="f14">合计:</span>
                <span class="f18 red"><i class="iconfont icon-fl-renminbi"></i> 57.80</span>
            </div>
            <button id="final">结算</button>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style lang="less">
@import "./cart.less";
</style>
<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
  data(){
      return{
          checked:false,
          checkAll:false
      }
  }
};
</script>