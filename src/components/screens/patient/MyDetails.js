import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
function MyDetails() {
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

export default MyDetails
