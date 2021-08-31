import './App.css';
import SignUp from './SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
function Homepage() {
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
        </ul>
    </div>
        </nav>
        <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
        <Route path='/SignUp' exact component={SignUp}/>
        <Route path='/Login' component={Login}/>
        
        </Switch>
        </div>
        </div>
        </div>
      </Router>
  )}
  export default Homepage