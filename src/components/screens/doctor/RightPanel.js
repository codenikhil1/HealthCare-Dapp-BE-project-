import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const style = {
    TextField : {width : '400px' }
}
function RightPanel(props) {
    console.log(props)
    return (
        <div>
        <Paper style={props.style.Paper}>
            {props.action == 0 ? <Typography variant="h2" component="h2" color = 'textSecondary'> 
            Doctor Dashboard
       </Typography> : 
            props.action == 1 ? TreatPatient() :
            props.action == 2 ? sendMedications() : 
            props.action == 3 ?"": 
            props.action == 4 ? UpdatePrecautions() :"" }
        </Paper>
        </div>
    )
}
function TreatPatient(){
    return(
        <form   autoComplete="off">
  <div>
  <Typography variant="h4" component="h2" color = 'textSecondary'> 
        Treat Patient
  </Typography>
  <br></br>
    <TextField
      id="Patient Address"
      label="Patient Address"
      type="text"
      variant="standard"
      style={{width:'400px'}}
    />
    <br></br>
    <TextField
      id="Doctor Address"
      label="Doctor Address"
      variant="standard"
      style={{width:'400px'}}
    />
    <br></br>
    <TextField
      id="Diagnosis"
      label="Diagnosis"
      type="text"
      variant="standard"
      style={{width:'400px'}}
    />
    <br></br>
    <TextField
      id="Tesr Conducted"
      label="Test Conducted"
      type="text"
      variant="standard"
      style={{width:'400px'}}
    />
    <br></br>
    <TextField
    id="Bill"
    label="Bill"
    type="number"
    variant="standard"
    style={{width:'400px'}}
  />
  </div>
  <br></br>
  <Button variant="contained" color="primary">
       Submit
      </Button>
</form>
    )
}
function UpdatePrecautions(){
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
        Update Precautions
        </Typography>
        <br></br>
            <form>
            <TextField id="standard" label="Patient Address" required style={{width:"400px"}} />
            <br></br>
            <br></br>
            <TextField
          id="precautions"
          label="precautions"
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
        <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
          <TableCell>
            Nikhil
          </TableCell>
          <TableCell>
            0x54512154
          </TableCell>
      </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        
        </div>
    )
}
function sendMedications(){
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
        Send Medications To Chemist
        </Typography>
        <br></br>
            <form>
            <TextField id="standard" label="Patient Address" required style={{width:"400px"}} />
            <br></br>
            <br></br>
            <TextField
          id="Medicines"
          label="Medicines"
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
        <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
          <TableCell>
            Nikhil
          </TableCell>
          <TableCell>
            0x54512154
          </TableCell>
      </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        
        </div>
    )
}
export default RightPanel

