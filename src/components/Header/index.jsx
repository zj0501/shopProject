import React from 'react'
// import {  withRouter  } from 'react-router-dom'
import './style.less'
export default class Header extends React.Component{
    backHandler=()=>{
        // 返回上一级
        window.history.back();
        // 直接跳回首页,此方法必须在有路由的环境下才能生效，即用路由的｛withRouter｝高级组件
        // this.props.history.push('/')
    }
     render(){
         return(
             <div id='common-header'>
                 <span className='back-icon' onClick={ this.backHandler }>
                     <i className='icon-chevron-left'></i>
                 </span>
                 <h1>{this.props.title}</h1>
             </div>
         )
     }
 }
//  export default withRouter(CityHeader)