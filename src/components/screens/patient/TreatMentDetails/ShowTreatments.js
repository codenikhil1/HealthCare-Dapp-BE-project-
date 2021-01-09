import React from 'react'
import {useEffect,useState} from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Button} from "@material-ui/core"
import Details from './Details'
import contract from '../../../../contract'
import ipfs from '../../../../ipfs'
function ShowTreatments({data,accAdd}) {
    //show model when user clicks on treatment Id
    //for refrence see showdoctors.js and dataDialog.js
    const [open, setOpen] = useState(false);
    const[treatInfo,setTreatInfo] = useState(
        {"did":"","diagnosis":"","Tests":"","Bill":"","medicines":""})
    const handleClickOpen = async(e) => {
            e.preventDefault();
            const value = e.currentTarget.value;
            await contract.methods.getTrtDetails(value).call({
              from:accAdd
            }).then(async function(res){
              await ipfs.catJSON(res).then(async function(data){
                console.log(data)
                await setTreatInfo({
                  did:data.did,
                  diagnosis : data.diagnosis,
                  Tests : data.tests,
                  Bill : data.bill,
                  medicines : data.medicines
                })
              })
              setOpen(true);
            })
            

    }
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
                  TreatMent Id's
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map(Treat => (
            <TableRow key = {Treat.index}> 
            
            <TableCell>
            <Button value = {Treat.Tid} color="primary" onClick = {handleClickOpen}>
                   {Treat.Tid}
            </Button>
             </TableCell>
            
            </TableRow> 
         ))}   
          </TableBody>
        </Table>
      </TableContainer>
      <Details handleClose = {handleClose} open = {open} title = "TreatMent Details" details = { treatInfo} ></Details>
        </div>
    )
}

export default ShowTreatments

