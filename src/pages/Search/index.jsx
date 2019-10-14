import React from 'react'
import FootNavs from '../../components/FootNavs'
import Header from '../../components/Header'
import SearchHead from './SearchHead'
import SearchContent from './SearchContent'
 export default class Search extends React.Component{
     render(){
         return(
             <div>
                 <SearchHead />
                 <SearchContent keywords={this.props.match.params.keywords}/>
             </div>
         )
     }
 }