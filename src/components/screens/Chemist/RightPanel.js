import React,{useState,useEffect} from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody,CircularProgress, TextField,Button} from "@material-ui/core"
import contract from '../../../contract'
import web3 from '../../../web3'
function RightPanel({accAdd}) {
    const[MedInfo,setMedInfo] = useState() 
    const[pid,setPid] = useState()
    const [isLoaded, setisLoaded] = useState(false)
    const logdata = []
    const onChange = (e) =>{
        setPid(e.target.value);
    }
    const onSubmit = (e) =>{
      e.preventDefault();
      if(web3.utils.isAddress(pid)){
          contract.methods.getMedicineDetails(pid).call({
            from:accAdd
          }).then(async function(events){
            events.forEach(element =>{
                const object = {}
                object.pid = element.pid; 
                object.medicines = element.medicines;
                object.date = element.date
                logdata.push(object)
            })
            setMedInfo(logdata)
            setisLoaded(true)
                  
          })
      }else{
        alert("wrong address")
      }
    }
    return (
        <div>
        <form onSubmit = {onSubmit}>
          <TextField
            id = "pid"
            label = "Patient Address"
            variant="standard" 
            required 
            onChange = {onChange}
          />
          <br></br>
          <br></br>
          <Button variant="contained" color="secondary">
           Submit
        </Button>
        </form>
        <br></br>
        {isLoaded && <div>
          <TableContainer >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                  <TableCell>
                    Date
                  </TableCell>
                  <TableCell>
                    Medicines
                  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                      {MedInfo.map(data =>(
                        <TableRow>
                          <TableCell>
                          {data.date}
                         </TableCell>
                         <TableCell>
                         {data.medicines}
                         </TableCell>
                    </TableRow>
                      ))}
            </TableBody>
  
          </Table>
        </TableContainer>
          </div> }
        </div>
    )
}

export default RightPanel
