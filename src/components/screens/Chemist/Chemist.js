import React, { useState,useEffect } from 'react'
import {Grid,Paper,Typography,Button,TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import web3 from '../../../web3'
import Header from '../../header'
import RightPanel from './RightPanel'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contract from '../../../contract'
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
    const [accAdd, setacc] = useState({})
    const [accloaded, setaccloaded] = useState(false)
    useEffect(() => {
      async function loadAcc(){
        await web3.eth.getAccounts().then(async function(acc){
          setacc({accAdd:acc[0]})
          setaccloaded(true);
      })
      }
       loadAcc()
    }, [])
    const [chemData, setchemData] = useState({
      pid:"",date:"",bill:""
    })
    const onChange = (e)=>{
      const id = e.target.id;
      const value = e.target.value;
      setchemData({
        ...chemData,
        [id] : value
      })
      console.log(chemData)
    }
    const onSubmit = (e)=>{
      e.preventDefault();
      console.log(accAdd.accAdd )
      if(web3.utils.isAddress(chemData.pid)){
        contract.methods.sellMedicines(chemData.pid,chemData.date,chemData.bill).send({
          from : accAdd.accAdd
        }).then(function(res){
          toast.success('Sold',{
            position: "top-left",
            autoClose: 3000,
          })
        })
      }else{

      }
    }
    return (

        <div>
        {accloaded && <div>
          <Header item = {accAdd.accAdd}></Header>
          <Grid container> 
                  <Grid item xs = {4}>
                      <Paper style={style.Paper} >
                      <form   autoComplete="off" onSubmit = {onSubmit}>
                      <div>
                      <Typography  variant="h3" color="primary">Sell Medicines</Typography>
                      <br></br>
                        <TextField
                          id="pid"
                          label="Patient Address"
                          type="text"
                          variant="standard"
                          required
                          value = {chemData.pid}
                          onChange = {onChange}
                        />
                        <br></br>
                        <br></br> 
                        <TextField
                          id="date"
                          type="date"
                          variant="standard"
                          required
                          value = {chemData.date}
                          onChange = {onChange}
                        />
                        <br></br>
                        <TextField
                          id="bill"
                          value = {chemData.bill}
                          onChange = {onChange}
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
                          <RightPanel accAdd = {accAdd.accAdd}></RightPanel>
                      </Paper>
                  </Grid>
          </Grid>
          </div>}
        </div>
    )
}

export default Chemist;