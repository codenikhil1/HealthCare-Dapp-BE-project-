import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent,CircularProgress} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import web3 from '../../../web3'
import contract from '../../../contract'
import ShowIns from './ShowIns'
import ipfs from '../../../ipfs'
function InsDetails({accAdd}) {
    const[show,setShow] = useState(false);
    const logdata = []
    const [tabledata,settabledata] = useState();
    useEffect(() => {
        async function getDocs(){
        await contract.getPastEvents('insAdded',{
            fromBlock:0
        }).then(async function(events){
                events.forEach(element =>{
                    const object = {}
                    object.InsAdd = element.returnValues[0]; 
                    //console.log(element.returnValues[0])
                    logdata.push(object)
                })
                settabledata(logdata)
                setShow(true);
        });
           
       }
       getDocs()

    },[])
    return (
        <div>
            {show ? <ShowIns data = {tabledata} showData = {show} accAdd = {accAdd}></ShowIns> :
                <CircularProgress></CircularProgress>
            }
             
        </div>
    )
}

export default InsDetails
