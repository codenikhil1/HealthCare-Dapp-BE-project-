import * as React from 'react';
import {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
import web3 from '../web3'
import contract from '../contract'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [user, setUser] = useState({user:''})
  useEffect(() => {
    async function loadAcc(){
      await web3.eth.getAccounts().then(async function(acc){
        contract.methods.getUser(acc[0]).call().then(async function(res){
          console.log(res)
          setUser({user:res})
        })
    })
    }
    loadAcc();
  }, [])
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
          <Link to="/" style={{ textDecoration: 'none', color:'white'}}>
          <Typography variant="h6" className={classes.title} component="div">
          HealthCare
        </Typography>
          </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title} component="div">
          </Typography>
          {props.item == "home" ? <Link style={{ textDecoration: 'none',color:'white' }} to={user.user}>
          <Button  color="inherit">Login</Button>
       </Link> : props.item != "signUp" ? <h3>{props.item}</h3> : ""}
        </Toolbar>
      </AppBar>
    </div>
  );
}