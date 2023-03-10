import HomePage from "./pages/home/HomePage";
import Users from "./components/table/Users";
import Teacher from "./components/table/Teacher";
import Login from "./pages/login/Login";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user-list' element={<Users/>}/>
        <Route path='/teacher-list' element={<Teacher/>}/>
        <Route path='/login-form' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
