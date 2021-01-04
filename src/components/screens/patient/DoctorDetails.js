import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent,CircularProgress} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import web3 from '../../../web3'
import contract from '../../../contract'
import ipfs from '../../../ipfs'
import ShowDoctors from './ShowDoctors'
function DoctorDetails() {
    const[show,setShow] = useState(false);
    const logdata = []
    const [tabledata,settabledata] = useState();
    useEffect(() => {
        async function getDocs(){
        await contract.getPastEvents('DoctorAdded',{
            fromBlock:0
        }).then(async function(events){
                events.forEach(element =>{
                    const object = {}
                    object.docAdd = element.returnValues[0]; 
                    //console.log(element.returnValues[0])
                    logdata.push(object)
                })
                settabledata(logdata)
                setShow(true);
        });
           
       }
       getDocs()

    },[show])
    return (
        <div>
            {show ? <ShowDoctors data = {tabledata} showData = {show}></ShowDoctors> :
                <CircularProgress></CircularProgress>
            }
             
        </div>
    )
}

export default DoctorDetails
//<Button onClick = { e => setShow(true)}>Show Doctors</Button>