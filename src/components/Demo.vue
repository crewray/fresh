<template>
<div>
  <Nav left="返回" center="demo" right="编辑">
  </Nav>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    class="list flex jc-sa pt-15"
  >
    <button id="btn" @click="goto">跳转到我的</button>
    <Son @getMsg="getMsg" msg='hahaha'>
      <header slot="header">头部</header>
    <button>按钮</button>
    <footer slot="footer">底部</footer>

    </Son>
    <router-link
      :to="`product/detail/${item.productId}`"
      v-for="item in list"
      :key="item.productId"
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
  <Footer></Footer>
</div>
  
</template>
<style lang="less" scoped>
.list {
  flex-wrap: wrap;
  #btn {
    align-self: center;
  }
  .item {
    width: 165px;
    img {
      width: 100%;
      background-color: #f4f4f4;
    }
    .desc {
      height: 78px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price {
      color: #c03131;
    }
  }
}
</style>

<script>
import axios from "@/utils/index.js";
import Son from './Son'
import Nav from './Nav.vue'
import Footer from '@/components/Footer'
export default {
  components:{
    Son,
    Nav,
    Footer
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageNum: 1,
    };
  },
  methods: {
    async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      let self = this;
      let data = { pageNum: self.pageNum };
      let res = await axios.get("http://132.232.87.95:3003/product/list", data);
      this.list = this.list.concat(res.list);
      this.pageNum++;
      this.loading = false;
      if (res.list.length === 0) this.finished = true;
    },
    goto() {
      this.$router.push({ name: "my", params: { data: "123" } });
    },
    detail(id) {
      this.$router.push({ name: "detail", params: { pid: id } });
    },
    getMsg(data){
      console.log(data)
    }
  },
  created(){
    
  }
};
</script>  