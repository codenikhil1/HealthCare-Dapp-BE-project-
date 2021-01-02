import React, { useState,useStyles } from 'react'
import {Grid,Paper,Typography,Button,TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Header from '../../header'
import RightPanel from './RightPanel'
import { grey } from '@material-ui/core/colors';
const style ={
    Paper:{
        padding:20,
        marginTop:10,
        marginBottom:20,
        height:'550px',
        marginLeft:10,
        marginRight:10
    }

}


function Chemist() {
  
    return (

        <div>
        <Header item = "Chemist"></Header>
        <Grid container> 
                <Grid item xs = {4}>
                    <Paper style={style.Paper} >
                    <form   autoComplete="off">
                    <div>
                    <Typography  variant="h3" color="primary">Sell Medicines</Typography>
                    <br></br>
                      <TextField
                        id="Pid"
                        label="Patient Address"
                        type="text"
                        variant="standard"
                        required
                      />
                      <br></br>
                      <br></br> 
                      <TextField
                        id="Date"
                        type="date"
                        variant="standard"
                        required
                      />
                      <br></br>
                      <TextField
                        id="amt"
                        label="Amount"
                        type="number"
                        variant="standard"
                        required
                      />
                      <br></br>
                    </div>
                    <br></br>
                    <Button variant="contained" color="primary">
                         Submit
                        </Button>
                  </form>  
                    
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper style={style.Paper} >
                        <RightPanel></RightPanel>
                    </Paper>
                </Grid>
        </Grid>
        </div>
    )
}

export default Chemist;