import React from 'react';
import './App.css';
import SignUp from './SignUp';
import Parent from './Parent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,  Route, Link } from 'react-router-dom';

import Login from './Login';
import Result  from './Result';
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* Sign Up Link */}
                <Link className=" nav-link w" to="/SignUp">
                  {' '}
                  Sign Up{' '}
                </Link>
              </li>
              {/* Login Link */}

              <li className="nav-item">
                <Link className=" nav-link w" to="/Login">
                  {' '}
                  Login{' '}
                </Link>
              </li>
            
              <li className="nav-item">
                <Link className=" nav-link w" to="/Parent">
                  {' '}
                  Parent
                </Link>
              </li>

             
            </ul>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            {/* Sign Up Path*/}
            <Routes>

              <Route path="/SignUp" element={<SignUp/>} />
              {/* Login Path*/}
              <Route path="/Login" element={<Login/>} />
              <Route path="/Parent" element={<Parent/>} >
                <Route path=":slug" element={<Result/>}/>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
