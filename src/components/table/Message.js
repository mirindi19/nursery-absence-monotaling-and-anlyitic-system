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

import moment from "moment";
import { getMessageSentByTeacherToParentAction } from "../../redux/actions/getMessageByTeacherToParentAction";
const Message = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const getMessageByTeacherToParent=useSelector((state)=>state.getMessageByTeacherToParent)

  const [messageDetails,setMessageDetails]=React.useState([])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
  return (
    <div className="message">
    <Sidebar/>
    <div className="navMessage">
    <Navbar/>
    <div className="messageTable">

    <Button variant="outlined" onClick={handleClickOpen}>
    New Message
  </Button>
  <Dialog open={open} onClose={handleClose}
  size="large"
  >
    <DialogTitle>New Message</DialogTitle>
    <DialogContent>
    <TextField
  autoFocus
  margin="dense"
  id="parentId"
  label="Parent Telephone"
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
    multiline
  />

  </DialogContent>

  
  <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Sent Message</TableCell>
          <TableCell align="center">Parent Telephone</TableCell>
          <TableCell align="center">Date</TableCell>
        </TableRow>
      </TableHead>
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
            <TableCell align="center">{row.parentId}</TableCell>
            <TableCell align="center">{moment(row.createdAt).format('lll')}</TableCell>
              </>
              :null
            }
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClose}>Send</Button>
  </DialogActions>
</Dialog>

    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Message</TableCell>
          <TableCell align="center">Parent Telephone</TableCell>
          <TableCell align="center">Date</TableCell>
        </TableRow>
      </TableHead>
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
    </Table>
    </TableContainer>
    </div>
    </div>
    </div>
  )
}

export default Message