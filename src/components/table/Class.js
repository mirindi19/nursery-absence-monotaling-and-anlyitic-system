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
const Class = () => {
    function createData(
        className: string,
        teacherId: String,
      ) {
        return { className,teacherId};
      }
      
      const rows = [
        createData('mirindisaidi','0789997767'),
        createData('mirindisaidi','0789997767'),
        createData('mirindisaidi','0789997767'),
        createData('mirindisaidi','0789997767'),
      ];
  return (
    <div className='course'>
    <Sidebar/>
    <div className='coursenav'>
    <Navbar/>
    <div className="tableform">
    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Course Name</TableCell>
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
              {row.className}
            </TableCell>
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

export default Class