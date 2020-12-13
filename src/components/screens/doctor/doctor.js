import React, { useState } from 'react'
import {Grid,Paper,Typography,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import RightPanel from './RightPanel'
import Header from '../../header'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Doctor() {
    const style ={
        Paper:{padding:20,marginTop:10,marginBottom:20,height:'550px',marginLeft:10}
    }
    const classes = useStyles();
    const[action,setAction] = useState(0)
    function selectAction(action1){
      setAction(action1)
      console.log(action)
    }
    return (

        <div>
        <Header item = "Doctor"></Header>
            <Grid container>
                <Grid item sm = {3}>
                    <Paper style={style.Paper}>
                    <List component="nav" aria-label="main mailbox folders">
                    <ListItem button onClick={() =>selectAction(1)}>
                      <ListItemText primary="Treat Patient" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Send Medication To Chemist" onClick={() =>selectAction(2)} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Approve Appointment" onClick={() =>selectAction(3)} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Update Precaution" onClick={() =>selectAction(4)} />
                    </ListItem>
                  </List>
                    </Paper>
                </Grid>
                <Grid item sm>
                   <RightPanel style ={style} action = {action} ></RightPanel>
                </Grid>
            </Grid>
        </div>
    )
}

export default Doctor
