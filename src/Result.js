/* eslint-disable no-console */
/* Resulteslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import axios from './axios.config';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
function Result() {
  //const [a, set] = useState(null);
  const history = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState('null');
  const [m, set] = useState('null');

  function logout() {
    history.push('/Login');
    sessionStorage.clear();
    localStorage.clear();
    // eslint-disable-next-line no-console
    console.log('Logout');
  }
  let { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      console.log(slug);
      axios.get(`/api/articles/${slug}`).then((res) => {
        console.log(res);
        console.log(slug);
        setResult(res.data.article.author);
        set(res.data.article);
        console.log(res.data.article.title);
        console.log(res.data.article.author.username);



        //const m = res.data.author;
        // set(res.data.autor);
      });
    };

    const getComment = async () => {
      axios.get(`/api/articles/${slug}/comments`).then((r) => {
        console.log('Comment',r);
        console.log(slug);
      });
    };

    getData();
    getComment();
  }, []);
  return (
    <>
      <>
        {/* Author Image */}
        <div className="rimg">
          <img src={result.image} className="rimg2" alt="IMAGE"></img>
        </div>
        <div className="rright">
          <h1 className="rright1"></h1>
        </div>
        {/* Article Title*/}

        <div className="rTitle">
          <h1 className="rTitle2">{m.title}</h1>
        </div>
        {/* Author username*/}

        <div className="rAuthor">
          <h1 className="rAuthor1">{result.username}</h1>
        </div> 
        {/*Article Description */}

        <div className="rDescr">
          <p className="rDescr1">{m.description}</p>
        </div>

        {/* Comment*/}

        <div className="rcomment">
          <div className="rcomment1">
            <div className="cimg">
              <img src="" className="comimg"></img>{' '}
            </div>
            {/*User Name */}

            <p className="acom">Author Name</p>
          </div>
        </div>
      </>
      <nav className=" fixed-top log ">
        {/*Logout Button */}

        <button className="logout" onClick={logout}>
          Log out
        </button>
      </nav>
    </>
  );
}
export default Result;
