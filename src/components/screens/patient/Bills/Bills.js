import React from 'react'
import {useEffect,useState} from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Button} from "@material-ui/core"
import ipfs from '../../../../ipfs'
import web3 from '../../../../web3'
import contract from '../../../../contract'
function Bills({accAdd}) {
    const [isLoaded, setisLoaded] = useState(false)
    const [tableData, settableData] = useState()
    const logdata = []

    useEffect(() => {
        contract.methods.getbills().call({
            from:accAdd
        }).then(function(result){
            result.forEach( element => {
                const object = {}
                object.chemid = element.chemid;
                object.date = element.date;
                object.bill = element.amt;
                logdata.push(object)
            })
            settableData(logdata);
            setisLoaded(true);
        })
    }, [])
    return (
        <div>
     {isLoaded && <div>
        <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                  Chemsit Id
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Bill
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(data =>(
                <TableRow > 
            <TableCell>
                    {data.chemid}
             </TableCell>
             <TableCell>
                    {data.date}
              </TableCell>
              <TableCell>
              {data.bill}
               </TableCell>
            </TableRow>  
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>}
        </div>
        
    )
}

export default Bills
