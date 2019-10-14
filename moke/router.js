const express=require('express')
const router= express.Router()
const url =  require('url')
const bjData=require('./data/home/beijing_commodityList')
const shData=require('./data/home/shanghai_commodityList')
const searchList=require('./data/search/search')
router.get('/hotcommodity',(req,res)=>{
    const city=url.parse(req.url,true).query.city;
    if(city==='北京'){
        res.send(bjData.hot1)
    }else{
        res.send(shData.hot1)
    }
    
})
router.get('/houseproducts',(req,res)=>{
    const city=url.parse(req.url,true).query.city;
    if(city==='北京'){
        res.send(bjData.hot2)
    }else{
        res.send(shData.hot2)
    }
})
router.get('/search',(req,res)=>{
    const keywords=url.parse(req.url,true).query.keywords;
    res.send(searchList)
})
module.exports=router