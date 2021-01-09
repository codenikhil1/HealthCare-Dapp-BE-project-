import React from 'react'
import {useState,useEffect} from 'react'
import {Paper,Button,Typography,Card,CardContent,CircularProgress} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import web3 from '../../../web3'
import contract from '../../../contract'
import ipfs from '../../../ipfs'
function MyDetails(props) {
    const[infoLoaded,setInfoLoaded] = useState(false);
    const[mydata,setMyData] = useState({
      name:"",address:"",mobNo:"",allergies:"",age:"",email:"",precautions:""
    })
    useEffect(() => {
        async function loadDetails(){
            contract.methods.getPatient(props.accAdd).call({
              from:props.accAdd
            }).then(async function(mydata){
              await ipfs.catJSON(mydata[0]).
              then(function(ipfsdata){
                console.log(ipfsdata)
                setMyData({
                  name : ipfsdata.name,
                  address : ipfsdata.address,
                  mobNo : ipfsdata.mobNo,
                  allergies : ipfsdata.allergies,
                  age: ipfsdata.age,
                  email : ipfsdata.email,
                  precautions:mydata[2]
                })
                setInfoLoaded(true);
              }).
              catch(console.log);
            })
        }
        loadDetails();
    }, [])
    return(
        <div>
        {infoLoaded ?  <div>
          <Card >
          <CardContent>
          <Typography style={{fontSize:50}} color="textSecondary" gutterBottom>
              {mydata.name}
        </Typography>
            <Typography variant="h5" component="h2">
              Address : {mydata.address}
            </Typography>
            <Typography variant="h5" component="h2">
              Mobile No : {mydata.mobNo}
            </Typography>
            <Typography variant="h5" component="h2">
              Age : {mydata.age}
            </Typography>
            <Typography variant="h5" component="h2">
              Email : {mydata.email}
            </Typography>
            <Typography variant="h5" component="h2">
              Allergies : {mydata.allergies}
            </Typography>
            <Typography variant="h5" component="h2">
              precautions : {mydata.precautions}
            </Typography>
          </CardContent>
        </Card>
          </div> :
        <CircularProgress/>
        }
        </div>
    )
}

export default MyDetails
