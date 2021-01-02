import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '400px',
      },
    },
  }));

function ApplyIns() {
    const classes = useStyles();
    const [isShow,SetShow] = useState(false)
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
             Apply For Insaurance
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField className = {{width:'400px'}} id="standard-basic" label="Insurance Company Address" variant="standard" required/>
        <br></br>
        <Button variant="contained" color="secondary">
           Apply
        </Button>
        </form>
        <br></br>
        <Button style = {{marginTop : '50px'}} onClick = {() =>{ SetShow(!isShow)}} color="secondary">
                Show Insurance Companys
        </Button>
        <br></br>
        {isShow ? <h1> Companys</h1> : ""}
        
        </div>
        
           
    )
}

export default ApplyIns
