import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
function TreatTable({data}) {
    return (
        <div>
        <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                  Treatment Id
                </TableCell>
                
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map(Treat => (
            <TableRow key = {Treat.index}> 
            
            <TableCell>
                   {Treat.Tid}
             </TableCell>
            
            </TableRow> 
         ))}   
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}

export default TreatTable
