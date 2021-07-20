<template>
  <div>
    <h4>子组件</h4>
    <p>{{ msg }}</p>
    <button @click="send">发送信息</button>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  props: ['msg'],
  data() {
    return {};
  },
  methods:{
      send(){
          let data='nihao'
          this.$emit('getMsg',data)
      }
  }
};
</script>