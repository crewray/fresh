<template>
    <div class="my-nav">
        <span @click="goback">{{left}}</span>
        <span class="center">{{center}}</span>
        <span>{{right}}</span>
    </div>
</template>
<style lang="less">
.my-nav{
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    .center{
        justify-self: center;
    }

}
</style>
<script>
export default {
    props:{
        left:{
            default:''
        },
        center:{
            default:''
        },
        right:{
            default:''
        },
    },
    data(){
        return{
            
        }
    },
    methods:{
        goback(){
            history.go(-1)
        }
    }
}
</script>