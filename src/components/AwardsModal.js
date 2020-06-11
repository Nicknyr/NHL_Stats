import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

export default function AwardsModal(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //console.log('props passed to AwardModal : ' + props.description);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Learn more
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
            <CancelOutlinedIcon fontSize="large" style={{ color: '#D81E5B' }}/>
            </Button>
        </DialogActions>
        <DialogTitle id="responsive-dialog-title">
            <Typography variant="h5">{props.award}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogTitle id="responsive-dialog-title">
            <Typography variant="h5">History</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.history}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
