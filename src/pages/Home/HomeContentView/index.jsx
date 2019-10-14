import React from 'react'
import './style.less'
 export default class HomeContentView extends React.Component{

    
     render(){
         const list=this.props.listData
         const title=this.props.title
         return(
             <div className='hotproduct'>
                <h3>{title}</h3>
                <div className='hot-container'>
                    <ul className='clear-fix'>
                        {list.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a href={item.link}>
                                        <img src={item.img}/>
                                        <span>{item.title}</span>
                                    </a>                            
                                </li>
                            )
                        })}
                        
                    </ul>
                </div>
             </div>
         )
     }
 }