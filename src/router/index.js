import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/product'
        },
        {
            path:'/product',
            component: ()=> import('@/views/product/index'),
            redirect: '/product/list',
            children:[
                {
                    path:'list',
                    component:()=>import('@/views/product/children/list')
                },
                {
                    path:'detail/:productId',
                    name:'detail',
                    component:()=>import('@/views/product/children/detail')
                },
            ]
        },
        {
            path:'/classify',
            component: ()=> import('@/views/classify/index')
        },
        {
            path:'/cart',
            component: ()=> import('@/views/cart/index')
        },
        {
            path:'/my',
            name:'my',
            component: ()=> import('@/views/my/index')
        },
        {
            path:'/demo',
            component:()=> import('@/components/Demo')
        },
        {
            path:'*',
            component: ()=>import('@/components/NotFound')
        }
        
    ]
})