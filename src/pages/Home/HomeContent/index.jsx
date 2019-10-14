import React from 'react'
import HomeContentView from '../HomeContentView'
import api from '../../../api'

export default class HomeContent extends React.Component{
    constructor(){
        super()
        this.state={
            commodityList:[],
            houseProductsList:[]
        }
    }
    componentDidMount(){
        const cityName=this.props.city;
        api.getHotCommodity(cityName).then(res=>res.json())
        .then(data=>{ 
            this.setState({
                commodityList:data
            })         
        })
        api.getHouseProducts(cityName).then(res=>res.json())
        .then(data=>{
            this.setState({
                houseProductsList:data
            })              
        })
    }
    render(){
        return(
            <div>
                { this.state.commodityList ?
                    <HomeContentView title={'热门商品'} listData={this.state.commodityList}/> :
                    <div>数据正在加载中...</div>
                }
                 { this.state.houseProductsList ?
                    <HomeContentView title={'家庭用品'} listData={this.state.houseProductsList}/> :
                    <div>数据正在加载中...</div>
                }
            </div>
          
            
        )
    }
}