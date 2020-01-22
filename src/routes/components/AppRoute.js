import React from 'react'
import * as RoutePath from '../route'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";
import {SumitMail} from '../../features/SubmitMail/components/SubmitMail'
import App from '../../App'

const AppRoute = () =>{

     return (
         <Router>
             <Switch>
                 <Route path={`${RoutePath.Submit}`} exact component={SumitMail}/>
                 <Redirect to={`${RoutePath.Submit}`}/>
             </Switch>
         </Router>
     )

}
export default AppRoute