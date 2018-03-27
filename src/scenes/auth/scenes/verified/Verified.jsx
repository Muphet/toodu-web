// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Verified extends Component {
  // static propTypes = {};

  // TODO: grab auth info from url

  render() {
    return (
      <div>
        <h1>Your e-mail has been verified</h1>
        <Link to="/">Get started</Link>
      </div>
    );
  }
}
