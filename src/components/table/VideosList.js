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
import { Alert, ButtonGroup, CardMedia, Collapse, IconButton, Link } from "@mui/material";
import { AiFillPlusCircle } from "react-icons/ai";
import { Close } from "@mui/icons-material";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import  axios from "axios";
import DownloadLink from "react-download-link";
const Subject = () => {
    const url_imgs = "http://localhost:8000/uploads"
  const [open, setOpen] = React.useState(false);
  const [openFileUpload, setOpenFileUpload] = React.useState(false);
  const dispatch=useDispatch();
  const getSubjectByTeacherId=useSelector((state)=>state.getSubjectByTeacherId)
  const addSubject=useSelector((state)=>state.addSubject)
  const [subjectDetails,setSubjectDetails]=React.useState([]);

  const [subjectName,setSubjectName]=React.useState("");
  const [fileUrl,setFileUrl]=React.useState(null);
  const [videoUrl,setVideoUrl]=React.useState(null);
  const [description,setDescription]=React.useState("");

  const [subjectNameError,setSubjectNameError]=React.useState("");
  const [fileUrlError,setFileUrlError]=React.useState("");
  const [videoUrlError,setVideoUrlError]=React.useState("");
  const [descriptionError,setDescriptionError]=React.useState("");

  const [openSuccess, setOpenSuccess] = React.useState(true);
  const [successMessage,setSuccessMessage]=React.useState("");


  //upload file
  const [filesToUpload, setFilesToUpload] = useState([])

  const [openError, setOpenError] = React.useState(true);
  const handleCloseMessage=()=>{
    setOpenError(false)
    setOpenSuccess(false)
      }
    
 const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
 console.log("file Mahame: ",    e.target.files[0])
   
  };
  const handleFilesChange = (files) => {
    // Update chosen files
    setFilesToUpload([ ...files ])
     let formData = new FormData()
     formData.append("file", files[0]);
    // filesToUpload.forEach((file) => formData.append("files",
    //   file
    //  ))
    setFileUrl(formData)

  };


  const uploadFiles = () => {
    // Create a form and post it to server
   
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenFileUpload = () => {
    setOpenFileUpload(true);
  };
  const handleClose = () => {
    setOpenFileUpload(false)
    setOpen(false);
  };
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


const getDataFromUrl=(url)=>new Promise((resolve,reject)=>{
  setTimeout(()=>{
    fetch(url)
    .then(response=>response.text())
    .then(data=>{
      resolve(data)
    });
  });
  
},2000)

   const handleDownloadFile=async(id)=>{

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `http://localhost:8000/api/subjects/download-file/${id}`,
  headers: { 
    'Content-Type': 'application/json'
  },
  responseType:"blob"
};
axios.request(config)
.then((response) => {
  const url=window.URL.createObjectURL(new Blob([response.data]));
  const link=document.createElement("a");
  link.href=url;
  link.setAttribute(
    "download",
    
  );
  document.body.appendChild(link);
  link.click();
link.parentNode.removeChild(link)
  // console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
   }
   const [photos, setPhotos] = useState([]);
   React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="subject">
    <Sidebar/>
    <div className="navSubject">
    <Navbar/>
    <div className="subjectTable">

       


<div className="cards">
{subjectDetails.length > 0 ? subjectDetails.map((row) => (
  <div class="card">
<video controls autoPlay key={row._id} src={`http://localhost:8000/uploads/${row.videoUrl}`} style={{width:'100%'}}></video>
  <div class="container">
    <h4><b>{row.subjectName}</b></h4> 
    <p>{row.description}</p> 
    <DownloadLink 
    label={row.fileUrl}
    filename={`http://localhost:8000/uploads/${row.fileUrl}`}
    exportFile={()=>handleClickOpenFileUpload(row.fileUrl)}
    />
      <p>
    <Button onClick={()=>{
      handleDownloadFile(row.fileUrl)
    }}>
      <DownloadIcon/>
    </Button>
    </p> 
    {/* <div key={photo._id} className="grid__item">
            <img
              src={`http://localhost:5000/uploads/${photo.photo}`}
              alt="grid_image"
            />
          </div> */}
    <CardMedia
        key={row._id}
        component="img"
        height="194"
        width="100"
       image={`http://localhost:8000/uploads/${row.fileUrl}`}
      //  image={`/uploads/${row.fileUrl}`}
        alt="Paella dish"
      />
  
  </div>
 </div>
)):""}

</div>
  
    </div>
    </div>
    </div>
  )
}

export default Subject