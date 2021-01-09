import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent,Alert} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import web3 from '../../../web3'
import ipfs from '../../../ipfs'
import contract from '../../../contract'
function TreatPatient({accAdd}) {

    const [TreatInfo, setTreatInfo] = useState({
      pid:"",did:accAdd,diagnosis:"",tests:"",bill:"",medicines:""
    })
    const handleChange = (event)=>{
      const id =event.target.id ;
      console.log(id)
      var value = event.target.value;
      setTreatInfo({
        ...TreatInfo,
        [id] : value
      })
      console.log(TreatInfo)
    }
    const SubmitForm = async (event)=>{
      event.preventDefault();
      if(web3.utils.isAddress(TreatInfo.pid)){
        ipfs.addJSON(TreatInfo, (err, result) => {
          if(err){
            toast.error('Problem Storing Data on IPFS',{
              position: "top-left",
              autoClose: 4000,
            })
          }else{
            contract.methods.treatPatient(TreatInfo.pid,result).send({
              from:accAdd,gas:3000000
            }).then(function(res){
              toast.success('Patient Treated',{
                position: "top-left",
                autoClose: 4000,
              })
            })
          }
        });

      }else{
          toast.error('Enter Valid Patient Address',{
            position: "top-left",
            autoClose: 4000,
          })
        //alert("enter valid patient address")
      }
    }
        return(
            <div>
            <form   autoComplete="off" onSubmit = {SubmitForm}>
            <div>
            <Typography variant="h4" component="h2" color = 'textSecondary'> 
                  Treat Patient
            </Typography>
            <br></br>
              <TextField
                id="pid"
                label="Patient Address"
                type="text"
                variant="standard"
                value={TreatInfo.pid}
                style={{width:'400px'}}
                onChange={handleChange}
                required
              />
              <br></br>
             
              <TextField
                id="diagnosis"
                label="Diagnosis"
                type="text"
                variant="standard"
                style={{width:'400px'}}
                value={TreatInfo.diagnosis}
                onChange={handleChange}
                required
              />
              <br></br>
              <TextField
                id="tests"
                label="Test Conducted"
                type="text"
                variant="standard"
                style={{width:'400px'}}
                onChange={handleChange}
                value={TreatInfo.tests}
                required
              />
              <br></br>
              <TextField
              id="bill"
              label="Bill"
              type="number"
              variant="standard"
              style={{width:'400px'}}
              value={TreatInfo.bill}
              onChange={handleChange}
              required
            />
            <br></br>
            <TextField
              id="medicines"
              label="medicines"
              type="string"
              variant="standard"
              style={{width:'400px'}}
              onChange={handleChange}
              value={TreatInfo.medicines}
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
