import React from 'react'
import {Paper,Button,Typography,Card,CardContent,Dialog,DialogActions,DialogContent,DialogTitle} 
from '@material-ui/core'
function TreatDialog({handleClose,treatInfo,open}) {
    return (
        <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          TreatMent Details
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Patient Address <h4>{treatInfo.pid}</h4>
          </Typography>
          <Typography gutterBottom>
          Diagnosis <h4>{treatInfo.diagnosis}</h4>
          </Typography>
          <Typography gutterBottom>
          Test Conducted <h4>{treatInfo.tests}</h4>
          </Typography>
          <Typography gutterBottom>
          Medicines <h4>{treatInfo.medicines}</h4>
          </Typography>
          <Typography gutterBottom>
          Bill <h4>{treatInfo.bill}</h4>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default TreatDialog
