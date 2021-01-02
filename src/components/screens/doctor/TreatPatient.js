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
function TreatPatient() {
        return(
            <div>
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
                required
              />
              <br></br>
             
              <TextField
                id="Diagnosis"
                label="Diagnosis"
                type="text"
                variant="standard"
                style={{width:'400px'}}
                required
              />
              <br></br>
              <TextField
                id="Tesr Conducted"
                label="Test Conducted"
                type="text"
                variant="standard"
                style={{width:'400px'}}
                required
              />
              <br></br>
              <TextField
              id="Bill"
              label="Bill"
              type="number"
              variant="standard"
              style={{width:'400px'}}
              required
            />
            <br></br>
            <TextField
              id="medicines"
              label="medicines"
              type="string"
              variant="standard"
              style={{width:'400px'}}
              required
            />
            </div>
            <br></br>
            <Button variant="contained" color="primary">
                 Submit
                </Button>
          </form>
            </div>
         )
}

export default TreatPatient
