import React from 'react'
import CityHeader from '../../components/Header'
import Header from '../../components/Header'
import CityCurrent from './CityCurrent'
import CityChange from './CityChange'
import { connect } from 'react-redux'
class City extends React.Component{
     render(){
         return(
             <div>
                 <Header title='城市选择'/>
                 <CityCurrent city={this.props.city.cityName}/>
                 <CityChange />
             </div>
         )
     }
 }
function mapStateToProps(state){
    return{
        city:state.city
    }
}
 export default connect(mapStateToProps)(City)