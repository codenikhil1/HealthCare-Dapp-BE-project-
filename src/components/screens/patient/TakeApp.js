import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import web3 from '../../../web3'
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
        }).then(function(err,res){
          if(res){
            alert("Access Granted")
          }else{
            alert("Not Granted")
          }
        })
      }else{
        alert("Enter valid address")
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
        
        </div>
        
           
    )
}

export default TakeApp
