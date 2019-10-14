import base from './base'
import { httpGet,httpPost } from '../utils/http'

const api={
    getHotCommodity:function (cityName){
        return httpGet(base.initUrl+base.hotcommodity+'?city='+cityName)
    },
    getHouseProducts:function getHouseProducts(cityName){
        return httpGet(base.initUrl+base.houseproducts+'?city='+cityName)
    },
    searchData:function (keywords){
        return httpGet(base.initUrl+base.search+'?keywords='+keywords)
    }
} 

export default api

