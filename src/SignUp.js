import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
    const[username ,setName] =useState('');
    const[email ,setEmail] =useState('');
    const[password ,setPassword] =useState('');

   async function submit(){
        let item= {user:{username,password,email}}
        console.warn(item)
        let result = await fetch(" https://conduit.productionready.io/api/users",{
         method : 'POST',
        body :JSON.stringify(item),
        headers: {
            "Content-Type" :'application/json',
            "Accept" :'application/json'
        }
        })
        result = await result.json()
        console.warn('result',result)
    }
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" value={username} 
            onChange={(e) => setName(e.target.value)}/>
                </div>

              
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  value={email}
            onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
                    
                </div>

                <button type="submit" onClick ={submit}className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
        
    }
export default SignUp