import React from 'react';
import './App.css';
import SignUp from './SignUp';
import Parent  from './Parent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';
function App() {


  
  
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className=" nav-link w" to='/SignUp'> Sign Up </Link>
            </li>
            <li className="nav-item">

              <Link className=" nav-link w" to='/Login'> Login </Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link w" to='/Homepage'> Home Page</Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link w" to='/Parent'> Parent</Link>
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
            <Route path= '/Parent' exact component={Parent}/>

        
          </Switch>
     
        </div>
      </div>
    </div>
  </Router>
  );}
export default App;