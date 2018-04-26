// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import checkIconUrl from "./check.svg";
import AuthService from "../../../../services/AuthService.js";

export default class Verified extends Component {
  // static propTypes = {};

  componentDidMount() {
    AuthService.setFromUrl();
  }

  render() {
    return (
      <div>
        <div className="has-text-centered auth-heading has-text-grey">
          <h1 className="title">Success!</h1>
        </div>
        <div className="box auth-box">
          <figure className="avatar">
            <img src={checkIconUrl} />
          </figure>
          <h1 className="subtitle">Your email has been verified</h1>
          <Link to="/" className="button is-info is-fullwidth">Get started</Link>
        </div>
      </div>
    );
  }
}
