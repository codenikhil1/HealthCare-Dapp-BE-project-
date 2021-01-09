import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent,Dialog,DialogActions,DialogContent,DialogTitle} 
from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import web3 from '../../../web3'
import contract from '../../../contract'
function Updatepre({accAdd}) {
    const [precautions, setprecautions] = useState({
      pid:"",precautions:""
    })
    const onChange = (e) =>{
      const id = e.target.id;
      const value = e.target.value;
      setprecautions({
        ...precautions,
        [id] : value
      })
    }
    const onSubmit = (event) => {
      event.preventDefault();
      if(!web3.utils.isAddress(precautions.pid)){
        toast.error('Enter Valid Address',{
          position: "top-left",
          autoClose: 4000,
        })
      }else{
        contract.methods.updatePrecautions(precautions.pid,precautions.precautions).send({
          from:accAdd
        }).then(function(res){
          toast.success('precautions Updated',{
            position: "top-left",
            autoClose: 4000,
          })
        })
      }
      
    }
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
        Update Precautions
        </Typography>
        <br></br>
            <form onSubmit = {onSubmit}>
            <TextField 
            id="pid" 
            value = {precautions.pid}
            onChange = {onChange}
            label="Patient Address" 
            required style={{width:"400px"}} />
            <br></br>
            <br></br>
            <TextField
          id="precautions"
          label="precautions"
          multiline
          rows={2}
          required
          value = {precautions.precautions}
          onChange = {onChange}
          variant="outlined"
          style={{width:"400px"}}
        />
        <br></br><br></br>
        <Button variant="contained" color="secondary">
            Submit
        </Button>
            </form>
        </div>
    )
}

export default Updatepre
