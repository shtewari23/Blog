/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
//importing components
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from './axios.config';

//Login function will be called when login get button get clicked
function Login() {
  const [email, setEmail] = useState(''); //Initializing email and setEmail to store email value
  const [password, setPassword] = useState(''); //Initializing passsword and setPassword to store password value
  const history = useHistory();

  const login = async (event) => {
    event.preventDefault(); //
    console.warn(email, password);
    let item = { user: { email, password } }; // Storing the value of email and password in item
    console.log(item);
    

    //Requesting api
    axios
      .post('/api/users/login', item)
      .then((result) => {
        sessionStorage.setItem('token', result.data.user.token); //Storing token in result
        console.warn('result', result);
        history.push('/Parent');
      })

      //Catching and displaying the errors
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    //Creating a sign in form
    <form className='for'>
      <h3>Sign In</h3>
      <div className="form-group ">
        {/* Textobox for email address */}
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Textobox for password */}
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          {/* Checkbox */}
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={login}
      >
        Submit
      </button>
      <p className="forgot-password text-right"></p>
    </form>
  );
}
{
  /* Exporting login component */
}
export default Login;
