import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MyDetails from "./MyDetails"
import DoctorDetails from "./DoctorDetails"
import  InsDetails from "./InsDetails"
import TakeApp from "./TakeApp"
import ApplyIns from "./ApplyIns"
const style = {
    TextField : {width : '400px' }
}
function RightPanel(props) {
    console.log(props)
    return (
        <div>
        <Paper style={props.style.Paper}>
            {props.action == 0 ? <Typography variant="h2" component="h2" color = 'textSecondary'> 
            Patient Dashboard
       </Typography> : 
            props.action == 1 ? <TakeApp></TakeApp>:
            props.action == 2 ? <MyDetails></MyDetails> : 
            props.action == 3 ? <DoctorDetails></DoctorDetails> : 
            props.action == 4 ? <InsDetails></InsDetails> :
            props.action == 5 ? <ApplyIns></ApplyIns> : "" }
        </Paper>
        </div>
    )
}

export default RightPanel
