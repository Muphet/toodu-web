// import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class AuthMessage extends Component {
  // static propTypes = {};

  render() {
    return (
      <p>
        {this.props.message}
      </p>
    );
  }
}
