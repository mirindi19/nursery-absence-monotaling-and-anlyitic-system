import React from "react";
import {useEffect} from "react"
import HomePage from "./pages/home/HomePage";
import Users from "./components/table/Users";
import Teacher from "./components/table/Teacher";
import Login from "./pages/login/Login";
import Class from "./components/table/Class";
import Children from "./components/table/Children";
import Message from "./components/table/Message";
import Parent from "./components/table/Parent";
import Attandance from "./components/table/Attandance";
import Subject from "./components/table/Subject";
import Topnav from "./components/topnav/Topnav";
import Registration from "./pages/registration/Registration";
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom";
import ThemeProvider from './theme';
import { HelmetProvider } from 'react-helmet-async';

function App() {

   const auth=localStorage.getItem("x-access-token")

  return (
    <HelmetProvider>
    <BrowserRouter>
     <ThemeProvider>
     <Routes>
    
        <Route path='/' element={<Login/>}/>:
        <Route path='/dashboard' element={<HomePage/>}/>
 
        <Route path='/user-list' element={<Users/>}/>
        <Route path='/teacher-list' element={<Teacher/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/children' element={<Children/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/parent' element={<Parent/>}/>
        <Route path='/attandance' element={<Attandance/>}/>
        <Route path='/subject' element={<Subject/>}/>
        <Route path='/topnav' element={<Topnav/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
     </ThemeProvider>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
