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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import moment from "moment/moment";
import axios from "axios";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';

import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../Assets/images/logo.jpeg";
const Attandance = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const getStudentsByClassId=useSelector((state)=>state.getStudentsByClassId);
  const [studentsList,setStudentsList]=React.useState([])
  const [Cdate, setDate] = React.useState('');
  let newdate=new Date().toLocaleDateString('fr-FR');
  const todaydate=new Date().toISOString().slice(0,10);
  const handleChange=async(e,id)=>{

  await axios.post('http://localhost:8000/api/attendances', {
    studentId:id,
    status:e.target.value,
    date:Cdate.toLocaleDateString('fr-FR')
  })
  .then(function (response) {
    console.log("Response data:",response.data);
    
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  
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

    //report 
    const todaysDate = () => {
      const time = new Date(Date.now());
      const year = time.getFullYear();
      const month = time.getMonth();
      const day = time.getDay();
      const date = `${year}-${month}-${day}`;
      return date;
    };

    const generateListOfAllStudent = () => {
      const doc = new jsPDF();
      doc.addImage(logo, "JPEG", 20, 5, 40, 40);
      doc.setFont("Helvertica", "normal");
      doc.text("Rwanda Basic Education Board", 20, 50);
      doc.text(`Class Name: N3`, 20, 55);
      doc.text("Email: info@gsa.rw", 20, 60);
      doc.setFont("Helvertica", "normal");
      doc.text(`Date ${todaydate}`, 140, 65);
      doc.setFont("Helvertica", "bold");
      doc.text("List of Students Report", 70, 75);
      const tableColumn = [
        "Last Name",
        "First Name",
        "Student Reg number",
        "Gender",
       
      ];
      const tableRows = [];
  
      studentsList.map((student) => {
        const studentData = [
          student.lastName,
          student.firstName,
          student.regNumber,
          student.gender,

        ];
       
          tableRows.push(studentData);

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
    <div className="attandance">
    <Sidebar/>
    <div className="navAttandance">
    <Navbar/>
  
    <div className="attandanceTable">
     
  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
        ]}
      >
        
        <DemoItem label="Pick Date">
          <DatePicker
          defaultValue={dayjs(newdate)} 
          value={Cdate}
        onChange={(date) => {
      const d = new Date(date);
      setDate(d);
    }}  />
        </DemoItem>
      </DemoContainer>
      
    </LocalizationProvider>
    <Button variant="outlined" onClick={generateListOfAllStudent} >Generate Report</Button>
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
            <FormGroup
             row
             aria-labelledby="demo-row-radio-buttons-group-label"
             name="row-radio-buttons-group"
            // value={checked}
                onChange={(e)=>handleChange(e,row.regNumber)}
            >
            <FormControlLabel control={<Checkbox
          
              inputProps={{ 'aria-label': 'controlled' }}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} value="Present"   label="Present"/>
            <FormControlLabel control={<Checkbox
           
              inputProps={{ 'aria-label': 'controlled' }}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}  value="Absent"   label="Absent" />
            </FormGroup>
           
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