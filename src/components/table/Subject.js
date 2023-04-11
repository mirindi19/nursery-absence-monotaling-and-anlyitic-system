import "./subject.scss"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IMAGES from "../../Assets/images";
import VIDEOS from "../../Assets/video";
const Subject = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="subject">
    <Sidebar/>
    <div className="navSubject">
    <Navbar/>
    <div className="subjectTable">
    <Button variant="outlined" onClick={handleClickOpen}>
    Add Subject
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Registration</DialogTitle>
    <DialogContent>
      <TextField
      autoFocus
      margin="dense"
      id="subjectName"
      label="Subject Name"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    autoFocus
    margin="dense"
    id="video"
    type="file"
    fullWidth
    variant="standard"
  />
  <TextField
  autoFocus
  margin="dense"
  id="files"
  type="file"
  fullWidth
  variant="standard"
/>
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
id="classId"
label="classId"
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
<div className="cards">
<div class="card">
<video controls autoPlay src={VIDEOS.kids} style={{width:'100%'}}></video>
  <div class="container">
    <h4><b>Sing</b></h4> 
    <p>document</p> 
    <p>teacherId</p>
  </div>
</div>
<div class="card">
<video controls src={VIDEOS.kids} style={{width:'100%'}}></video>
  <div class="container">
  <h4><b>Sing</b></h4> 
  <p>document</p> 
  <p>teacherId</p>
  </div>
</div>
<div class="card">
<video controls src={VIDEOS.kids} style={{width:'100%'}}></video>
  <div class="container">
  <h4><b>Sing</b></h4> 
  <p>document</p> 
  <p>teacherId</p>
  </div>
</div>
<div class="card">
<video controls src={VIDEOS.kids} style={{width:'100%'}}></video>
  <div class="container">
  <h4><b>Sing</b></h4> 
  <p>document</p>
  <p>teacherId</p>
  </div>
</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Subject