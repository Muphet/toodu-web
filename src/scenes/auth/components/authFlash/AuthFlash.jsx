// import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class AuthFlash extends Component {
  // static propTypes = {};

  render() {
    return (
      <p>
        {this.props.flash}
      </p>
    );
  }
}
