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

function ApplyIns({accAdd}) {
    const classes = useStyles();
    const[insAdd,setInsAdd] = useState();
    const ApplyIns = (e) =>{
        e.preventDefault();
        if( web3.utils.isAddress(insAdd)){
          contract.methods.applyIns(insAdd).send({
            from:accAdd
          }).then(function(res){
            alert("Applied")
          })
        }else{
          alert("Enter valid address")
        }
    }
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
             Apply For Insaurance
        </Typography>
        <form className={classes.root} onSubmit={ApplyIns} noValidate autoComplete="off">
        <TextField className = {{width:'400px'}} id="standard-basic"
          onChange={e => setInsAdd(e.target.value)}
        label="Insurance Company Address" variant="standard" required/>
        <br></br>
        <Button variant="contained" color="secondary" >
           Apply
        </Button>
        </form>
        <br></br>
        
        
        </div>
        
           
    )
}

export default ApplyIns
