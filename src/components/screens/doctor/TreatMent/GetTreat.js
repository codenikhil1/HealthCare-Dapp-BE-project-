import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,CircularProgress} 
from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import TreatDialog from './TreatDialog'
import { makeStyles } from '@material-ui/core/styles';
import contract from '../../../../contract'
import ipfs from '../../../../ipfs'
import TreatTable from './TreatTable'
function GetTreat({accAdd}) {
    const [open, setOpen] = useState(false);
    const [isLoaded, setisLoaded] = useState(false);
    const[TreatId,setTreatId] = useState();
    const[treatInfo,SetTreatInfo] = useState(
    {}
    )
    const logdata = []
    const [tabledata,settabledata] = useState();
    useEffect(() => {
        async function getTreatId(){
            await contract.getPastEvents('treated',{
                filter :{Did : accAdd},
                fromBlock:0
            }).then(async function(events){
                    events.forEach(element =>{
                        const object = {}
                        object.Tid = element.returnValues[2]; 
                        //console.log(element.returnValues[0])
                        logdata.push(object)
                    })
                    settabledata(logdata)
                    setisLoaded(true);
            }); 
           }
           getTreatId()
    }, [])
  const  handleClickOpen = async (e) => {
    e.preventDefault();
     await setTest(e);
     
  };
  const handleClose = () => {
    setOpen(false);
  };
  const setTest = async (e) =>{
   await contract.methods.getTrtDetails(TreatId).call().then(function(res){
      ipfs.catJSON(res)
      .then(async function(treatData){
        await SetTreatInfo({
          pid:treatData.pid,diagnosis:treatData.diagnosis,
          tests:treatData.tests,bill:treatData.bill,medicines:treatData.medicines
        })
        setOpen(true);
      })
      .catch(console.log)
    })
  }
    return(
        <div>
        {isLoaded ?<div>
          <Typography variant="h4" component="h2" color = 'textSecondary'> 
        Get TreatMent Details
        </Typography>
        <br></br>
            <form onSubmit ={handleClickOpen}>
        <TextField 
            id="TreatMentId"
            label="TreatMentId"
            value={TreatId}
            required 
            onChange={e => setTreatId(e.target.value) }
            style={{width:"400px"}} />
            <br></br>
            <br></br>
        <br></br><br></br>
        <Button type="submit" variant="contained" color="secondary" >
            Submit
        </Button>
            </form>
        <br></br><br></br>
       
      <TreatTable data = {tabledata}></TreatTable>
      <TreatDialog handleClose = {handleClose} treatInfo = {treatInfo} open = {open}
      ></TreatDialog>
          </div> : <CircularProgress></CircularProgress>}
        </div>
    )
}

export default GetTreat
