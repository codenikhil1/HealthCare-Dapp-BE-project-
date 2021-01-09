import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import web3 from '../../../web3'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contract from '../../../contract'
function SendMed({accAdd}) {
    const [MedInfo, setMedInfo] = useState({
      pid:"",date:"",medicines:""
    })
    const onChangeHandler = (e)=>{
      const id = e.target.id;
      const value = e.target.value;
      setMedInfo({
        ...MedInfo,
        [id] : value
      })
      console.log(MedInfo)
    }
    const onSubmit = async (event)=>{
      console.log("submit called")
      event.preventDefault();
      if( await web3.utils.isAddress(MedInfo.pid)){
        await contract.methods.giveMedicines(MedInfo.pid,MedInfo.medicines,MedInfo.date).send({
          from:accAdd,gas:300000
        }).then(function(res){
          toast.success('Medications send successfully',{
            position: "top-left",
            autoClose: 4000,
          })
        })
      }else{
        toast.error('Patient  Address is incorrest',{
          position: "top-left",
          autoClose: 4000,
        })
      }
    }
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
        Send Medications To Chemist
        </Typography>
        <br></br>
            <form onSubmit = {onSubmit}>
            <TextField
             value = {MedInfo.pid}
             id="pid" 
             label="Patient Address"
             onChange={onChangeHandler} 
             required style={{width:"400px"}} />
            <br></br>
            <br></br>
            <TextField 
            id="date" 
            onChange={onChangeHandler}
            value = {MedInfo.date} 
            type='date'
            required style={{width:"400px"}} />
            <br></br>
            <br></br>
            <TextField
          id="medicines"
          label="Medicines"
          value = {MedInfo.medicines}
          onChange={onChangeHandler}
          multiline
          rows={2}
          required
          variant="outlined"
          style={{width:"400px"}}
        />
        <br></br><br></br>
        <Button variant="contained" color="secondary">
            Submit
        </Button>
            </form>
        <br></br><br></br>
        </div>
    )
}

export default SendMed
