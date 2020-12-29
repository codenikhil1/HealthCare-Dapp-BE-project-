import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import {Paper,Card,CardActionArea,CardMedia,CardContent} from '@material-ui/core/'
import  '../css/temp.css'
import {Link} from 'react-router-dom'
import '../css/linkstyle.css'
import Route from 'react-router-dom'
import Header from './header'
import Pimage from "../photos/patient.png"
import Dimage from "../photos/doctor.png"
import Cimage from "../photos/chemist.png"
import Iimage from "../photos/insaurance.png"
function Main() {
    const useStyles = makeStyles({
        root: {
          maxWidth: 500,
          marginTop : 50,
          marginLeft : 50,
        },
        media: {
          height: 140,
        },
        Card: {
            display : 'flex',
            justifyContent:'center'

        }
      });
      const classes = useStyles();
    return (
        <div>
        <Header item = "home"></Header>
            <div className={classes.Card}>
            <Link to="/patientsignin" style={{ textDecoration: 'none'}}>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Pimage}
                title="Register As Patient"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Patient
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sign Up As Patient
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
            </Link>
            <Link to="/doctorsignin" style={{ textDecoration: 'none'}}>
            <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Dimage}
                title="Register As Doctor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Doctor
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sign Up As Doctor
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
            </Link>
            <Link to="/chemistsignin" style={{ textDecoration: 'none'}}>
            <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Cimage}
                title="Register As Chemist"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Chemist
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sign Up As Chemist
                </Typography>
              </CardContent>
            </CardActionArea>
            </Card>
            </Link>
           <Link to="/insurancesignin" style={{ textDecoration: 'none'}}>
           <Card className={classes.root} >
           <CardActionArea>
             <CardMedia
               className={classes.media}
               image={Iimage}
               title="Register As Insaurance Company"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="h2">
                 Ins. Company
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                 Sign Up As Insaurance Company
               </Typography>
             </CardContent>
           </CardActionArea>
           </Card>
           </Link>
        </div>
        </div>
       
    )
}

export default Main
