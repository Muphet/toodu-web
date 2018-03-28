// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm";

export default class Login extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <LoginForm />
        <Link to="/auth/forgot-password">Forgotten your password?</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}
