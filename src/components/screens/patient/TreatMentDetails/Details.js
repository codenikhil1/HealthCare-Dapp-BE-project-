import React from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

function Details({handleClose,open,title,details}) {
    return (
        <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
       </DialogTitle>
       <DialogContent dividers>
       <Typography gutterBottom>
              Doctor Address : {details.did}
           </Typography>
           <Typography gutterBottom>
              Diagnosis : {details.diagnosis}
           </Typography>
           <Typography gutterBottom>
           Tests Conducted : {details.Tests}
          </Typography>
          <Typography gutterBottom>
             Bill: {details.Bill}
          </Typography>
          <Typography gutterBottom>
             Medicines sugggested: {details.medicines}
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

export default Details