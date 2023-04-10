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
import { useDispatch,useSelector} from "react-redux";
import { addClassAction } from "../../redux/actions/addClassAction";
import { Alert, Collapse, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
const Class = () => {
  const dispatch=useDispatch();
  const getClasses=useSelector((state)=>state.getClasses)
  const addClass=useSelector((state)=>state.addClass)
  const [open, setOpen] = React.useState(false);
  const [teacherId,setTeacherId]=React.useState("")
  const [className,setClassName]=React.useState("")

  const [teacherIdError,setTeacherIdError]=React.useState("")
  const [classNameError,setClassNameError]=React.useState("")

  const [openError, setOpenError] = React.useState(true);
  const [openSuccess, setOpenSuccess] = React.useState(true);
  const [successMessage,setSuccessMessage]=React.useState("");

  const handleCloseMessage=()=>{
    setOpenError(false)
    setOpenSuccess(false)
      }
    
  const handleSubmit=async (e)=>{
    e.preventDefault()
if(teacherId==""){
 setTeacherIdError("Phone number is required")
}
else if(className==""){
 setClassNameError("Class Name is required");
}
else{
  setTeacherIdError("")
  setClassNameError("");
 await dispatch(addClassAction(teacherId,className))
}
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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

       //handle class
       React.useEffect(()=>{
        async function fetchData(){
      if(!addClass.loading){
        if(addClass.details.length!==0){
          setSuccessMessage(addClass.details.message)
          setOpenSuccess(true)
        setTeacherId("")
        setClassName("")
          await dispatch(getClassesAction())
        }
      }
        }
        fetchData()
       },[addClass.details])
    
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
    <DialogTitle>Add New Class</DialogTitle>
    <DialogContent>
    {
            !addClass.error ? null : (
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
                        {addClass.error}
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
       value={teacherId}
       onChange={(e)=>setTeacherId(e.target.value)}
       helperText={teacherIdError? teacherIdError : ""}
       error={teacherIdError}
      autoFocus
      margin="dense"
      id="teacherId"
      label="Teacher Phone Number"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
     value={className}
     onChange={(e)=>setClassName(e.target.value)}
     helperText={classNameError? classNameError : ""}
     error={classNameError}
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
    {
      addClass.loading?"Loading":
      <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
    }
   
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