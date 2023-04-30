import "./attandance.scss"
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
import { getStudentsClassIdAction } from "../../redux/actions/getStudentsByClassIdAction";
import moment from "moment/moment";
const Attandance = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const getStudentsByClassId=useSelector((state)=>state.getStudentsByClassId);
  const [studentsList,setStudentsList]=React.useState([])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  React.useEffect(()=>{
    async function fetchData(){
     await dispatch(getStudentsClassIdAction())
    }
    fetchData()
   },[])
 
   React.useEffect(()=>{
     async function fetchData(){
   if(!getStudentsByClassId.loading){
     if(getStudentsByClassId.details.length>0){
       setStudentsList(getStudentsByClassId.details)
     }
   }
     }
     fetchData()
    },[getStudentsByClassId.details])
 
  return (
    <div className="attandance">
    <Sidebar/>
    <div className="navAttandance">
    <Navbar/>
    <div className="attandanceTable">
    <Button variant="outlined" onClick={handleClickOpen}>
    Attandance
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Studets Attandance form</DialogTitle>
    <DialogContent>
      <TextField
      autoFocus
      margin="dense"
      id="studentId"
      label="Student Id"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    autoFocus
    margin="dense"
    id="status"
    label="status"
    type="text"
    fullWidth
    variant="standard"
  />
  <TextField
  autoFocus
  margin="dense"
  id="date"
  type="date"
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
          <TableCell>First Name</TableCell>
          <TableCell align="center">Last Name</TableCell>
          <TableCell align="center">Reg Number</TableCell>
          <TableCell align="center">Date of Birth</TableCell>
          <TableCell align="center">Parent Phone Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {studentsList.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.firstName}
            </TableCell>
            <TableCell align="center">{row.lastName}</TableCell>
            <TableCell align="center">{row.regNumber}</TableCell>
            <TableCell align="center">{moment(row.dob).format('ll')}</TableCell>
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

export default Attandance