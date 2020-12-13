import React from 'react'
import Header from './header'
import Main from './Main'
import Patientsign from './signup/Patientsign'
import Doctorsign from './signup/Doctorsign'
import InsuranceSign from './signup/Insurancesign'
import Chemistsign from './signup/Chemistsign'
import Patient from'./screens/patient/Patient'
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom'
function home() {
    return (
        <Router>
    <div>    
        <Header></Header>
         <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/patientsignin'  component={Patientsign} />
            <Route path='/doctorsignin'  component={Doctorsign} />
            <Route path='/chemistsignin'  component={Chemistsign} />
            <Route path='/insurancesignin'  component={InsuranceSign} />
            <Route path ='/Patient' component={Patient}/>
         </Switch>
    
    </div>
        </Router>
    )
}

export default home
