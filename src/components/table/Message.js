import "./message.scss"
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
const Message = () => {
  function createData(
    message: string,
    teacherId: String,
    parentId:String,
  ) {
    return {message,teacherId,parentId};
  }
  
  const rows = [
    createData('mirindisaidi','888','990'),
    createData('mirindisaidi','888','990'),
    createData('mirindisaidi','888','990'),
    createData('mirindisaidi','888','990'),
  ];
  return (
    <div className="message">
    <Sidebar/>
    <div className="navMessage">
    <Navbar/>
    <div className="messageTable">
    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Message</TableCell>
          <TableCell align="right">Teacher Id</TableCell>
          <TableCell align="right">Parent Id</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.message}
            </TableCell>
            <TableCell align="right">{row.teacherId}</TableCell>
            <TableCell align="right">{row.parentId}</TableCell>
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

export default Message