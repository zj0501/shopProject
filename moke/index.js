const express=require('express')
const app=express()
const router =require('./router')


app.use('/api',router)
app.listen(3200,function(){
    console.log('服务器启动3200');
    
})