import React from 'react'
// 初始化关联redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cityActions from '../actions/city'

// Layout组件存在的意义：初始化
class Layout extends React.Component{
    componentDidMount(){
        this.props.cityActions.initCity({
            cityName:'上海' //百度地图定位
        })
    }
     render(){
         return(
             <div>
                {this.props.children}
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
 export default connect(mapStateToProps,mapDispatchToProps)(Layout)