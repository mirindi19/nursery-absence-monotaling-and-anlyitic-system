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

const Teacher = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    teacherName: string,
    phoneNumber: String,
  ) {
    return { teacherName,phoneNumber};
  }
  
  const rows = [
    createData('mirindisaidi','0789997767'),
    createData('mirindisaidi','0789997767'),
    createData('mirindisaidi','0789997767'),
    createData('mirindisaidi','0789997767'),
  ];

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
      <TableCell align="right">Telphone Number</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.teacherName}
        </TableCell>
        <TableCell align="right">{row.phoneNumber}</TableCell>
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