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
import { getMessageByteacherAction } from "../../redux/actions/getMessageByteacherAction";
const Message = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const getMessageByteacher=useSelector((state)=>state.getMessageByteacher)

  const [messageDetails,setMessageDetails]=React.useState([])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(()=>{
    async function fetchData(){
     await dispatch(getMessageByteacherAction())
    }
    fetchData()
   },[])
  React.useEffect(()=>{
    async function fetchData(){
  if(!getMessageByteacher.loading){
    if(getMessageByteacher.details.length>0){
      setMessageDetails(getMessageByteacher.details)

    }
  }
    }
    fetchData()
   },[getMessageByteacher.details])
  return (
    <div className="message">
    <Sidebar/>
    <div className="navMessage">
    <Navbar/>
    <div className="messageTable">

    <Button variant="outlined" onClick={handleClickOpen}>
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

    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Message</TableCell>
          <TableCell align="center">Teacher Id</TableCell>
          <TableCell align="center">Parent Id</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {messageDetails.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.message}
            </TableCell>
            <TableCell align="center">{row.teacherId}</TableCell>
            <TableCell align="center">{row.parentId}</TableCell>
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