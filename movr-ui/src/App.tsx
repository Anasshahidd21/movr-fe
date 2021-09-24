import React from "react";
import NavBar from "./Components/navBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div> 
      <NavBar />
      <header>
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        
        
        </BrowserRouter>
        
        
        
      </header> 
      <head>
    <meta charSet="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>Untitled</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
    <link rel="stylesheet" href="assets/css/style.css"/>
</head>
      <div className="footer-basic">
        <footer>
            {/* <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div> */}
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">About</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p className="copyright">MovR Relocation Services © 2021</p>
        </footer>
    </div>
    
    
    
    </div>
  );
}

export default App;
