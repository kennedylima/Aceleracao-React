import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <div className="story__header">
          <div className="user">
            <div className="user__thumb">
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="avatar"/>
            </div>
            <span className="user__name" > asdasdsa </span>
          </div>
        </div>
        <div className="story__progress">
          <div className="story__progress__elapsed">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
