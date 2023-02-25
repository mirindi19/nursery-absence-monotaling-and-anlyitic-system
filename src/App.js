import HomePage from "./pages/home/HomePage";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Routes from './routers/index';
function App() {
  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}

export default App;
