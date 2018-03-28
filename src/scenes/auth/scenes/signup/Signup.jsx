// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignupForm from "./components/signupForm/SignupForm";

export default class Signup extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <SignupForm />
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/forgot-password">Forgotten your password?</Link>
      </div>
    );
  }
}
