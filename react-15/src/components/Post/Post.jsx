import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
      <div className="post__header">
        <div className="user">
          <div className="user__thumb">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="avatar"/>
          </div>
          <span className="user__name"> T'Challa </span>
        </div>
        <div className="follow-btn">
          <button >
            Seguir
          </button>
        </div>
      </div>

      <figure className="post__figure">
        <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg" alt="avatar"/>
      </figure>
      <div className="post__controls">
        <button className="post__control">
          <i className="far fa-heart" />
        </button>
        <div className="post__status">
          <div className="user">
            <span> 
              curtido por <Link to="/">{ 'Santino Rowe' }</Link> e outra <Link to="/"> <b> 1 pessoa.</b> </Link>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
