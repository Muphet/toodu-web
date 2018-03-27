// import PropTypes from 'prop-types';
import React, { Component } from "react";
import LoginForm from "./components/loginForm/LoginForm";

export default class Login extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <LoginForm />
      </div>
    );
  }
}
