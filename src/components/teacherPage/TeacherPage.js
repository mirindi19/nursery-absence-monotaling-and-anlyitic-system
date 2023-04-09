import "./teacherPage.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Topnav from "../topnav/Topnav";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
const TeacherPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="TeacherPage">
    <Topnav/>
    <div className="tech">
    <Box className="box"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: '100%',
        height: 550,
        padding:2,
      },
    }}
  >
    <Paper elevation={3}>
    <Button className="btncomment" onClick={handleClickOpen}>
    add Message
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Registration</DialogTitle>
    <DialogContent>
      <TextField
      autoFocus
      margin="dense"
      id="teacherId"
      label="Teacher Id"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    autoFocus
    margin="dense"
    id="message"
    label="Message"
    type="text"
    fullWidth
    variant="standard"
  />
  <TextField
  autoFocus
  margin="dense"
  id="parentId"
  label="Parent Id"
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

    </Paper>
  </Box>
    </div>
    </div>
  )
}

export default TeacherPage