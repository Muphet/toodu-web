import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../../services/AuthService.js";

export default class Verified extends Component {
  static propTypes = {};

  componentDidMount() {
    AuthService.setFromUrl();
  }

  render() {
    return (
      <div>
        <h1 className="subtitle">Your email has been verified</h1>
        <Link to="/" className="button is-info is-fullwidth">
          Get started
        </Link>
      </div>
    );
  }
}
