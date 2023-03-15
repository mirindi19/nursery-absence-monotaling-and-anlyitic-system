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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { getTeachersAction } from "../../redux/actions/teacherListAction";

const Teacher = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const dispatch=useDispatch();
  const teachersList=useSelector((state)=>state.teachersList)
  const [teachersListDetails,setTeachersListDetails]=React.useState([])
  React.useEffect(()=>{
   async function fetchData(){
    await dispatch(getTeachersAction())
   }
   fetchData()
  },[])

  React.useEffect(()=>{
    async function fetchData(){
  if(!teachersList.loading){
    if(teachersList.details.length>0){
      setTeachersListDetails(teachersList.details)
    }
  }
    }
    fetchData()
   },[teachersList.details])

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
      id="telephone"
      label="Telephone"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    autoFocus
    margin="dense"
    id="fullname"
    label="Full Name"
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
      <TableCell>Teacher Name</TableCell>
      <TableCell align="center">Phone Number</TableCell>
      <TableCell align="center">Create At</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {teachersListDetails.map((row) => (
      <TableRow
        key={row._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.fullName}
        </TableCell>
        <TableCell align="center">{row.telephone}</TableCell>
        <TableCell align="center">{row.createdAt}</TableCell>
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

export default Teacher