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
const Parent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    function createData(
        futherName: string,
        motherName: String,
        telephone:String,
        email:String,
      ) {
        return {futherName,motherName,telephone,email};
      }
      
      const rows = [
        createData('mirindisaidi','jimmy','0789998738','miri@gmail.com'),
        createData('mirindisaidi','jimmy','0789998738','miri@gmail.com'),
        createData('mirindisaidi','jimmy','0789998738','miri@gmail.com'),
      ];
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
          <TableCell>Futher Name</TableCell>
          <TableCell align="right">Mother Name</TableCell>
          <TableCell align="right">Telephone</TableCell>
          <TableCell align="right">Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.futherName}
            </TableCell>
            <TableCell align="right">{row.motherName}</TableCell>
            <TableCell align="right">{row.telephone}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
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