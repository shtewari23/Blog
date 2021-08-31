import { render } from "@testing-library/react";
import React, { Component } from "react";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
function Login() {

    const[email,setEmail]=useState('')
    const[username,setName]=useState('')
    const[password,setPassword]=useState('')
    const history =useHistory()
    useEffect(()=>{
        if ( localStorage.getItem('user-info')){
           <div>
               <Dashboard/>
           </div>
            }
        }
    

    )
    async function login(event){
        event.preventDefault();
        console.warn(email,password)
        let item= {user:{email,password}}
     
        let result = await fetch(" https://conduit.productionready.io/api/users/login",{
        method : 'POST',
        headers: {
            "Content-Type" :'application/json',
            "Accept" :'application/json'
        },
        body :JSON.stringify(item),
        })
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push('/Dashboard')
        console.warn('result',result)
    }

    
        return (
            <form >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    onChange ={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={login}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    
}
export default Login