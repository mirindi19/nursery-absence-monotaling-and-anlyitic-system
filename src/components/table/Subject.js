import "./subject.scss"
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
const Subject = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    function createData(
        subjectName: string,
        video: String,
        file:String,
        teacherId:String,
      ) {
        return {subjectName,video,file,teacherId};
      }
      
      const rows = [
        createData('English','video','file1','009'),
        createData('English','video','file1','009'),
        createData('English','video','file1','009'),
      ];
  return (
    <div className="subject">
    <Sidebar/>
    <div className="navSubject">
    <Navbar/>
    <div className="subjectTable">
    <Button variant="outlined" onClick={handleClickOpen}>
    Add Subject
  </Button>
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Registration</DialogTitle>
    <DialogContent>
      <TextField
      autoFocus
      margin="dense"
      id="subjectName"
      label="Subject Name"
      type="text"
      fullWidth
      variant="standard"
    />
    <TextField
    autoFocus
    margin="dense"
    id="video"
    type="file"
    fullWidth
    variant="standard"
  />
  <TextField
  autoFocus
  margin="dense"
  id="files"
  type="file"
  fullWidth
  variant="standard"
/>
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
id="classId"
label="classId"
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
          <TableCell>Subject Name</TableCell>
          <TableCell align="right">Video</TableCell>
          <TableCell align="right">File</TableCell>
          <TableCell align="right">Teacher Id</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.subjectName}
            </TableCell>
            <TableCell align="right">{row.video}</TableCell>
            <TableCell align="right">{row.file}</TableCell>
            <TableCell align="right">{row.teacherId}</TableCell>
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

export default Subject