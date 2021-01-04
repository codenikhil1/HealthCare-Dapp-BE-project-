import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Chip,Typography} from '@material-ui/core/';
import '../../css/forms.css'
import Header from '../header'
import web3 from '../../web3'
import ipfs from '../../ipfs'
import contract from '../../contract'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '400px',
    },
    TextField : {
        width: '400px'
    }
  },
}));

export default function Chemitsignin() {
  const classes = useStyles();
  const [ChemData, setData] = useState(
    {name:"",address:"",mobNo:"",email:""}
 )
 
   const handleChange = (event)=>{
     const id =event.target.id ;
     console.log(id)
     var value = event.target.value;
     setData({
       ...ChemData,
        [id] : value
     })
     console.log(ChemData)
   }

   const  submitForm = async (event) =>{
       event.preventDefault();
       await web3.eth.getAccounts().then(async function(acc){
         console.log(acc[0]);
         await ipfs.addJSON(ChemData,async (err,hash)=>{
           if(err){
             alert("Problem on storing IPFS")
           }else{
             await contract.methods.addChemist(hash).send({
                       from : acc[0],gas:3000000
                      }).then(function(err2,result){
                        if(err){
                          alert("User already present")
                        }else{
                         console.log(hash);
                          console.log(result)
                          alert("Successfull")
                  }
             })
           }
         })

       })
       alert("form submitted")
   }
  return (
    <div>
      <Header item = "signUp"></Header>
    <div className="center">
    <form className={classes.root} onSubmit={submitForm} autoComplete="off">
    <div>
    <Typography  variant="h3" color="primary">Chemist SignUp</Typography>
    <br></br>
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="standard"
        value={ChemData.name}
        onChange={handleChange}
        required
      />
      <br></br>
      <TextField
        id="address"
        label="Address"
        onChange={handleChange}
        value={ChemData.address}
        variant="standard"
        required
      />
      <br></br>
      <TextField
        id="mobNo"
        label="Mobile Number"
        type="text"
        onChange={handleChange}
        variant="standard"
        value={ChemData.mobile}
        required
      />
      <br></br>
      <TextField
      id="email"
      label="Email"
      type="email"
      onChange={handleChange}
      variant="standard"
      value={ChemData.email}
      required
    />
    <br></br>
    </div>
    <br></br>
    <Button variant="contained" color="primary">
         Submit
        </Button>
  </form>
    </div>
    </div>
  );
}