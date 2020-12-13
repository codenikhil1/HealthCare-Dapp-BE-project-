import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import  '../css/temp.css'
import {Link} from 'react-router-dom'
import '../css/linkstyle.css'
import Header from './header'
function Main() {
    
    return (
        <div>
        <Header item = "home"></Header>
        <div className ="center">
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
        <Typography variant="h" component="h2" color = "secondary" >
        SIGN UP
      </Typography>
            <Grid item xs className="button">
                 <Link style={{ textDecoration: 'none' }} to="patientsignin">
                     <Button variant="contained">Patient</Button>
                 </Link>
            </Grid>
            <Grid item xs className="button">
                 <Link style={{ textDecoration: 'none' }}  to ="doctorsignin">
                    <Button variant="contained">Doctor</Button>
                 </Link>
            </Grid>
            <Grid item xs className="button">
                 <Link style={{ textDecoration: 'none' }}  to="chemistsignin">
                     <Button variant="contained">Chemist</Button>
                 </Link>
            </Grid>
            <Grid item xs className="button">
                 <Link style={{ textDecoration: 'none' }}  to="insurancesignin">
                    <Button variant="contained">Insaurance</Button>
                 </Link>
            </Grid>
        </Grid>
                
            </div>
        </div>
       
    )
}

export default Main
