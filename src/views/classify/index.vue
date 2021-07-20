<template>
  <div class="classify-wrap">
    <div class="search rel f24 fixed">
      <i class="iconfont icon-sousuo abs"></i>
      <input
        @input="search"
        v-model="keyword"
        type="text"
        placeholder="请输入搜索关键词"
      />
    </div>
    <div class="container flex">
      <div class="menu">
        <span
          v-for="(item, index) in categoryList"
          :key="index"
          :class="{ title: true, on: index == on }"
          @click="select(index, item.categoryId)"
          >{{ item.name }}</span
        >
      </div>
      <div class="content">
        <ul class="list flex jc-sa">
          <li v-for="(item, index) in productList" :key="index">
            <img :src="item.imgUrl" alt="" />
            <p>{{ item.masterName.slice(4) }}</p>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style lang="less">
@import "./classify.less";
</style>
<script>
import Footer from "@/components/Footer";
import $axios from "@/utils/index.js";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      categoryList: [],
      productList: [],
      on: 0,
      keyword: "",
      timer: null,
    };
  },
  methods: {
    async getCategory() {
      try {
        let res = await $axios.get("http://132.232.87.95:3003/category/all");
        // console.log(res,list)
        if (res.code == 666) {
          this.categoryList = res.list;
          //   console.log(this.categoryList);
        } else {
          this.$toast.fail(res.msg);
          // console.log(res.msg)
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getProductList(categoryId) {
      try {
        let res = await $axios.get("http://132.232.87.95:3003/product/list", {
          categoryId: categoryId,
        });
        // console.log(res)
        if (res.code == 666) this.productList = res.list;
        else this.$toast.fail(res.msg);
      } catch (err) {
        console.log(err);
      }
    },
    select(index, categoryId) {
      this.on = index;
      this.getProductList(categoryId);
    },
    search() {
      clearTimeout(this.timer);
      this.timer= setTimeout(async () => {
        if (this.keyword === "") {
          this.getProductList(145);
        } else {
          let res = await $axios.get(
            "http://132.232.87.95:3003/product/search",
            {
              keyword: this.keyword,
            }
          );
          this.productList = res.list;
          
        }
      }, 1000);
    },
  },
  created() {
    this.getCategory();
    this.getProductList(145);
  },
};
</script>