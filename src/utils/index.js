import axios from "axios";
import { Dialog } from "vant";

const get =(url,data)=>{
    return  new Promise((resolve,reject)=>{
        axios.get(url,{params:data}).then(res=>{
            if(res.data.code==666) resolve(res.data)
            else Dialog({message:res.data.msg})
        }).catch(err=>Dialog({message:'网络请求失败,请重试'}))
    })
}
const post=(url,data)=>{
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then(res=>{
            if(res.code==666) resolve(res.data)
            else{
                Dialog({message:res.data.msg})
            }
        }).catch(err=>Dialog({message:'网络请求失败,请重试'}))
    })
}
export default{
    get,post
}