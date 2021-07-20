<template>
  <div class="list-wrap">
    <div id="list">
      <van-swipe class="my-swipe" :autoplay="3000">
        <van-swipe-item>
          <img :src="banners[0]" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="banners[1]" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="banners[2]" alt="" />
        </van-swipe-item>
      </van-swipe>

      <div class="bg-fff">
        <div class="type bg-fff flex">
          <a
            v-for="item in categoryList"
            :key="item.categoryId"
            class="box flex fdc jc-c aic"
          >
            <img :src="item.iconUrl" alt="" />

            <p>{{ item.name }}</p>
          </a>
        </div>
        <div class="cards flex jc-sa pb-10">
          <a class="card flex jc-sa pl-10 aic bgc1 rel">
            <span class="f10 fff abs title">秒杀</span>
            <div class="left flex fdc jc-c">
              <p class="f14">秒杀</p>
              <p class="f10 f999 mt-5">超值惊喜</p>
              <p class="f12 fff mt-5 btn">立即砍价</p>
            </div>
            <div class="right">
              <img src="@/assets/images/miaosha-icon.e7d1fb11.png" alt="" />
            </div>
          </a>
          <a class="card flex jc-sa pl-10 aic bgc2 rel">
            <span class="f10 fff abs title">秒杀</span>
            <div class="left flex fdc jc-c">
              <p class="f14">秒杀</p>
              <p class="f10 f999 mt-5">超值惊喜</p>
              <p class="f12 fff mt-5 btn">立即砍价</p>
            </div>
            <div class="right">
              <img src="@/assets/images/pintuan-icon.711363b5.png" alt="" />
            </div>
          </a>
        </div>
      </div>
      <a class="banner flex jc-sb aic fff ml-10 mr-10">
        <span
          ><i class="iconfont icon-icon_coupon"></i> 超值福利 | 全场满减</span
        >
        <span>立即领取<i class="iconfont icon-youjiantou1"></i></span>
      </a>

      <div class="nav flex jc-sa aic bg-fff mt-15 f14">
        <div>推荐</div>
        <div class="flex jc-c aic ml-5">
          <span>销量</span>
          <div class="jiantou flex fdc jc-c aic">
            <i class="iconfont icon-arrow-up"></i>
            <i class="iconfont icon-arrow-up1"></i>
          </div>
        </div>
        <div class="flex jc-c aic ml-5">
          <span>价格</span>
          <div class="jiantou flex fdc jc-c aic">
            <i class="iconfont icon-arrow-up"></i>
            <i class="iconfont icon-arrow-up1"></i>
          </div>
        </div>
      </div>

      <div class="bg-fff">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getList"
          id="list"
          class="list flex jc-sa pt-15"
        >
          <router-link
            :to="`detail/${item.productId}`"
            v-for="(item, index) in productList"
            :key="index"
            class="item flex fdc"
          >
            <img :src="item.imgUrl" alt="" />
            <div class="desc flex fdc mt-10">
              <p class="f14 mt-5">{{ item.masterName }}</p>
              <p class="f12 mt-5">{{ item.slaveName }}</p>
              <p class="flex jc-sb mt-5">
                <span class="price f16"
                  ><i class="iconfont icon-fl-renminbi"></i
                  >{{ item.minPrice / 100 }}</span
                >
                <span class="f999">
                  <span class="f10">销量:</span>
                  <span class="f14">{{ item.inventory }}</span>
                </span>
              </p>
            </div>
          </router-link>
        </van-list>
        <!-- <van-list
        v-model="loading"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        @load="getList"
      >
        <van-cell v-for="item in productList" :key="item.productId" :title="item.masterName" />
      </van-list> -->
        <!-- <p class="f999 14 flex aic jc-c" style="height: 50px">没有更多了</p> -->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="less">
@import "./list.less";
</style>

<script>
import axios from "@/utils/index";
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      banners: [],
      productList: [],
      categoryList: [],
      page: 1,
      loading: false,
      finished: false,
      // baseUrl:'http://localhost:3000/'
      baseUrl: "http://132.232.87.95:3003/",
    };
  },
  methods: {
    async getList() {
      let pageNum = this.page;
      try {
        this.showLoading();
        let request = await axios.get(this.baseUrl + "product/list", {
          pageNum: pageNum,
        });
        this.productList = this.productList.concat(request.list);
        if (request.list.length === 0) this.finished = true;

        //   console.log(this.productList)
      } catch (err) {
         console.log(err)
      } finally {
        this.$toast.clear();
        this.page++;
        this.loading = false;
      }
    },
    async getBanners(url) {
      let request = await axios.get(url);
      this.banners = request.banners;
    },
    async getCategory(url) {
      let request = await axios.get(url);
      this.categoryList = request.list;
      // console.log(this.categoryList);
    },
  },
  created() {
    this.getBanners("http://132.232.87.95:3003/product/getBanners");
    this.getCategory("http://132.232.87.95:3003/category/all");

    // this.getList();
  },
};
</script>