import React from 'react'
import FootNavs from '../../components/FootNavs'
import HomeHead from './HomeHead'
import BannerSwiper from '../../components/Swiper'
import HomeContent from './HomeContent'
import { connect } from 'react-redux'
class Home extends React.Component{
     render(){
         return(
             <div>
                 <HomeHead city={this.props.city.cityName}/>
                 <BannerSwiper />
                 <HomeContent city={this.props.city.cityName}/>
                 <FootNavs />
             </div>
         )
     }
 }
 function mapStateToProps(state){
     return{
         city:state.city
     }
 }
export default connect(mapStateToProps)(Home)