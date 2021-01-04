import React from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody} from "@material-ui/core"
function ShowDoctors({data,showData}) {
    console.log(data)
    if(showData){
        return (
            <div>
                    <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                            <TableCell>
                              Doctor Address Address
                            </TableCell>
                        </TableRow>
                      </TableHead>
            
            
                      <TableBody>
                            {data.map(doctors => (
                               <TableRow key = {doctors.index}> 
                                <TableCell>
                                    {doctors.docAdd}
                                </TableCell>
                               </TableRow> 
                            ))}    
                      </TableBody>
            
                    </Table>
                  </TableContainer>
                    </div>
        )
    }else{
        return null
    }
}

export default ShowDoctors
