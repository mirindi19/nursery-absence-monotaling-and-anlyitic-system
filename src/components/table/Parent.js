import "./parent.scss"
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
import { getParentsAction } from "../../redux/actions/getParentsAction";
const Parent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch=useDispatch();
  const getParents=useSelector((state)=>state.getParents)
  const [parentsList,setParentsList]=React.useState([])
  React.useEffect(()=>{
   async function fetchData(){
    await dispatch(getParentsAction())
   }
   fetchData()
  },[])

  React.useEffect(()=>{
    async function fetchData(){
  if(!getParents.loading){
    if(getParents.details.length>0){
      setParentsList(getParents.details)
    }
  }
    }
    fetchData()
   },[getParents.details])

  return (
    <div className="parent">
    <Sidebar/>
    <div className="navParent">
    <Navbar/>
    <div className="parentTable">
    <Button variant="outlined" onClick={handleClickOpen}>
    Add Parent
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Registration</DialogTitle>
    <DialogContent>
      <TextField
      autoFocus
      margin="dense"
      id="fatherName"
      label="Father Name"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    autoFocus
    margin="dense"
    id="motherName"
    label="Mother Name"
    type="text"
    fullWidth
    variant="standard"
  />
  <TextField
  autoFocus
  margin="dense"
  id="telphone"
  label="telphone"
  type="text"
  fullWidth
  variant="standard"
/>
<TextField
autoFocus
margin="dense"
id="email"
label="Email"
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
          <TableCell>Father Name</TableCell>
          <TableCell align="center">Mother Name</TableCell>
          <TableCell align="center">Telephone</TableCell>
          <TableCell align="center">Created At</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {parentsList.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.fatherName}
            </TableCell>
            <TableCell align="center">{row.motherName}</TableCell>
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

export default Parent