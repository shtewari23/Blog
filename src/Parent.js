/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useHistory } from 'react-router';
import Article from './Article';
import Description from './Description';
import axios from './axios.config';

import './App.css';
function Parent() {
  const history = useHistory();

  function logout() {
    history.push('/Login');
    sessionStorage.clear();
    localStorage.clear();
    // eslint-disable-next-line no-console
    console.log('Logout');
  }

  // eslint-disable-next-line no-unused-vars
  const [author, setAuthorname] = useState([]);
  const [d, setDescription] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios.get('/api/articles').then((res) => {
        const data = res;
        console.log(data);
        setAuthorname(data.data.articles);
        console.log(data.data.articles.author);

        setDescription(data.data.articles);
      });
    };

    getData();
  }, []);
  const [isClick, setClick] = useState(false);

  function like(slug,index) {
    setClick(!isClick);

    axios.post(`/api/articles/${slug}/favorite`).then((result) => {
      console.log(result);
    }); 

    let tempDescription = d;
    tempDescription[index] = d.article;
    setDescription([...tempDescription]);
  }

  return (
    <>
      <div className="parent ">
        <div className="b">
          {author.map((e) => (
            <Article key={e} image={e.author.image} name={e.author.username} />
          ))}
        </div>
        <div className="a">
          {d.map((e, index) => (
            <Description
              key={e}
              onLike={() => like(e.slug, index)}
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
        <button className="logout" onClick={logout}>
          Log out
        </button>
      </nav>
    </>
  );
}
export default Parent;
