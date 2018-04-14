import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const FeaturedExperiencesList = (props) => {

  const style = {
    width: "100%",
    overflow: "hidden",
  };

  const experiences = props.experiences;

  return (
    <div className="featured wrapper">
      <Paper style = {style} zDepth = {2}>
        <div className="featured__title">
          <h1>FEATURED EXPERIENCES</h1>
        </div>
        {experiences.map((experience, key) => (
          <Link to = {'/'} className = "featured-link" key = {key}>
            <div className = "featured-link__text">
              <h2>{experience.gameTitle}</h2>
            </div>
            <div className = "featured-link__img" style = {
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

FeaturedExperiencesList.propTypes = {
  experiences: PropTypes.array.isRequired,
};

export default FeaturedExperiencesList;
