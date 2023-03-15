import "./course.scss"
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
import { getClassesAction } from "../../redux/actions/getClassesAction";
import { useDispatch,useSelector
 } from "react-redux";
const Class = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
      const dispatch=useDispatch();
      const getClasses=useSelector((state)=>state.getClasses)
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
    
  return (
    <div className='course'>
    <Sidebar/>
    <div className='coursenav'>
    <Navbar/>
    <div className="tableform">

    <Button variant="outlined" onClick={handleClickOpen}>
    Add Class
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
    id="className"
    label="class Name"
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
          <TableCell>Class Name</TableCell>
          <TableCell align="center">Teacher  Name</TableCell>
          <TableCell align="center">Teacher Id</TableCell>
          <TableCell align="center">Created At</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {classesList.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.className}
            </TableCell>
            <TableCell align="center">{row.teacherName}</TableCell>
            <TableCell align="center">{row.teacherId}</TableCell>
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

export default Class