import React from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from '@material-ui/core/';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
function DataDialog({handleClose,open,title,accAdd,details}) {
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
          practice Type : {details.practice}
          </Typography>
          <Typography gutterBottom>
          Email Address : {details.email}
          </Typography>
          <Typography gutterBottom>
          Area Of Expertice : {details.Area}
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

export default DataDialog
