// import PropTypes from 'prop-types';
import React, { Component } from "react";

import SignupForm from "./components/signupForm/SignupForm";
export default class Signup extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <SignupForm />
      </div>
    );
  }
}
