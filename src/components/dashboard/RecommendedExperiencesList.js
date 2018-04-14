import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const RecommendedExperiencesList = (props) => {

  const style = {
    width: "100%",
    overflow: "hidden"
  };

  const experiences = props.experiences;

  return (
    <div className="recommended wrapper">
      <Paper style = {style} zDepth = {2}>
        <div className="recommended__title">
          <h1>RECOMMENDED EXPERIENCES</h1>
        </div>
        {experiences.map((experience, key) => (
          <Link to = {'/'} className="recommended-link" key = { key }>
            <div className="recommended-link__text">
              <h2>{experience.gameTitle}</h2>
            </div>
            <div className="recommended-link__img" style = {
              experience.thumbnailUrl === null
                ? {backgroundImage: "url(images/games.jpeg)"}
                : {backgroundImage: experience.thumbnailUrl}}>
            </div>
          </Link>
        ))}
      </Paper>
    </div>
  );
};

RecommendedExperiencesList.propTypes = {
  experiences: PropTypes.array.isRequired,
};

export default RecommendedExperiencesList;
