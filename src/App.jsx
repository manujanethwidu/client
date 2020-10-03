import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Resturantpage from './route/Resturantpage'
import Home from './route/Home'
import Update from './route/Update'
import { ResturantcontextProvider } from './context/Resturantcontext'

const App = ()=>{
    return (
        <ResturantcontextProvider>
            <div className='container'>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/Resturants/:id/Update" component={Update}/> 
                <Route exact path="/Resturants/:id" component={Resturantpage}/> 



            </Switch>



        </Router>
        </div>

        </ResturantcontextProvider>)
       
   
}
  export  default App