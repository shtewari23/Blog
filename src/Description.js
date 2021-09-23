/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from './axios.config';
import React, { useState ,useEffect} from 'react';
import './App.css';
import img from './assets/img.png';
import Heart from 'react-animated-heart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Result from './Result';
import { useParams} from 'react-router';
import Parent from './Parent';

function Description(props) {
  {
    /* Initializing isClick */
  }
 
  const [isClick, setClick] = useState(false);

  return (
    
    <Router>

      <div className="desc">
        <div className="desc2">
          {/*Navigation Link directing to articles*/}
          <Link  to={`/Parent/${props.slug}`}>

            <h1 className="title">
                Title:<span className="t"> {props.title}</span>
            </h1>

            {/* Description Tag*/}
            <h1 className="title">
                Description :
              <span className="descr">
                <b>{props.desc} </b> {/*Displaying description tag */}
              </span>
            </h1>

            {/*Created At div */}
            <h1 className="title">
                created At:
              <span className="descr">
                {' '}
                <b>{props.create}</b> {/*Displaying created at value */}
              </span>
            </h1>
            <h1 className="title">
                Slug:
              <span className="descr">
                {' '}
                <b>
                  {props.slug} {props.fav}
                </b>
              </span>
            </h1>
            {/*}<button onClick={like} className='but'><img src={img} className='img'></img></button>
    <button className='but'onClick={dis}><img src={img2} className='img'></img></button>{*/}
          </Link>

          {/* Like Button */}
          <Heart
            className="bu"
            isClick={isClick}
            onClick={() => {
              props.like();
              setClick(!isClick);
            } } />
          <Outlet />

        </div>
      </div>


      <Routes>
        <Route path=":slug"  element={Result} />
      </Routes>
    </Router>
  );
}

export default Description;
