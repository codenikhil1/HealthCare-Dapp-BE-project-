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

export default function ButtonAppBar() {
  const classes = useStyles();
  const [user, setUser] = useState({user:'Patient'})
  useEffect(()=>{
    console.log(user)
  })

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
          <Link style={{ textDecoration: 'none',color:'white' }} to={user.user}>
             <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}