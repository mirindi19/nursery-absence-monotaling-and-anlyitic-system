import "./subject.scss"
import {useState} from "react";
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
import { addSubjectAction } from "../../redux/actions/addSubjectAction";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "react-mui-fileuploader"
import DownloadIcon from '@mui/icons-material/Download';
import { Alert, ButtonGroup, Collapse, IconButton, Link } from "@mui/material";
import { AiFillPlusCircle } from "react-icons/ai";
import { Close, VideoFile } from "@mui/icons-material";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { uploadFileAction } from "../../redux/actions/uploadFileAction";
import { uploadVideoAction } from "../../redux/actions/uploadVideoAction";
const Subject = () => {
  const [open, setOpen] = React.useState(false);
  const [openFileUpload, setOpenFileUpload] = React.useState(false);
  const [openVideoUpload, setOpenVideoUpload] = React.useState(false);
  const dispatch=useDispatch();
 
  const uploadVideo=useSelector((state)=>state.uploadVideo);
  const uploadFile=useSelector((state)=>state.uploadFile)
  const addSubject=useSelector((state)=>state.addSubject)
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

  const [videoId,setVideoId]=React.useState("");

  const [openSuccess, setOpenSuccess] = React.useState(true);

  const [successMessage,setSuccessMessage]=React.useState("");
  const [successFileMessage,setSuccessFileMessage]=React.useState("");
  const [openSuccessFile, setOpenSuccessFile] = React.useState(true);

  const [successVideoMessage,setSuccessVideoMessage]=React.useState("");
  const [openSuccessVideo, setOpenSuccessVideo] = React.useState(true);

  //upload file
  const [filesToUpload, setFilesToUpload] = useState([])
const [fileId,setFileId]=useState("");
  const [openError, setOpenError] = React.useState(true);
  const handleCloseMessage=()=>{
    setOpenError(false)
    setOpenSuccess(false)
      }
    
 const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video", e.target.files[0]);
    setVideoUrl(e.target.files[0])
  };
  // formData.append("file", files[0]);
   // filesToUpload.forEach((file) => formData.append("files",
    //   file
    //  ))
  const handleFilesChange = (files) => {
    const formData = new FormData();
    formData.append("file",files[0]);
    setFileUrl(files)

  };


  const handleUploadVideo = async(id) => {
    let formData = new FormData()
    formData.append("video", videoUrl);
  
await dispatch(uploadVideoAction(formData,videoId))
   
  }

  React.useEffect(()=>{
    async function fetchData(){
  if(!uploadVideo.loading){
    if(uploadVideo.details.length!==0){
      setSuccessVideoMessage(uploadVideo.details.message)
      setOpenSuccessVideo(true)
      setVideoId("")
    }
  }
    }
    fetchData()
   },[uploadVideo.details])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenFileUpload = () => {
    setOpenFileUpload(true);
    
  };
  const handleClickOpenVideoUpload = () => {
    setOpenVideoUpload(true);
    
  };
  const handleClose = () => {
    setOpenVideoUpload(false);
    setOpenFileUpload(false)
    setOpen(false);
  };
  const handleUploadFile=async()=>{
    let formData = new FormData()
    formData.append("file", fileUrl[0]);
await dispatch(uploadFileAction(formData,fileId))
  }
  React.useEffect(()=>{
    async function fetchData(){
  if(!uploadFile.loading){
    if(uploadFile.details.length!==0){
      setSuccessFileMessage(uploadFile.details.message)
      setOpenSuccessFile(true)
      setFileId("")
    }
  }
    }
    fetchData()
   },[uploadFile.details])



const handleSubmit=async()=>{
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
    await dispatch(addSubjectAction(subjectName,description))
  }
}

React.useEffect(()=>{
  async function fetchData(){
if(!addSubject.loading){
  if(addSubject.details.length!==0){
    setSuccessMessage(addSubject.details.message)
    setOpenSuccess(true)
  setSubjectName("");
  setDescription("");
  await dispatch(getSubjectByTeacherIdAction())
  }
}
  }
  fetchData()
 },[addSubject.details])


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
    {
            !addSubject.error ? null : (
                <Collapse in={openError}>
                    <Alert severity="error"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleCloseMessage}>
                        <Close
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {/* {errorMessage==="Provided NID is not registered to the head of the household"?`${t("cbhi:providedNIDisnotregisteredtotheheadofthehousehold")}`:errorMessage} */}
                        {addSubject.error}
                         </Alert>
                </Collapse>
            )
        }
    {
            !successMessage ? null : (
                <Collapse in={openSuccess}>
                    <Alert severity="success"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleCloseMessage}>
                        <Close
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {/* {errorMessage==="Provided NID is not registered to the head of the household"?`${t("cbhi:providedNIDisnotregisteredtotheheadofthehousehold")}`:errorMessage} */}
                        {successMessage}
                         </Alert>
                </Collapse>
            )
        }
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
    {
      addSubject.loading?"Loading":
      <Button onClick={handleSubmit}>Submit</Button>
    }
  </DialogActions>
</Dialog>

<Dialog open={openFileUpload} onClose={handleClose}>
    <DialogTitle>Upload new file</DialogTitle>
    <DialogContent>
    {
            !uploadFile.error ? null : (
                <Collapse in={openError}>
                    <Alert severity="error"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleCloseMessage}>
                        <Close
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {/* {errorMessage==="Provided NID is not registered to the head of the household"?`${t("cbhi:providedNIDisnotregisteredtotheheadofthehousehold")}`:errorMessage} */}
                        {uploadFile.error}
                         </Alert>
                </Collapse>
            )
        }
    {
            !successFileMessage ? null : (
                <Collapse in={openSuccessFile}>
                    <Alert severity="success"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleCloseMessage}>
                        <Close
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {/* {errorMessage==="Provided NID is not registered to the head of the household"?`${t("cbhi:providedNIDisnotregisteredtotheheadofthehousehold")}`:errorMessage} */}
                        {successFileMessage}
                         </Alert>
                </Collapse>
            )
        }
    
       <FileUpload
        multiFile={false}
        onFilesChange={handleFilesChange}
        acceptedType={['application/*','image/*']}
        errorSizeMessage={'fill it or remove it to use the default error message'}
        allowedExtensions={['jpg', 'jpeg','pdf','docx']}
        onContextReady={(context) => {}}
        ContainerProps={{
          elevation: 0,
          variant: "outlined",
          sx: { p: 1 }
        }}
        PlaceholderImageDimension={{
          xs: { width: 128, height: 128 },
          sm: { width: 128, height: 128 },
          md: { width: 164, height: 164 },
          lg: { width: 256, height: 256 }
        }}
        disabled={false}
    title="Please select file"
    header="Drag to drop"
    leftLabel="or"
    rightLabel="to select files"
    buttonLabel="click here"
    buttonRemoveLabel="Remove all"
      />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    {
      uploadFile.loading?"Loading":
      <Button onClick={handleUploadFile}>Upload File </Button>
    }
  </DialogActions>
</Dialog>

<Dialog open={openVideoUpload} onClose={handleClose}>
    <DialogTitle>Upload new video</DialogTitle>
    <DialogContent>
    {
            !uploadFile.error ? null : (
                <Collapse in={openError}>
                    <Alert severity="error"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleCloseMessage}>
                        <Close
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {/* {errorMessage==="Provided NID is not registered to the head of the household"?`${t("cbhi:providedNIDisnotregisteredtotheheadofthehousehold")}`:errorMessage} */}
                        {uploadFile.error}
                         </Alert>
                </Collapse>
            )
        }
    {
            !successVideoMessage ? null : (
                <Collapse in={openSuccessVideo}>
                    <Alert severity="success"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleCloseMessage}>
                        <Close
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {/* {errorMessage==="Provided NID is not registered to the head of the household"?`${t("cbhi:providedNIDisnotregisteredtotheheadofthehousehold")}`:errorMessage} */}
                        {successVideoMessage}
                         </Alert>
                </Collapse>
            )
        }
    
     <label className="button" htmlFor="file_picker">Upload video
      <AiFillPlusCircle />
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        onChange={(e) => handleChange(e)}
      /><br/>
      {videoUrl? videoUrl.name:""}
    </label>
      
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    {
      uploadVideo.loading?"Loading":
      <Button onClick={handleUploadVideo}>Upload Video</Button>
    }
  </DialogActions>
</Dialog>

    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Subject Name</TableCell>
          <TableCell align="center">Description</TableCell>
          <TableCell align="center">Date</TableCell>
          <TableCell align="center">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {subjectDetails.map((row,_id) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.subjectName}
            </TableCell>
            <TableCell align="center">{row.description}</TableCell>
            <TableCell align="center">{row.createdAt}</TableCell>
            <TableCell align="center">
            <ButtonGroup variant="text" aria-label="text button group">
             <Button onClick={
              ()=>{
                setFileId(row._id)
                handleClickOpenFileUpload()
              }
              }><UploadFileIcon/></Button>
             <Button
             
             onClick={
              ()=>{
                setVideoId(row._id)
                handleClickOpenVideoUpload()
              }
              }
             ><VideoLibraryIcon /></Button>
            </ButtonGroup>
            </TableCell>
         
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