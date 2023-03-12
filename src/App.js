import HomePage from "./pages/home/HomePage";
import Users from "./components/table/Users";
import Teacher from "./components/table/Teacher";
import Login from "./pages/login/Login";
import Class from "./components/table/Class";
import Children from "./components/table/Children";
import Message from "./components/table/Message";
import Parent from "./components/table/Parent";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user-list' element={<Users/>}/>
        <Route path='/teacher-list' element={<Teacher/>}/>
        <Route path='/login-form' element={<Login/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/children' element={<Children/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/parent' element={<Parent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
