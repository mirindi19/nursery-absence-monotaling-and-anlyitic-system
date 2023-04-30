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
import { addParentAction } from "../../redux/actions/addParentAction";
import { Alert, Collapse, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import moment from "moment";
const Parent = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const getParents=useSelector((state)=>state.getParents)
  const addParent=useSelector((state)=>state.addParent)
  const [parentsList,setParentsList]=React.useState([])

  const [fatherName,setFartherName]=React.useState("");
  const [motherName,setMotherName]=React.useState("");
  const [telephone,setTelephone]=React.useState("");

  
  const [fatherNameError,setFartherNameError]=React.useState("");
  const [motherNameError,setMotherNameError]=React.useState("");
  const [telephoneError,setTelephoneError]=React.useState("");
  

  const [openError, setOpenError] = React.useState(true);
  const [openSuccess, setOpenSuccess] = React.useState(true);
  const [successMessage,setSuccessMessage]=React.useState("");
  const handleCloseMessage=()=>{
    setOpenError(false)
    setOpenSuccess(false)
      }
    
  const handleSubmit=async (e)=>{
    e.preventDefault()
if(fatherName==""){
 setFartherNameError("Father Name is required")
}
else if(motherName==""){
 setMotherNameError("Mother Name is required");
}
else if(telephone==""){
  setTelephoneError("Phone Number is required");
 }
else{
  setFartherNameError("")
  setMotherNameError("");
  setTelephoneError("");
 await dispatch(addParentAction(fatherName,motherName,telephone))
}
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
   },[getParents.details]);
   React.useEffect(()=>{
    async function fetchData(){
  if(!addParent.loading){
    if(addParent.details.length!==0){
      setSuccessMessage(addParent.details.message)
      setOpenSuccess(true)
      setFartherName("")
      setMotherName("")
      setTelephone("")
      await dispatch(getParentsAction())
    }
  }
    }
    fetchData()
   },[addParent.details])


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
    <DialogTitle>Add New Parent</DialogTitle>
    <DialogContent>
    {
            !addParent.error ? null : (
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
                        {addParent.error}
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
        value={fatherName}
        onChange={(e)=>setFartherName(e.target.value)}
        helperText={fatherNameError? fatherNameError : ""}
        error={fatherNameError}
      autoFocus
      margin="dense"
      id="fatherName"
      label="Father Name"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
       value={motherName}
       onChange={(e)=>setMotherName(e.target.value)}
       helperText={motherNameError? motherNameError : ""}
       error={motherNameError}
    autoFocus
    margin="dense"
    id="motherName"
    label="Mother Name"
    type="text"
    fullWidth
    variant="standard"
  />
  <TextField
    value={telephone}
    onChange={(e)=>setTelephone(e.target.value)}
    helperText={telephoneError? telephoneError : ""}
    error={telephoneError}
  autoFocus
  margin="dense"
  id="telphone"
  label="telphone"
  type="text"
  fullWidth
  variant="standard"
/>

  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
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
            <TableCell align="center">{moment(row.createdAt).format('lll')}</TableCell>
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