import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import web3 from '../../../web3'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contract from '../../../contract'
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '400px',
      },
    },
  }));
function TakeApp(props) {
    const classes = useStyles();
    const [docAdd,setDocAdd] = useState("");
    const grantAccess = (event)=>{
      event.preventDefault();
      if( web3.utils.isAddress(docAdd)){
        contract.methods.grantAccess(docAdd).send({
          from:props.accAdd
        }).then(function(res){
          toast.success('Access Granted',{
            position: "top-left",
            autoClose: 4000,
          })
        })
      }else{
        toast.error('Enter Valid Address',{
          position: "top-left",
          autoClose: 4000,
        })
      }
      
    }
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
             Grant Access To Doctor
        </Typography>
        <form className={classes.root}  onSubmit = {grantAccess} autoComplete="off">
        <TextField  id="standard-basic" label="Doctor Address" variant="standard" required 
          onChange = {e => setDocAdd(e.target.value)}
        />
        <br></br>
        <Button variant="contained" color="secondary">
           Apply
        </Button>
        </form>
        <br></br>
        <ToastContainer />
        </div>
        
           
    )
}

export default TakeApp
