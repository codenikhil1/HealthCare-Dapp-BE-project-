import React from 'react'
import {useEffect,useState} from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Button} from "@material-ui/core"
import ipfs from '../../../../ipfs'
import web3 from '../../../../web3'
import contract from '../../../../contract'
function ShowTreatments({data}) {
    //show model when user clicks on treatment Id
    //for refrence see showdoctors.js and dataDialog.js
    const [open, setOpen] = useState(false);
    const[treatInfo,setTreatInfo] = useState(
        {"pid":"","diagnosis":"","Tests":"","Bill":"","medicines":""})
    const handleClickOpen = async(e) => {
            e.preventDefault();
            //console.log(e.currentTarget.value)
            

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
        </div>
    )
}

export default ShowTreatments

