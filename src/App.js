import React from 'react';
import './App.css';
import SignUp from './SignUp';
import Ph from './Ph';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Login from './Login';
import Homepage from './Homepage';
function App() {
  return (<Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
        <Link className=" nav-link" to='/SignUp'> Sign Up </Link>
        </li>
        <li className="nav-item">

        <Link className=" nav-link" to='/Login'> Login </Link>
        </li>
        <li className="nav-item">
        <Link className=" nav-link" to='/Homepage'> Home Page</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to = '/Ph'> Dash </Link>
          </li>

          
        </ul>
    </div>
        </nav>
        <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
        <Route path='/SignUp' exact component={SignUp}/>
        <Route path='/Login' exact component={Login}/>
        <Route path= '/Homepage' exact component={Homepage}/>
        <Route path= '/Ph' exact component={Ph}/>
    
        
        </Switch>
     
        </div>
        </div>
        </div>
      </Router>
  )}
  export default App