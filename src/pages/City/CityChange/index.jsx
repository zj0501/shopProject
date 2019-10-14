import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../../../actions/city'
import './style.less'
class CityChange extends React.Component{
    changeCityHandler(cityName,e){
        this.props.cityActions.updateCity({
            cityName
        })
        this.props.history.push('/')
    }
     render(){
         return(
             <div className='city-list-container'>
               <h3>热门城市</h3>
               <ul>
                   {/* 参数e需放在最后 */}
                   <li onClick={(e)=>this.changeCityHandler('北京',e)}><span>北京</span></li>
                   {/* <li onClick={this.changeCityHandler.bind(this,'')}></li> */}
                   <li onClick={(e)=>this.changeCityHandler('上海',e)}><span>上海</span></li>
                   <li onClick={(e)=>this.changeCityHandler('沈阳',e)}><span>沈阳</span></li>
                   <li onClick={(e)=>this.changeCityHandler('呼和浩特',e)}><span>呼和浩特</span></li>
                   <li onClick={(e)=>this.changeCityHandler('福建',e)}><span>福建</span></li>
                   <li onClick={(e)=>this.changeCityHandler('杭州',e)}><span>杭州</span></li>
                   <li onClick={(e)=>this.changeCityHandler('太原',e)}><span>太原</span></li>
                   <li onClick={(e)=>this.changeCityHandler('成都',e)}><span>成都</span></li>
                   <li onClick={(e)=>this.changeCityHandler('武汉',e)}><span>武汉</span></li>                  
               </ul>
             </div>
         )
     }
 }
function mapStateToProps(state){
    return{
        
    }
}
function mapDispatchToProps(dispatch){
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}
 export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CityChange)) 