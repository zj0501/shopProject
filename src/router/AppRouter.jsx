import React from 'react'
import { HashRouter,Route,Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Mine from '../pages/Mine'
import LifeServer from '../pages/LifeServer'
import NotFount from '../pages/NotFount'
import City from '../pages/City'
import Layout from '../pages/Layout'
import Search from '../pages/Search'
 export default class AppRouter extends React.Component{
     render(){
         return(
             <HashRouter>
                <Layout path='/'>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/shop' component={Shop}></Route>
                        <Route path='/mine' component={Mine}></Route>
                        <Route path='/life' component={LifeServer}></Route>
                        <Route path='/city' component={City}></Route>
                        <Route path='/search/:keywords' component={Search}></Route>
                        <Route component={NotFount}></Route>                    
                    </Switch>
                </Layout>                 
             </HashRouter>
         )
     }
 }