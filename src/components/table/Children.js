import "./children.scss"
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
import { getStudentsAction } from "../../redux/actions/getStudentsAction";
import { getClassesAction } from "../../redux/actions/getClassesAction";
import { MenuItem } from "@mui/material";
const Children = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const getStudents=useSelector((state)=>state.getStudents)
  const getClasses=useSelector((state)=>state.getClasses)
  const [studentsList,setStudentsList]=React.useState([])
  const [classesList,setClassesList]=React.useState([])
  React.useEffect(()=>{
   async function fetchData(){
    await dispatch(getClassesAction())
   }
   fetchData()
  },[])

  React.useEffect(()=>{
    async function fetchData(){
  if(!getClasses.loading){
    if(getClasses.details.length>0){
      setClassesList(getClasses.details)
    }
  }
    }
    fetchData()
   },[getClasses.details])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
 
  React.useEffect(()=>{
   async function fetchData(){
    await dispatch(getStudentsAction())
   }
   fetchData()
  },[])

  React.useEffect(()=>{
    async function fetchData(){
  if(!getStudents.loading){
    if(getStudents.details.length>0){
      setStudentsList(getStudents.details)
    }
  }
    }
    fetchData()
   },[getStudents.details])

  return (
    <div className='children'>
    <Sidebar/>
    <div className="navchildren">
    <Navbar/>
    <div className="childrenTable">
    <Button variant="outlined" onClick={handleClickOpen}>
    Add Children
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Registration</DialogTitle>
    <DialogContent>
      <TextField
      autoFocus
      margin="dense"
      id="firstName"
      label="First Name"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    autoFocus
    margin="dense"
    id="lastName"
    label="Last Name"
    type="text"
    fullWidth
    variant="standard"
  />
  <TextField
  autoFocus
  margin="dense"
  id="dob"
  type="date"
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
<TextField
autoFocus
select
margin="dense"
id="classId"
label="Select Class Name"
type="text"
fullWidth
variant="standard"
>
{classesList.map((option) => (
                      <MenuItem key={option._id} value={option._id}>{option.className}</MenuItem>
                    ))} 
  </TextField>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={handleClose}>Submit</Button>
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
            <TableCell align="center">{row.dob}</TableCell>
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

export default Children