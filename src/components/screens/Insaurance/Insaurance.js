import React, { useState,useEffect } from 'react'
import {Grid,Paper,Typography,Button,TextField} from '@material-ui/core'
import Header from '../../header'
import RightPanel from './RightPanel'
import web3 from '../../../web3'
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


function Insaurance() {
    const [accAdd, setaccAdd] = useState()
    const [isLoaded, setisLoaded] = useState(false)
    useEffect(() => {
        async function loadAcc(){
          await web3.eth.getAccounts().then(async function(acc){
            setaccAdd(acc[0])
            setisLoaded(true);
        })
        }
         loadAcc()
      },[])
      const [patientAdd, setpatientAdd] = useState()
      const onChange = (e)=>{
        setpatientAdd(e.target.value);
      }
      const onSubmit = (e)=>{
            e.preventDefault();
            if(web3.utils.isAddress(patientAdd)){
                    contract.methods.approveInsurance(patientAdd).send({
                        from:accAdd
                    }).then(function(res){
                        alert('success')
                    })
            }else{
                    alert('wrong address')
            }   
      }
    return (

        <div>
        {isLoaded && <div>
            <Header item = {accAdd}></Header>
        <Grid container> 
                <Grid item xs = {4}>
                    <Paper style={style.Paper} >
                    <form   autoComplete="off" onSubmit={onSubmit}>
                    <div>
                    <Typography  variant="h4" color="primary">Approve Insaurance</Typography>
                    <br></br>
                      <TextField
                        id="pid"
                        label="Patient Address"
                        type="text"
                        value={patientAdd}
                        variant="standard"
                        required
                        onChange = {onChange}
                      />
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
                        <RightPanel accAdd ={accAdd}></RightPanel>
                    </Paper>
                </Grid>
        </Grid>
            </div>}
        </div>
    )
}

export default Insaurance;