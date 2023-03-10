import "./users.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Users = () => {
  function createData(
    email: string,
    Password: String,
    isActive: String,
    teacher: String,
    Parent: String,
    ResetLink:String,
  ) {
    return { email, Password, isActive, teacher, Parent,ResetLink};
  }
  
  const rows = [
    createData('saidi@gmail.com', 'kjimo', 'true', 'mirindi', 'saidi','link'),
    createData('saidi@gmail.com', 'kjimo', 'true', 'mirindi', 'saidi','link'),
    createData('saidi@gmail.com', 'kjimo', 'true', 'mirindi', 'saidi','link'),
    createData('saidi@gmail.com', 'kjimo', 'true', 'mirindi', 'saidi','link'),
  ];

  return (
    <div className='users'>
    <Sidebar/>
     <div className="nav">
     <Navbar/>
     <div className="usercontainer">
     <TableContainer component={Paper}>
     <Table sx={{ minWidth: 650 }} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Email</TableCell>
           <TableCell align="right">Password</TableCell>
           <TableCell align="right">isActive</TableCell>
           <TableCell align="right">Teacher</TableCell>
           <TableCell align="right">Parent</TableCell>
           <TableCell align="right">ResetLink</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row">
               {row.email}
             </TableCell>
             <TableCell align="right">{row.Password}</TableCell>
             <TableCell align="right">{row.isActive}</TableCell>
             <TableCell align="right">{row.teacher}</TableCell>
             <TableCell align="right">{row.Parent}</TableCell>
             <TableCell align="right">{row.ResetLink}</TableCell>
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

export default Users