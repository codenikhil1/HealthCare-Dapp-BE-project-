import React from 'react'
import Main from './Main'
import Patientsign from './signup/Patientsign'
import Doctorsign from './signup/Doctorsign'
import InsuranceSign from './signup/Insurancesign'
import Chemistsign from './signup/Chemistsign'
import Patient from'./screens/patient/Patient'
import Doctor from './screens/doctor/doctor'
import Chemist from './screens/Chemist/Chemist'
import Insaurance from "./screens/Insaurance/Insaurance"
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
function home() {
    return (
        <Router>
    <div>    
         <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/patientsignin'  component={Patientsign} />
            <Route path='/doctorsignin'  component={Doctorsign} />
            <Route path='/chemistsignin'  component={Chemistsign} />
            <Route path='/insurancesignin'  component={InsuranceSign} />
            <Route path ='/Patient' component={Patient}/>
            <Route path ='/Doctor' component={Doctor}/>
            <Route path ='/Chemist' component={Chemist}/>
            <Route path ='/Insaurance' component={Insaurance}/>
         </Switch>
    
    </div>
        </Router>
    )
}

export default home
