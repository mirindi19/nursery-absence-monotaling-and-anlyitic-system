import "./teacher.scss"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const Teacher = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='teacher'>
    <Sidebar/>
    <div className="navTeacher">
    <Navbar/>
    <div className="dialogbox">
    <Button variant="outlined" onClick={handleClickOpen}>
    Add Teacher
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Registration</DialogTitle>
    <DialogContent>
      <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Teacher name"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    autoFocus
    margin="dense"
    id="phone"
    label="Phone number"
    type="text"
    fullWidth
    variant="standard"
  />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClose}>Enter</Button>
  </DialogActions>
</Dialog>
  </div>
    </div>
    </div>
  )
}

export default Teacher