import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class AuthFlash extends Component {
  static propTypes = {
    flash: PropTypes.string
  };

  render() {
    if (!this.props.flash) return null;
    return <p>{this.props.flash}</p>
  }
}
