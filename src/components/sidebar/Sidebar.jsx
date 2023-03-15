import React from "react";
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BungalowIcon from '@mui/icons-material/Bungalow';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import IMAGES from "../../Assets/images";
const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="top">
        <img src={IMAGES.logo} alt="" className='avantare'/>
        </div>
        <div className="center">
            <ul>
      
                <p className="title">MAIN MENU</p>
                <Link to="/dashboard" style={{textDecoration:"none"}}>
                <li>
                      <DashboardIcon className="icon"/>
                    <span>dashboard</span>
                </li>
                </Link>
                <Link to="/user-list" style={{textDecoration:"none"}}>
                <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/teacher-list" style={{textDecoration:"none"}}>
                <li>
                    <BorderColorIcon className="icon"/>
                    <span>teacher</span>
                </li>
                </Link>
                <Link to="/class" style={{textDecoration:"none"}}>
                <li>
                <ProductionQuantityLimitsTwoToneIcon className="icon" />
                    <span>Class</span>
                </li>
                </Link>
                <Link to="/children" style={{textDecoration:"none"}}>
                <li>
                    <BungalowIcon className="icon"/>
                    <span>chidren</span>
                </li>  
                </Link> 
                <Link to="/message" style={{textDecoration:"none"}}>
                <li>
                    <BungalowIcon className="icon"/>
                    <span>Message</span>
                </li>  
                </Link>
                <Link to="/parent" style={{textDecoration:"none"}}>
                <li>
                <BungalowIcon className="icon"/>
                <span>Parents</span>
            </li> 
            </Link>
            <Link to="/attandance" style={{textDecoration:"none"}}>
            <li>
            <BungalowIcon className="icon"/>
            <span>Attandance</span>
        </li> 
        </Link>
        <Link to="/subject" style={{textDecoration:"none"}}>
        <li>
        <BungalowIcon className="icon"/>
        <span>Subject</span>
    </li> 
    </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar