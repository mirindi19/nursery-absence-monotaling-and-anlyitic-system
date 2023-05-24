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
import { Alert, Collapse, IconButton, MenuItem } from "@mui/material";
import { addStudentAction } from "../../redux/actions/addStudentAction";
import { Close } from "@mui/icons-material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../Assets/images/logo.jpeg";
import moment from "moment";
const Children = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const getStudents=useSelector((state)=>state.getStudents);
  const getClasses=useSelector((state)=>state.getClasses);
  const addStudent=useSelector((state)=>state.addStudent);

  const [studentsList,setStudentsList]=React.useState([])
  const [classesList,setClassesList]=React.useState([])
  const [firstName,setFirstName]=React.useState("");
  const [lastName,setLastName]=React.useState("");
  const [dob,setDob]=React.useState("");
  const [parentId,setParentId]=React.useState("");
  const [classId,setClassId]=React.useState("");

  const [firstNameError,setFirstNameError]=React.useState("");
  const [lastNameError,setLastNameError]=React.useState("");
  const [dobError,setDobError]=React.useState("");
  const [parentIdError,setParentIdError]=React.useState("");
  const [classIdError,setClassIdError]=React.useState("");

  const [openError, setOpenError] = React.useState(true);
  const [openSuccess, setOpenSuccess] = React.useState(true);
  const [successMessage,setSuccessMessage]=React.useState("");
  const [gender,setGender]=React.useState('Male')
  const todaydate=new Date().toISOString().slice(0,10);

  const handleCloseMessage=()=>{
    setOpenError(false)
    setOpenSuccess(false)
      }
    
  const handleSubmit=async (e)=>{
    e.preventDefault()
if(firstName==""){
setFirstNameError("First Name is required");
}
else if(lastName==""){
 setLastNameError("Lass Name is required");
}
else if(dob==""){
  setDobError("Select Date of Birth");
 }
 else if(parentId==""){
  setParentIdError("Parent Phone Number is required");
 }
 else if(classId==""){
  setClassIdError("Select Class Name");
 }
else{
  setFirstNameError("");
  setLastNameError("");
  setDobError("");
  setParentIdError("");
  setClassIdError("");
 await dispatch(addStudentAction(firstName,lastName,dob,parentId,classId,gender))
}
 }


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


   React.useEffect(()=>{
    async function fetchData(){
  if(!addStudent.loading){
    if(addStudent.details.length!==0){
      setSuccessMessage(addStudent.details.message)
      setOpenSuccess(true)
   setDob("")
   setFirstName("")
   setLastName("")
   setClassId("")
  setParentId("")
      await dispatch(getStudentsAction())
    }
  }
    }
    fetchData()
   },[addStudent.details])

   
//report
const generateListOfAllKids = () => {
  const doc = new jsPDF();
  doc.addImage(logo, "JPEG", 20, 5, 40, 40);
  doc.setFont("Helvertica", "normal");
  doc.text("Rwanda Basic Education Board", 20, 50);
  // doc.text(`Class Name: N3`, 20, 55);
  doc.text("Email: info@gsa.rw", 20, 60);
  doc.setFont("Helvertica", "normal");
  doc.text(`Date ${todaydate}`, 140, 65);
  doc.setFont("Helvertica", "bold");
  doc.text("List of all Kids ", 70, 75);
  const tableColumn = [
    "First Name",
    "Last Name",
    "Reg Number",
    "Gender"
   
   
  ];
  const tableRows = [];

  studentsList.map((t) => {
    const teacherData = [
      t.firstName,
      t.lastName,
      t.regNumber,
      t.gender
    

    ];
   
      tableRows.push(teacherData);

  });

  doc.autoTable(tableColumn, tableRows, {
    startY: 80,
    theme: "striped",
    margin: 10,
    styles: {
      font: "courier",
      fontSize: 12,
      overflow: "linebreak",
      cellPadding: 3,
      halign: "center",
    },
    head: [tableColumn],
    body: [tableRows],
  });
  const date = Date().split(" ");
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  doc.save(`report_${dateStr}.pdf`);
};


  return (
    <div className='children'>
    <Sidebar/>
    <div className="navchildren">
    <Navbar/>
    <div className="childrenTable">
    <Button variant="outlined" onClick={handleClickOpen}>
    Add New Student
  </Button>
  <Button variant="outlined" onClick={generateListOfAllKids}>Generate Report</Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Add New Student</DialogTitle>
    <DialogContent>
    {
            !addStudent.error ? null : (
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
                        {addStudent.error}
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
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      helperText={firstNameError? firstNameError : ""}
      error={firstNameError}
      autoFocus
      margin="dense"
      id="firstName"
      label="First Name"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    value={lastName}
    onChange={(e)=>setLastName(e.target.value)}
    helperText={lastNameError? lastNameError : ""}
    error={lastNameError}
    autoFocus
    margin="dense"
    id="lastName"
    label="Last Name"
    type="text"
    fullWidth
    variant="standard"
  />
  <TextField
  value={dob}
  onChange={(e)=>setDob(e.target.value)}
  helperText={dobError? dobError : ""}
  error={dobError}
  autoFocus
  margin="dense"
  id="dob"
  type="date"
  fullWidth
  variant="standard"
/>

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
      >
        <FormControlLabel value="Female"  control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
<TextField
value={parentId}
onChange={(e)=>setParentId(e.target.value)}
helperText={parentIdError? parentIdError : ""}
error={parentIdError}
autoFocus
margin="dense"
id="parentId"
label="Parent Phone Number"
type="text"
fullWidth
variant="standard"
/>
<TextField
value={classId}
onChange={(e)=>setClassId(e.target.value)}
helperText={classIdError? classIdError : ""}
error={classIdError}
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
    {
      addStudent.loading?"Loading":
      <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
    }
    
  </DialogActions>
</Dialog>
    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="center">Last Name</TableCell>
          <TableCell align="center">Reg Number</TableCell>
          <TableCell align="center">Gender</TableCell>
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
            <TableCell align="center">{row.gender}</TableCell>
            <TableCell align="center">{moment(row.dob).format('lll')}</TableCell>
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