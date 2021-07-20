export default{
    methods:{
        showLoading(){
            this.$toast.loading({
                message:'加载中...',
                forbidClick:true,
                duration:0
            })
        },
        closeLoading(){
            this.$toast.clear()
        }
    }
}