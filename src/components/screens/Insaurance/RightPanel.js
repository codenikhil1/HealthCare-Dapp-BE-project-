import React,{useState,useEffect} from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody
,Typography
} from "@material-ui/core"
import contract from '../../../contract'
function RightPanel({accAdd}) {
    const [isLoaded, setisLoaded] = useState(false)
    const [tableData, settableData] = useState()
    const logdata = [];
    useEffect(() => {
     contract.methods.getAppliedForIns().call({
       from:accAdd
     }).then(function(res){
        res.forEach(element =>{
          if(element != '0x0000000000000000000000000000000000000000'){
            const object = {}
          object.pid = element
          logdata.push(object);
          }
        })
        settableData(logdata);
        setisLoaded(true);
     })
    }, [])
    return (
        <div>
        {isLoaded && <div><Typography  variant="h4" color="primary">Patients Applied For Insaurance</Typography>
        <br></br>
        <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                  Patient Address
                </TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
                   {tableData.map(data =>(
                    <TableRow>
                    <TableCell>
                    {data.pid}
                   </TableCell>
              </TableRow>
                   ))}
          </TableBody>

        </Table>
      </TableContainer></div>}
        </div>
    )
}

export default RightPanel
