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

import { getUsersAction } from "../../redux/actions/getUsersAction";
import { useDispatch,useSelector } from "react-redux";

const Users = () => {
 
  

  const dispatch=useDispatch();
  const getUsers=useSelector((state)=>state.getUsers)
  const [usersList,setUsersList]=React.useState([])
  React.useEffect(()=>{
   async function fetchData(){
    await dispatch(getUsersAction())
   }
   fetchData()
  },[])

  React.useEffect(()=>{
    async function fetchData(){
  if(!getUsers.loading){
    if(getUsers.details.length>0){
      setUsersList(getUsers.details)
    }
  }
    }
    fetchData()
   },[getUsers.details])


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
           <TableCell align="center">Role</TableCell>
          
         </TableRow>
       </TableHead>
       <TableBody>
         {usersList.map((row) => (
           <TableRow
             key={row._id}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row">
               {row.email}
             </TableCell>
             <TableCell align="center">{row.role}</TableCell>
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