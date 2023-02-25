import React,{useEffect} from "react";
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BungalowIcon from '@mui/icons-material/Bungalow';
// import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
 
    const history=useHistory()
    const handleLogout=()=>{
        localStorage.removeItem('access-token')
        history.push("/",{push:true})
    }
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>NAMAAS</span>
        </div>
        <div className="center">
            <ul>
      
                <p className="title">MAIN</p>
                <li>
                      <DashboardIcon className="icon"/>
                    <span>dashboard</span>
                </li>
                <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                <ProductionQuantityLimitsTwoToneIcon className="icon" />
                    <span>course</span>
                </li>
                <li>
                    <BorderColorIcon className="icon"/>
                    <span>teacher</span>
                </li>
                <li>
                    <BungalowIcon className="icon"/>
                    <span>Student</span>
                </li>   
                <li>
                    <BungalowIcon className="icon"/>
                    <span>Message</span>
                </li>  
            </ul>
        </div>
    </div>
  )
}

export default Sidebar