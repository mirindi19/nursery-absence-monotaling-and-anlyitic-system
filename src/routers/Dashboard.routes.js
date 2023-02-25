import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
// import Dashboard from "../view/Dashboard";
// import privateRoute from "./privateRoutes";
// import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import Login from "../pages/login/Login";
// import List from "../pages/list/List";
// import Hero from "../pages/hero/Hero";
// import Home from "../pages/home/Home"

function App(){
  const decode =(token) => {
    
  }
  const {path}=useRouteMatch();
  return (
    <div>
    <Switch>
    <Dashboard>
    <Route
      component={({ match }) => (
        <div>
        <privateRoute exact path={path} index>
        <Route index component={Home}/>
       </privateRoute>
          <privateRoute exact path={`${path}/users`} index >
          <Route index component={List}/>
          </privateRoute>
        </div>

      )} 
    />
    </Dashboard>
    </Switch>
    </div>
  );
}

  export default App



