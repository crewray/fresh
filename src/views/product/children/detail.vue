<template>
  <div class="detail-wrap">
    <div class="header fixed flex jc-sb aic bg-fff">
      <router-link id="back" to="/product/list"
        ><i class="iconfont icon-zuojiantou"></i>返回</router-link
      >
      <p>商品详情</p>
      <p>&nbsp;&nbsp;&nbsp;</p>
    </div>
    <van-swipe class="product-swipe" autoplay="3000"  indicator-color="blue">
      <van-swipe-item v-for="(img, index) in productInfo.banners" :key="index">
        <img :src="img" alt="" />
      </van-swipe-item>
      <!-- <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{productInfo.banners.length}}</div>
      </template> -->
      
    </van-swipe>
    <div class="info bg-fff">
      <div class="title">
        <span>直降</span><span>包邮</span>
        <p>{{ productInfo.masterName }}</p>
      </div>
      <p class="f14 f999 mt-5">{{ productInfo.slaveName }}</p>
      <div class="flex jc-sb mt-5">
        <p>
          <span class="price red f20"
            ><i class="iconfont icon-fl-renminbi"></i
            >{{ productInfo.minPrice / 100 }}</span
          ><span class="oldPrice f999 f12"
            ><i class="iconfont icon-fl-renminbi"></i
            >{{ productInfo.maxPrice / 100 }}</span
          >
        </p>
        <p class="f999 f12">{{ productInfo.inventory }}人购买</p>
      </div>
      <div class="box flex jc-sb f14 mt-5">
        <p><span class="f999">规格: X</span><span>2</span></p>
        <p class="f999"><i class="iconfont icon-youjiantou1"></i></p>
      </div>
      <div class="box flex jc-sb aic">
        <div class="fof">
          <p class="f999 f14">配送至:</p>
          <p class="fof f12 mt-10">
            上海黄浦区非机动啥假发票感觉到破案机机感觉到破案机机感觉到破案机机机机机构
          </p>
        </div>
        <div class="f999 f16">
          <i class="iconfont icon-youjiantou1"></i>
        </div>
      </div>
      <div class="box flex" style="border: 0">
        <i style="color: red; font-size: 14px" class="iconfont icon-passed"></i
        ><span class="f12 f999">包邮</span>
      </div>
    </div>

    <div class="pics bg-fff">
      <div class="title-wrap flex jc-c aic mt-10 default">
        <p class="default">—— 商品详情 ——</p>
      </div>
      <div class="img-wrap">
        <img
          v-for="(item, index) in productInfo.descPics"
          :key="index"
          :src="item"
          alt=""
        />
        <p class="title flex jc-c aic default f12">—— 预定流程及须知 ——</p>
            <img src="https://file.sdyxmall.com/h5/v1/public/app/img/group5.b0b24d0.png" alt="">
      </div>
      <div class="context">
        <p class="message">一、关于发货</p>
        <p class="message">
          个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；
        </p>
        <p class="message">一、关于发货</p>
        <p class="message">
          个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；
        </p>
        <p class="message">一、关于发货</p>
        <p class="message">
          个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；
        </p>
        <p class="message">一、关于发货</p>
        <p class="message">
          个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；
        </p>
        <p class="message">一、关于发货</p>
        <p class="message">
          个工作日内发出（周末、法定节假日需顺延）个工作日内发出（周末、法定节假日需顺延）；
        </p>
      </div>
    </div>
    <div class="foot flex jc-sb aic fixed">
      <div class="left flex">
        <div class="box flex fdc aic">
          <i class="iconfont icon-chat"></i>
          <p>客服</p>
        </div>
        <div class="box flex fdc aic">
          <i class="iconfont icon-heart-o-copy"></i>
          <p>收藏</p>
        </div>
        <div class="box flex fdc aic rel">
          <span class="abs num" v-if="num>0">{{
            num
          }}</span>
          <i class="iconfont icon-cart"></i>
          <p>购物车</p>
        </div>
      </div>

      <div class="right flex">
        <button @click="addCart" id="add">加入购物车</button>
        <button id="buy">立即购买</button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "./detail.less";
</style>


<script>
import $axios from "@/utils/index";
export default {
  data() {
    return {
      num: 0,
      current:0,
      productInfo: {},
    };
  },
  created() {
    // console.log(this.$route.params);
    this.getDetail();
  },
  methods: {
    addCart() {
      this.num++;
    },
    onChange(index){
        this.current=index
    },
    async getDetail() {
      try {
        let res = await $axios.get(
          "http://132.232.87.95:3003/product/detail",
          this.$route.params
        );
        if (res.code == 666) {
          this.productInfo = res.result;
        } else {
          this.$toast.fail(res.msg);
        }
      } catch (error) {
        this.$toast.fail(error);
      }
    },
  },
};
</script>