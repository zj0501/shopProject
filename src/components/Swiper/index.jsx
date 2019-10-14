import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import banner1 from '../../static/images/banner1.png';
import banner2 from '../../static/images/banner2.png';
import banner3 from '../../static/images/banner3.png';
import './style.less'
import Pagination from './Pagination';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
 export default class BannerSwiper extends React.Component{
     constructor(){
         super()
         this.state={
             currentIndex:0
         }
     }
     handleChangeIndex=index=>{
         this.setState({
             currentIndex:index
         })
     }
     render(){
         const imgArr=[banner1,banner2,banner3];
         return(
             <div className='banner-swiper-box'>
                <AutoPlaySwipeableViews onChangeIndex={this.handleChangeIndex}>
                    {imgArr.map((item,index)=>{
                        return (
                            <div key={index}>
                                <img src={item} alt={item}/>
                            </div>
                        )  
                    })}          
                </AutoPlaySwipeableViews>
                <Pagination index={this.state.currentIndex} data={imgArr} />
             </div>
           
         )
     }
 }