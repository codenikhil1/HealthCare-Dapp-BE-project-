import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const style = {
    TextField : {width : '400px' }
}
function RightPanel(props) {
    console.log(props)
    return (
        <div>
        <Paper style={props.style.Paper}>
            {props.action == 0 ? <Typography variant="h2" component="h2" color = 'textSecondary'> 
            Patient Dashboard
       </Typography> : 
            props.action == 1 ? TakeAppointment() :
            props.action == 2 ? OwnDetails() : 
            props.action == 3 ? DoctorDetails() : 
            props.action == 4 ? InsuranceCompanyDetails() :
            props.action == 5 ? ApplyInsurance() : "" }
        </Paper>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '400px',
      },
    },
  }));
  
function TakeAppointment(){
    const classes = useStyles();
    const [isShow,SetShow] = useState(false)
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
             Take Appointment
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField className = {{width:'400px'}} id="standard-basic" label="Doctor Address" variant="standard" />
        <br></br>
        <Button variant="contained" color="secondary">
           Apply
        </Button>
        </form>
        <br></br>
        <Button style = {{marginTop : '50px'}} onClick = {() =>{SetShow(!isShow)}} color="secondary" >
                Show Dotors
        </Button>
        <br></br>
        {isShow ? <h1> Doctors</h1> : ""}
        
        </div>
        
           
    )
}
function OwnDetails(){
    return(
        <div>
        <Card >
        <CardContent>
        <Typography style={{fontSize:50}} color="textSecondary" gutterBottom>
            Nikhil Sonawane
      </Typography>
          <Typography variant="h5" component="h2">
            Address : Baramati
          </Typography>
          <Typography variant="h5" component="h2">
            Mobile No : 9673614667
          </Typography>
          <Typography variant="h5" component="h2">
            Allergies : Mad
          </Typography>
          
        </CardContent>
      </Card>
        </div>
    )
}
function DoctorDetails(){
    return(
        <h1>Doctor Details</h1>
    )
}
function InsuranceCompanyDetails(){
    return(
        <h1>Insurance Comapnay Details</h1>
    )
}
function ApplyInsurance(){
    const classes = useStyles();
    const [isShow,SetShow] = useState(false)
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
             Apply For Insaurance
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField className = {{width:'400px'}} id="standard-basic" label="Insurance Company Address" variant="standard" />
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
export default RightPanel
