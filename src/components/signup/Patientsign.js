import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import {Paper} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {Chip,Typography} from '@material-ui/core/';
import '../../css/forms.css'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '400px',
    },
    TextField : {
        width: '400px'
    }
  },
}));

export default function Patientsignin() {
  const classes = useStyles();

  return (
   <Paper>
   <div className="center">
   <form className={classes.root}  autoComplete="off">
   <div>
   <Typography  variant="h3" color="primary">Patient SignUp</Typography>
   <br></br>
     <TextField
       id="name"
       label="Name"
       type="text"
     />
     <br></br>
     <TextField
       id="address"
       label="Address"
     />
     <br></br>
     <TextField
       id="age"
       label="Age"
       type="number"
     />
     <br></br>
     <TextField
       id="mobile"
       label="Mobile Number"
       type="text"
     />
     <br></br>
     <TextField
     id="email"
     label="Email"
     type="email"
   />
   <br></br>
     <TextField
       id="allergies"
       label="allergies"
       defaultValue="None"
       type="text"
     />
   </div>
   <br></br>
   <Button variant="contained" color="primary">
        Submit
       </Button>
 </form>
   
    </div>
   </Paper>
  );
}