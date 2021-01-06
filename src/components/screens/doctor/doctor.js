import React, { useState,useEffect } from 'react'
import {Grid,Paper,Typography,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RightPanel from './RightPanel'
import Header from '../../header'
import web3 from '../../../web3'
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

    const [acc,setacc] = useState({accAdd : ""})

    const[isloaded,setLoaded] = useState(false);

    useEffect(() => {
      async function loadAcc(){
        await web3.eth.getAccounts().then(async function(acc){
          setacc({accAdd:acc[0]})
          setLoaded(true);
      })
      }
       loadAcc()
    },[])


    return (

       <div>
        {isloaded &&  <div>
          <Header item = {acc.accAdd}></Header>
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
                        <ListItemText primary="Get Treatment Details" onClick={() =>selectAction(3)} />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Update Precaution" onClick={() =>selectAction(4)} />
                      </ListItem>
                    </List>
                      </Paper>
                  </Grid>
                  <Grid item sm>
                     <RightPanel accAdd ={acc.accAdd} style ={style} action = {action} ></RightPanel>
                  </Grid>
              </Grid>
          </div>}
       </div>
    )
}

export default Doctor
