import React from 'react'
import './style.less'
 export default class SearchListItem extends React.Component{
     render(){
        const data=this.props.data  
         return(
            <div className="list-item">
                <img src={data.img} alt="" />
                <div className="mask">
                    <div className="left">
                        <p>{data.title}</p>
                        <p>{data.houseType}</p>
                    </div>
                    <div className="right">
                        <div className="btn">
                            {data.rentType}
                        </div> */}
                        {/* 在加载数据的时候，数据存在标签格式，格式需要被识别 */}
                        {/* dangerouslySetInnerHTML={{ __html:data }} */}
                        <p dangerouslySetInnerHTML={{ __html:data.price+"/月" }}></p>
                        {/* <p>{ data.price }</p> */}
                    </div> 
                </div>
            </div>
            )
     }
 }