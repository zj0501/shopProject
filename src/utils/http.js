import qs from 'querystring'
export function httpGet(url){
    return fetch(url)
}
export function httpPost(url,params){
    return fetch(url,{
        method:'post',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify(params)
    })
}