/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from './axios.config';
import React, { useState } from 'react';
import './App.css';
import img from './assets/img.png';
import Heart from 'react-animated-heart';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';



function Description (props){


 
  const [isClick, setClick] = useState(false);

    

  return (
    <div className="desc">
      <div className ="desc2">
        <h1 className='title'>Title:<span className='t'> {props.title}</span></h1>
         
        <h1 className='title'>Description : 
          <span className='descr'><b>{props.desc} </b></span></h1>
         

        <h1 className ='title'>created At:
          <span className='descr'>  <b>{props.create}</b></span></h1>
        
        {/*}<button onClick={like} className='but'><img src={img} className='img'></img></button>
          <button className='but'onClick={dis}><img src={img2} className='img'></img></button>{*/}
        <Heart className='bu' isClick={isClick} onClick={ ()=>props.onLike()}/>

       
      </div>
    </div>
          
  );
}

export default Description;
