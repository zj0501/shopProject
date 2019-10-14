import React from 'react'
import './style.less'
 export default class Pagination extends React.Component{
     render(){
         const dotsArr=this.props.data;
         const currentIndex=this.props.index;
         return(
            <div className='dots-box'>                
                <ul>
                    {dotsArr.map((item,index)=>{
                        return(
                            <li key={index} className={index===currentIndex?'selected':''}></li>
                        )
                    })}
                </ul>
            </div>
         )
     }
 }