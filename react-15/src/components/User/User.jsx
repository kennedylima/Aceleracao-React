import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to={`/users/name`} className="user">
          <div className="user__thumb">
            <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="avatar"/>
          </div>
          <div className="user__name">T'Challa</div>
        </Link>
      </header>
    </article>
  )
};

export default User;
