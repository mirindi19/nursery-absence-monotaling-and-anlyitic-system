import "./message.scss"
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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import moment from "moment";
import { getMessageSentByTeacherToParentAction } from "../../redux/actions/getMessageByTeacherToParentAction";
import { getMessageByTeacherToParentOnParentSideAction } from "../../redux/actions/getMessageByTeacherToParentOnParentSideAction";
import { Alert, Collapse } from "@mui/material";
const Message = () => {
  const [open, setOpen] = React.useState(false);
   const [openParentSide, setOpenParentSide] = React.useState(false);
   const [openMessage, setOpenMessage] = React.useState(true);
  const dispatch=useDispatch();
  const getMessageByTeacherToParent=useSelector((state)=>state.getMessageByTeacherToParent)
  const getMessageByTeacherToParentOnParentSide=useSelector((state)=>state.getMessageByTeacherToParentOnParentSide)
  const [message,setMessage]=React.useState("");
  const [parentId,setParentId]=React.useState("");
  const [messageError,setMessageError]=React.useState("");
  const [parentIdError,setParentIdError]=React.useState("");
  const [messageDetails,setMessageDetails]=React.useState([])
  const [messageDetailsParentSide,setMessageDetailsParentSide]=React.useState([])

  const [teacherId,setTeacherId]=React.useState("");
  const [teacherIdError,setTeacherIdError]=React.useState("");

  const [messageNotification,setMessageNotification]=React.useState("");

  const data= JSON.parse(localStorage.getItem("user-data"));
  const role=data.role;
  const handleClickOpenParentSide=()=>{
setOpenParentSide(true)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpenParentSide(false)
    setOpen(false);
    setMessageNotification("")
  };

  React.useEffect(()=>{
    async function fetchData(){
     await dispatch(getMessageSentByTeacherToParentAction())
    }
    fetchData()
   },[])
  React.useEffect(()=>{
    async function fetchData(){
  if(!getMessageByTeacherToParent.loading){
    if(getMessageByTeacherToParent.details.length>0){
      setMessageDetails(getMessageByTeacherToParent.details)
    }
  }
    }
    fetchData()
   },[getMessageByTeacherToParent.details])


   React.useEffect(()=>{
    async function fetchData(){
     await dispatch(getMessageByTeacherToParentOnParentSideAction())
    }
    fetchData()
   },[])
  React.useEffect(()=>{
    async function fetchData(){
  if(!getMessageByTeacherToParentOnParentSide.loading){
    if(getMessageByTeacherToParentOnParentSide.details.length>0){
      setMessageDetailsParentSide(getMessageByTeacherToParentOnParentSide.details)
    }
  }
    }
    fetchData()
   },[getMessageByTeacherToParentOnParentSide.details])



     
  const handleSubmit=async (e)=>{
    e.preventDefault()
    if(parentId==""){
      setParentIdError("Telephone number is required")
    }
    else if(message==""){
setMessageError("Message is required")
    }
    else{
      setParentIdError("")
      setMessageError("")


      const token = await localStorage.getItem("x-access-token");
      let headers;
      if (token) {
        headers = {
          "Content-Type": "application/json",
          token: `${token}`,
        };
      } else {
        headers = {
          "Content-Type": "application/json",
        };
      }
     await axios.post('http://localhost:8000/api/messages/send-message-parent',{
     message:message,
     parentId:parentId
},{headers:headers})
.then(async(response) => {
  setMessageNotification(response.data.message)
  console.log(response.data.message);
  setMessage("")
  setParentId("")
  await dispatch(getMessageSentByTeacherToParentAction())
}, (error) => {
  console.log(error);
});
    }
  }

  //parent side
  const handleSubmitParentSidde=async (e)=>{
    e.preventDefault()
    if(teacherId==""){
      setTeacherIdError("Telephone number is required")
    }
    else if(message==""){
setMessageError("Message is required")
    }
    else{
      setTeacherIdError("")
      setMessageError("")


      const token = await localStorage.getItem("x-access-token");
      let headers;
      if (token) {
        headers = {
          "Content-Type": "application/json",
          token: `${token}`,
        };
      } else {
        headers = {
          "Content-Type": "application/json",
        };
      }
     await axios.post('http://localhost:8000/api/messages/send-message-teacher',{
     message:message,
     teacherId:teacherId
},{headers:headers})
.then(async(response) => {
  setMessageNotification(response.data.message)

  setMessage("")
  setTeacherId("")
  await dispatch(getMessageByTeacherToParentOnParentSideAction())
}, (error) => {
  console.log(error);
});
    }
  }
  return (
    <div className="message">
    <Sidebar/>
    <div className="navMessage">
    <Navbar/>
    <div className="messageTable">
 {
        role=="Teacher"?
    <Button variant="outlined" onClick={handleClickOpen}>
    New Message
  </Button>
  :
   <Button variant="outlined" onClick={handleClickOpenParentSide}>
    New Message
  </Button>
  
  }
  <Dialog open={open} onClose={handleClose}
  size="large"
  >
    <DialogTitle>New Message</DialogTitle>
    {
      messageNotification?
      <Collapse in={openMessage}>
                    <Alert severity="success"
                      
                        sx={
                            {mb: 0.2}
                    }>
                      
                        {messageNotification}
                         </Alert>
                </Collapse>
      :null
    }
    
    <DialogContent>
    <TextField
    value={parentId}
    onChange={(e)=>setParentId(e.target.value)}
    helperText={parentIdError? parentIdError : ""}
    error={parentIdError}
  autoFocus
  margin="dense"
  id="parentId"
  label="Parent Telephone"
  type="text"
  fullWidth
  variant="standard"
/>
    <TextField
    value={message}
    onChange={(e)=>setMessage(e.target.value)}
    helperText={messageError? messageError : ""}
    error={messageError}
    autoFocus
    margin="dense"
    id="message"
    label="Message"
    type="text"
    fullWidth
    variant="standard"
    multiline
  />

  </DialogContent>

  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleSubmit}>Send</Button>
  </DialogActions>
  <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Sent Message</TableCell>
          <TableCell align="center">Parent Telephone</TableCell>
          <TableCell align="center">Date</TableCell>
        </TableRow>
      </TableHead>
      {
        role=="Teacher"?
        <TableBody>
          
        {messageDetails.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
             {
              row.isTeacher==true?
              <>
               <TableCell component="th" scope="row">
              {row.message}
            </TableCell>
            <TableCell align="center">{row.teacherId}</TableCell>
            <TableCell align="center">{moment(row.createdAt).format('lll')}</TableCell>
              </>
              :null
            }
           
          </TableRow>
        ))}
      </TableBody>
        :null
      }
     
    </Table>
    </TableContainer>
 
</Dialog>


 <Dialog open={openParentSide} onClose={handleClose}
  size="large"
  >
    <DialogTitle>New Message</DialogTitle>
    {
      messageNotification?
      <Collapse in={openMessage}>
                    <Alert severity="success"
                      
                        sx={
                            {mb: 0.2}
                    }>
                      
                        {messageNotification}
                         </Alert>
                </Collapse>
      :null
    }
    <DialogContent>
    <TextField
    value={teacherId}
    onChange={(e)=>setTeacherId(e.target.value)}
    helperText={teacherIdError? teacherIdError : ""}
    error={teacherIdError}
  autoFocus
  margin="dense"
  id="teacherId"
  label="Teacher Telephone"
  type="text"
  fullWidth
  variant="standard"
/>
    <TextField
    value={message}
    onChange={(e)=>setMessage(e.target.value)}
    helperText={messageError? messageError : ""}
    error={messageError}
    autoFocus
    margin="dense"
    id="message"
    label="Message"
    type="text"
    fullWidth
    variant="standard"
    multiline
  />

  </DialogContent>

  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleSubmitParentSidde}>Send</Button>
  </DialogActions>
  <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Sent Message</TableCell>
          <TableCell align="center">Teacher Telephone</TableCell>
          <TableCell align="center">Date</TableCell>
        </TableRow>
      </TableHead>
      {
        role=="Parent"?
        <TableBody>
          
        {messageDetailsParentSide.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
             {
              row.isTeacher==false?
              <>
               <TableCell component="th" scope="row">
              {row.message}
            </TableCell>
            <TableCell align="center">{row.teacherId}</TableCell>
            <TableCell align="center">{moment(row.createdAt).format('lll')}</TableCell>
              </>
              :null
            }
           
          </TableRow>
        ))}
      </TableBody>
        :null
      }
     
    </Table>
    </TableContainer>
 
</Dialog>


    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
    {
        role=="Teacher"?
        
        <TableHead>
        <TableRow>
          <TableCell>Message</TableCell>
          <TableCell align="center">Parent Telephone</TableCell>
          <TableCell align="center">Date</TableCell>
        </TableRow>
      </TableHead>
        :
        <TableHead>
        <TableRow>
          <TableCell>Message</TableCell>
          <TableCell align="center">Teacher Telephone</TableCell>
          <TableCell align="center">Date</TableCell>
        </TableRow>
      </TableHead>
        }
   
      {
        role=="Teacher"?
        <TableBody>
        {messageDetails.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {
              row.isTeacher==false?
              <>
               <TableCell component="th" scope="row">
              {row.message}
            </TableCell>
            <TableCell align="center">{row.parentId}</TableCell>
            <TableCell align="center">{moment(row.createdAt).format('lll')}</TableCell>
              </>
              :null
            }
           
          </TableRow>
        ))}
      </TableBody>
        
        :null}
         {
        role=="Parent"?
        <TableBody>
        {messageDetailsParentSide.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {
              row.isTeacher==true?
              <>
               <TableCell component="th" scope="row">
              {row.message}
            </TableCell>
            <TableCell align="center">{row.teacherId}</TableCell>
            <TableCell align="center">{moment(row.createdAt).format('lll')}</TableCell>
              </>
              :null
            }
           
          </TableRow>
        ))}
      </TableBody>
        
        :null}
      
    </Table>
    </TableContainer>
    </div>
    </div>
    </div>
  )
}

export default Message