import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import {Chip,Typography} from '@material-ui/core/';
import '../../css/forms.css'
import Header from '../header'
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

export default function Chemitsignin() {
  const classes = useStyles();

  return (
    <div>
      <Header item = "signUp"></Header>
    <div className="center">
    <form className={classes.root}  autoComplete="off">
    <div>
    <Typography  variant="h3" color="primary">Chemist SignUp</Typography>
    <br></br>
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="standard"
        required
      />
      <br></br>
      <TextField
        id="address"
        label="Address"
        variant="standard"
        required
      />
      <br></br>
      <TextField
        id="age"
        label="Age"
        type="number"
        variant="standard"
        required
      />
      <br></br>
      <TextField
        id="mobile"
        label="Mobile Number"
        type="text"
        variant="standard"
        required
      />
      <br></br>
      <TextField
      id="email"
      label="Email"
      type="email"
      variant="standard"
      required
    />
    <br></br>
      <TextField
        id="allergies"
        label="allergies"
        defaultValue="None"
        type="text"
        variant="standard"
        required
      />
    </div>
    <br></br>
    <Button variant="contained" color="primary">
         Submit
        </Button>
  </form>
    </div>
    </div>
  );
}