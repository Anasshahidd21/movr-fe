import React from "react";
import Login from "./views/Login";
import Signup from "./views/Signup";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import fire from "./firebase";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
