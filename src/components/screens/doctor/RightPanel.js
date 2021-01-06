import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import  TreatPatient from"./TreatPatient"
import GetTreat from "./TreatMent/GetTreat"
import UpdatePre from './Updatepre'
import  SendMed from"./SendMed"
const style = {
    TextField : {width : '400px' }
}
function RightPanel(props) {
    console.log(props)
    return (
        <div>
        <Paper style={props.style.Paper}>
            {props.action == 0 ? <Typography variant="h2" component="h2" color = 'textSecondary'> 
            Doctor Dashboard
       </Typography> : 
            props.action == 1 ? <TreatPatient accAdd = {props.accAdd}></TreatPatient> :
            props.action == 2 ? <SendMed accAdd = {props.accAdd}></SendMed> : 
            props.action == 3 ? <GetTreat accAdd = {props.accAdd}></GetTreat>: 
            props.action == 4 ? <UpdatePre accAdd = {props.accAdd}></UpdatePre> :"" }
        </Paper>
        </div>
    )
}
export default RightPanel

