import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent,Dialog,DialogActions,DialogContent,DialogTitle} 
from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function GetTreat() {
    const [open, setOpen] = useState(false);
    const[treatInfo,SetTreatInfo] = useState(
    {}
    )
    const  handleClickOpen = () => {
     setTest();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const setTest = () =>{
      SetTreatInfo({
        address:"0xxs",test:"hello",diagnosis:"hem"
      })
  }
    return(
        <div>
        <Typography variant="h4" component="h2" color = 'textSecondary'> 
        Get TreatMent Details
        </Typography>
        <br></br>
            <form>
        <TextField 
            id="TreatMentId"
            label="TreatMentId"
            required 
            style={{width:"400px"}} />
            <br></br>
            <br></br>
        <br></br><br></br>
        <Button type="submit" variant="contained" color="secondary" onClick={handleClickOpen}>
            Submit
        </Button>
            </form>
        <br></br><br></br>
        <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                  Treatment Id
                </TableCell>
                
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
          <TableCell>
            Nikhil
          </TableCell>
      </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        TreatMent Details
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Patient Address <h4>{treatInfo.address}</h4>
        </Typography>
        <Typography gutterBottom>
        Diagnosis <h4>{treatInfo.diagnosis}</h4>
        </Typography>
        <Typography gutterBottom>
        Test Conducted <h4>{treatInfo.test}</h4>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
        </div>
    )
}

export default GetTreat
