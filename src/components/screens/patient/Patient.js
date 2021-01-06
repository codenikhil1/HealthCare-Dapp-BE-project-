import React from 'react'
import {Grid,Paper,Typography,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect} from 'react'
import web3 from '../../../web3'
import contract from '../../../contract'
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

function Patient() {
    const style ={
        Paper:{padding:20,marginTop:10,marginBottom:20,height:'550px',marginLeft:10}
    }
    const [acc,setacc] = useState({accAdd : ""})
    const[isloaded,setLoaded] = useState(false);
    const classes = useStyles();
    const[action,setAction] = useState(0)
    function selectAction(action1){
      setAction(action1)
      console.log(action)
    }
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
                      <ListItemText primary="Grant Access" />
                    </ListItem>
                    <ListItem  button>
                      <ListItemText primary="Get Your Details"  onClick={() =>selectAction(2)} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Get Doctor Details" onClick={() =>selectAction(3)} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Get Insurance Company Details" onClick={() =>selectAction(4)} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Apply For Insurance" onClick={() =>selectAction(5)} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="TreatMent Details" onClick={() =>selectAction(6)} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Medicines Info" onClick={() =>selectAction(7)} />
                    </ListItem>
                  </List>
                    </Paper>
                </Grid>
                <Grid item sm>
                   <RightPanel accAdd = {acc.accAdd} style ={style} action = {action} ></RightPanel>
                </Grid>
            </Grid>
            </div>}
        </div>
    )
}

export default Patient
