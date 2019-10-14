import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.less'
class SearchInput extends React.Component{

    constructor(){
        super()
        this.state={
            searchVal:''
        }
    }
    changeValHandler=(e)=>{
        this.setState({
            searchVal:e.target.value
        })   
    }
    keyPressHandler(e){
        if(e.keyCode===13){
            this.props.history.push('/search/'+this.state.searchVal)
        }
    }
     render(){
         return(            
            <input
                className='search-input'
                value={this.state.searchVal}
                placeholder='请输入...'
                onKeyUp={this.keyPressHandler.bind(this)}
                onChange={this.changeValHandler}
            />            
         )
     }
 }
 export default withRouter(SearchInput)