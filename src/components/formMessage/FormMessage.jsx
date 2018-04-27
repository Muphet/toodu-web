import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class FormMessage extends Component {
  static propTypes = {
    message: PropTypes.string
  };

  render() {
    if (!this.props.message) return null;
    return <p>{this.props.message}</p>
  }
}
