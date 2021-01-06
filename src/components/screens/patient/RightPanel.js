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
import TreatMent from "./TreatMentDetails/TreatMent"
import Bills from "./Bills/Bills"
const style = {
    TextField : {width : '400px' }
}
function RightPanel(props) {
    return (
        <div>
        <Paper style={props.style.Paper}>
            {props.action == 0 ? <Typography variant="h2" component="h2" color = 'textSecondary'> 
            Patient Dashboard
       </Typography> : 
            props.action == 1 ? <TakeApp accAdd = {props.accAdd}></TakeApp>:
            props.action == 2 ? <MyDetails accAdd = {props.accAdd}></MyDetails> : 
            props.action == 3 ? <DoctorDetails accAdd = {props.accAdd}></DoctorDetails> : 
            props.action == 4 ? <InsDetails accAdd = {props.accAdd}></InsDetails> :
            props.action == 5 ? <ApplyIns accAdd = {props.accAdd}></ApplyIns> : 
            props.action == 6 ? <TreatMent accAdd = {props.accAdd}></TreatMent> :
            props.action == 7 ? <Bills accAdd = {props.accAdd}></Bills> :""
        }
        </Paper>
        </div>
    )
}

export default RightPanel
