/* eslint-disable no-console */
// eslint-disable no-console
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router';
import Article from './Article';
import Description from './Description';
import axios from './axios.config';
import './App.css';
function Parent() {
  const history = useNavigate();

  //Logout button function

  function logout() {
    history('/Login');
    sessionStorage.clear();
    localStorage.clear();
    // eslint-disable-next-line no-console
    console.log('Logout');
  }

  // eslint-disable-next-line no-unused-vars
  //Using use state and settting the value of author and description
  const [author, setAuthorname] = useState([]);
  const [d, setDescription] = useState([]);

  useEffect(() => {
    const getData = async () => {
      //Accesing articles api by axios
      axios.get('/api/articles').then((res) => {
        const data = res;
        console.log(data);
        setAuthorname(data.data.articles);
        console.log('initial==>', data.data.articles);

        setDescription(data.data.articles);
      });
    };

    getData();
  }, []);

  //Like Button
  function like(slug, index) {
    //Accesing favorite api
    axios
      .post(`/api/articles/${slug}/favorite`)
      .then((data) => {
        let tempDescription = d;
        tempDescription[index] = data.data.article;
        setDescription([...tempDescription]);
        // eslint-disable-next-line no-console
        console.log('after==>', tempDescription);
        // eslint-disable-next-line no-console
        console.log(data.data.article.favorited);
        data.data.article.favorited = 'True';
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <>
      <div className="parent ">
        <div className="b">
          {/*Mapping author */}
          {author.map((e) => (
            <Article key={e} image={e.author.image} name={e.author.username} />
          ))}
        </div>
        <div className="a">
          {d.map((e, index) => (
            <Description
              key={e}
              like={() => like(e.slug, index)}
              desc={e.description}
              title={e.title}
              create={e.createdAt}
              fav={e.favorited}
              slug={e.slug}
            />
          ))}
        </div>
      </div>
      <nav className=" fixed-top log ">
        {/* Log out Button */}
        <button className="logout" onClick={logout}>
          Log out
        </button>
      </nav>
    </>
  );
}
export default Parent;
