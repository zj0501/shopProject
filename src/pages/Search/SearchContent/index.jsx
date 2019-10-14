import React from 'react'
import api from '../../../api'
import SearchContentView from '../SearchContentView/indx';
import LoadMore from '../../../components/loadMore';
 export default class SearchContent extends React.Component{
     constructor(){
         super()
         this.state={
             searchData:[],
             hasMore:false
         }
     }
     componentDidMount(){
        const keywords=this.props.keywords;
        this.http(keywords)
     }
     http(keywords){
        api.searchData(keywords)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.hasMore);
            
            this.setState({
                searchData:this.state.searchData.concat(data.data),
                hasMore:data.hasMore
            })
        })
     }
     loadMoreHandler=()=>{
        const keywords=this.props.keywords;
        this.http(keywords)
     }
     render(){
         
         return(
             <div>
                {
                    this.state.searchData.length>0 ?
                    <SearchContentView dataList={this.state.searchData}/> :
                    <div>正在加载中...</div>
                }
                {
                    this.state.hasMore?
                    <LoadMore onLoadMore={ this.loadMoreHandler }/>:
                    <div>没有更多数据能加载了...</div>
                }
             </div>
         )
     }
 }