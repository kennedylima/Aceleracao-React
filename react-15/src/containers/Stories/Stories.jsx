import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);

  return (
    <React.Fragment >
      <section className="stories" data-testid="stories">
        <div className="container">
          <div className="user__thumb">
            <div className="user__thumb__wrapper">
              <img src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg" alt="avatar"/>
            </div> 
          </div>
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
