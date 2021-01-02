import React from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody} from "@material-ui/core"
function RightPanel() {
    return (
        <div>
        <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell>
                  Patient Address
                </TableCell>
                <TableCell>
                  Medicines
                </TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
                    <TableRow>
                        <TableCell>
                        0x5454
                       </TableCell>
                       <TableCell>
                        hsjdhsj sjf
                       </TableCell>
                  </TableRow>
          </TableBody>

        </Table>
      </TableContainer>
        </div>
    )
}

export default RightPanel
