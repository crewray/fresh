<template>
  <div class="footer-wrap">
    <div class="footer">
      <router-link active-class="on" to="/product">
        <van-icon size="18px" name="wap-home-o" />
        <span>首页</span>
      </router-link>
      <router-link active-class="on" to="/classify">
        <van-icon size="18px" name="apps-o" />
        <span>分类</span>
      </router-link>
      <router-link active-class="on" to="/cart">
        <van-icon size="18px" name="shopping-cart-o" />
        <span>购物车</span>
      </router-link>
      <router-link active-class="on" to="/my">
        <van-icon size="18px" name="user-circle-o" />
        <span>我的</span>
      </router-link>

      <!-- <router-link  active-class="on" to="/demo">demo</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" >
.footer-wrap{
  .footer {
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: #797d82;
  }
  .van-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    display: block;
    font-size: 12px;
    line-height: 1;
    margin-top: 5px;
  }
  .on {
    color: red;
  }
}
}
</style>