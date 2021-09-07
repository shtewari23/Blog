// Imporitng Components
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Creating SignUp component
function SignUp() {
  const [username, setName] = useState(""); //Initializing username and setName function
  const [email, setEmail] = useState(""); //Initializing email and setName function
  const [password, setPassword] = useState(""); //Initializing password and setpassword function

  //submit function will call when submit button get clicked
  async function submit(event) {
    event.preventDefault();
    let item = { user: { username, password, email } }; //Storing value of username,password and email in item
    console.warn(item);

    // Fetching the api
    let result = await fetch("https://conduit.productionready.io/api/users", {
      method: "POST", //Using post method

      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.warn("result", result);
  }
  return (
    //Creating a register form
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        {/* User name */}
        <label>User name</label>

        {/* User name Textbox */}
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Email Address */}
      <div className="form-group">
        <label>Email address</label>
        {/* Email Address textbox*/}

        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* Password */}

      <div className="form-group">
        <label>Password</label>
        {/* Password textbox*/}

        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        onClick={submit}
        className="btn btn-primary btn-block"
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        {/* Transferrring to login page if already registered */}
        Already registered <a href="Login">sign in?</a>
      </p>
    </form>
  );
}
{
  /* Exporting Sign Up component */
}

export default SignUp;
