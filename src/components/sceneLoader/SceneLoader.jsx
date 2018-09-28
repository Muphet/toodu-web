import React from "react";
import PropTypes from 'prop-types';

export default function SceneLoader({ theme = 'default' }) {
  return (
    <div className="sceneLoader">
      <div className={`sceneLoader__loader sceneLoader__loader--${theme}`} title="Loading..." />
    </div>
  );
}

SceneLoader.propTypes = {
  theme: PropTypes.string
};
