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
function updatepre() {
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

export default updatepre
