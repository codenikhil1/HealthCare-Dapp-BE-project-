import React from 'react'
import {Table,TableContainer,TableHead,TableRow,TableCell,TableBody
,Typography
} from "@material-ui/core"
function RightPanel() {
    return (
        <div>
        <Typography  variant="h4" color="primary">Patients Applied For Insaurance</Typography>
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
                    <TableRow>
                        <TableCell>
                        0x5454
                       </TableCell>
                  </TableRow>
          </TableBody>

        </Table>
      </TableContainer>
        </div>
    )
}

export default RightPanel
