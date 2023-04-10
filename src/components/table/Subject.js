import "./subject.scss"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { getSubjectByTeacherIdAction } from "../../redux/actions/getSubjectByTeacherIdAction";
import { useDispatch, useSelector } from "react-redux";
const Subject = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const getSubjectByTeacherId=useSelector((state)=>state.getSubjectByTeacherId)
  const [subjectDetails,setSubjectDetails]=React.useState([]);

  const [subjectName,setSubjectName]=React.useState("");
  const [fileUrl,setFileUrl]=React.useState(null);
  const [videoUrl,setVideoUrl]=React.useState(null);
  const [description,setDescription]=React.useState("");

  const [subjectNameError,setSubjectNameError]=React.useState("");
  const [fileUrlError,setFileUrlError]=React.useState("");
  const [videoUrlError,setVideoUrlError]=React.useState("");
  const [descriptionError,setDescriptionError]=React.useState("");



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
const handleSubmit=()=>{
  if(subjectName==="")
  {
    setSubjectNameError("Subject name is required")
  }
  else if(description===""){
    setDescriptionError("Description is required")
  }
  else{
    setSubjectNameError("")
    setDescriptionError("")
    console.log("name: ",subjectName+" "+"Description: ",description,+" "+"Vi url",videoUrl,fileUrl)
  }
}
  React.useEffect(()=>{
    async function fetchData(){
     await dispatch(getSubjectByTeacherIdAction())
    }
    fetchData()
   },[]) 
    React.useEffect(()=>{
    async function fetchData(){
  if(!getSubjectByTeacherId.loading){
    if(getSubjectByTeacherId.details.length>0){
      setSubjectDetails(getSubjectByTeacherId.details)
    }
  }
    }
    fetchData()
   },[getSubjectByTeacherId.details])
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
    <DialogTitle>New Subject</DialogTitle>
    <DialogContent>
      <TextField
        value={subjectName}
        onChange={(e)=>setSubjectName(e.target.value)}
        helperText={subjectNameError? subjectNameError : ""}
        error={subjectNameError}
      autoFocus
      margin="dense"
      id="subjectName"
      label="Subject Name"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
       value={videoUrl}
       onChange={(e)=>setVideoUrl(e.target.files && e.target.files[0])}
     
    autoFocus
    margin="dense"
    id="video"
    type="file"
    fullWidth
    variant="standard"
  />
  <TextField
  value={fileUrl}
  onChange={(e)=>setFileUrl(e.target.files[0])}

  autoFocus
  margin="dense"
  id="files"
  type="file"
  fullWidth
  variant="standard"
/>
<TextField
  value={description}
  onChange={(e)=>setDescription(e.target.value)}
  helperText={descriptionError? descriptionError : ""}
  error={descriptionError}
autoFocus
margin="dense"
id="description"
label="Description"
type="text"
fullWidth
variant="standard"
/>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleSubmit}>Submit</Button>
  </DialogActions>
</Dialog>
    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Subject Name</TableCell>
          <TableCell align="center">Description</TableCell>
          <TableCell align="center">Video</TableCell>
          <TableCell align="center">File</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {subjectDetails.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.subjectName}
            </TableCell>
            <TableCell align="center">{row.description}</TableCell>
            <TableCell align="center">{row.videoUrl}</TableCell>
            <TableCell align="center">{row.fileUrl}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
    </div>
    </div>
    </div>
  )
}

export default Subject