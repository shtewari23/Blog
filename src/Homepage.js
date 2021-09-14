// Immporting components
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import axios from './axios.config.js';
import { useHistory } from 'react-router';


function Homepage() {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const config = {
    headers: {
      Authorization: 'Authord' + sessionStorage.getItem('token'),
    },
  };

  function logout() {
    history.push('/Login');
    sessionStorage.clear();
    localStorage.clear();
    // eslint-disable-next-line no-console
    console.log('Logout');
  }

  return (
    <div className="c">

      <button className=" logout" onClick={logout}>Log out</button>
    </div>
  );
}
export default Homepage;
