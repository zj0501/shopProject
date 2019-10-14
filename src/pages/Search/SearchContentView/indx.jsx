import React from 'react'
import SearchListItem from './Item'
 export default class SearchContentView extends React.Component{
     render(){
         const listArr=this.props.dataList
         return(
             <div>
                 
                 {listArr.map((item,index)=>{
                    return(                        
                        <SearchListItem key={index} data={item}/>                        
                    )
                })}
                
             </div>
         )
     }
 }