// Immporting components
import React, { Component } from "react";
import "./App.css";
import axios from "./axios.config.js";
import { useHistory } from "react-router";


function Homepage() {
  const history = useHistory();
  const config = {
    headers: {
      Authorization: "Authord" + sessionStorage.getItem("token"),
    },
  };

  function logout() {
    history.push("/Login");
    sessionStorage.clear();
    localStorage.clear();
    console.log("Logout");
  }

  return (
      <div className="c">

        <button className=" logout" onClick={logout}>Log out</button>
      </div>
  );
}
export default Homepage;
