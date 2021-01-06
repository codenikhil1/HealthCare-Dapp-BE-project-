import React from 'react'
import {useState,useEffect} from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Button} from "@material-ui/core"
import web3 from '../../../web3'
import contract from '../../../contract'
import ipfs from '../../../ipfs'
import DataDialogIns from './DataDialogIns'
function ShowIns({data,showData,accAdd}) {
    const [open, setOpen] = useState(false);
    const [InsInfo,setInsInfo] = useState(
      {name:"",address:"",email:""}
    );
    const handleClickOpen = async(e) => {
      e.preventDefault()
      //console.log(e.currentTarget.value)
      var add = e.currentTarget.value;
      navigator.clipboard.writeText(add)
     
      await contract.methods.getIns(add).call().then(async function(res){
        ipfs.catJSON(res)
        .then(async function(docDetails){
          await setInsInfo({
            name : docDetails.name,
            address : docDetails.address,
            email : docDetails.email,
          })
          setOpen(true);
          
          
        })
        .catch(console.log);
      })
      
      
    };
    const handleClose = () => {
      setOpen(false);
    };
          return (
              <div>
                      <TableContainer >
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                              <TableCell>
                                Insaurance Address 
                              </TableCell>
                          </TableRow>
                        </TableHead>
              
              
                        <TableBody>
                              {data.map(Ins => (
                                 <TableRow key = {Ins.index}> 
                                 
                                 <TableCell>
                                 <Button value = {Ins.InsAdd} color="primary" onClick={handleClickOpen}>
                                        {Ins.InsAdd}
                                 </Button>
                                  </TableCell>
                                 
                                 </TableRow> 
                              ))}    
                        </TableBody>
              
                      </Table>
                    </TableContainer>
                    <DataDialogIns details = {InsInfo} accAdd = {accAdd} handleClose = {handleClose} open = {open} title ="Insaurance Company Details"></DataDialogIns>
                    
                </div>
                     
          )
}

export default ShowIns
