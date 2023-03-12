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
const Children = () => {
    function createData(
        firstname: string,
        lastname: String,
        parentId: String,
        dob:String,
        classId: String,
      ) {
        return { firstname,lastname,parentId,dob,classId};
      }
      
      const rows = [
        createData('mirindi','saidi','0990','dob','78'),
        createData('mirindi','saidi','0990','dob','78'),
        createData('mirindi','saidi','0990','dob','78'),
        createData('mirindi','saidi','0990','dob','78'),
      ];
  return (
    <div className='children'>
    <Sidebar/>
    <div className="navchildren">
    <Navbar/>
    <div className="childrenTable">
    <TableContainer component={Paper} className="teacherTable">
    <Table sx={{ minWidth: 200 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="right">Last Name</TableCell>
          <TableCell align="right">Parent Id</TableCell>
          <TableCell align="right">Date of Birth</TableCell>
          <TableCell align="right">Class Id</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.firstname}
            </TableCell>
            <TableCell align="right">{row.lastname}</TableCell>
            <TableCell align="right">{row.parentId}</TableCell>
            <TableCell align="right">{row.dob}</TableCell>
            <TableCell align="right">{row.classId}</TableCell>
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