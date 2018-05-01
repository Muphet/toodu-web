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
        <div className="authBox">
          <header className="authBox__header">
            <figure className="authBox__icon authBox__icon--user" />
            <h1 className="authBox__title">Your email has been verified</h1>
          </header>
          <main className="authBox__body">
            <Link to="/" className="button button--green">
              Get started
            </Link>
          </main>
        </div>
      </div>
    );
  }
}
