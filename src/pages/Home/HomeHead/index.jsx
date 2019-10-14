import React from 'react'
import { Link } from 'react-router-dom'
import './style.less'
import SearchInput from '../../../components/SearchInput'
 export default class HomeHead extends React.Component{
     render(){
         return(
             <div id='home-header'>
                 <div className='home-header-left float-left'>
                     <Link to='/city'>
                        <span>{this.props.city}</span>
                        <i className="icon-angle-down"></i>
                     </Link>
                     
                 </div>
                 <div className='home-header-right float-right'>
                    <i className="iconfont icon-car"></i>                     
                 </div>
                 <div className='home-header-middle'>
                    <div className='search-container'>
                        <i className="icon-search"></i>
                        <SearchInput />
                     </div>
                    
                 </div>
             </div>
         )
     }
 }