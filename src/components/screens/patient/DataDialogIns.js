import React from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

function DataDialogIns({handleClose,open,title,accAdd,details}) {
    return (
        <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
       </DialogTitle>
       <DialogContent dividers>
           <Typography gutterBottom>
              name : {details.name}
           </Typography>
           <Typography gutterBottom>
           Address : {details.address}
          </Typography>
          <Typography gutterBottom>
             Email Address : {details.email}
          </Typography>
          </DialogContent>
          <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
          close
         </Button>
    </DialogActions>
          </Dialog>
        </div>
    )
}

export default DataDialogIns
