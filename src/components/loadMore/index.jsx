import React from 'react'
import './style.less'
 export default class LoadMore extends React.Component{
     constructor(){
         super()
         this.load=React.createRef()
     }
     componentDidMount(){
         const winHeight=document.documentElement.clientHeight;
         let timer=null;
         window.addEventListener('scroll',()=>{
            
            const scrollHeight=this.load.current.getBoundingClientRect().top;
            if (timer) {
                clearTimeout(timer)
            }
            timer=setTimeout(()=>{
                if(winHeight>scrollHeight){
                   //  防抖和节流
                  this.props.onLoadMore()
                }
            },1000)
             
         })
     }
     render(){
         return(
             <div className='load-more' ref={this.load}>
                 加载更多...
             </div>
         )
     }
 }