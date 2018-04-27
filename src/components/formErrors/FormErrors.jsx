import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class FormErrors extends Component {
  static propTypes = {
    errors: PropTypes.array
  };

  render() {
    if (!this.props.errors) return null;

    return (
      <ul>
        {this.props.errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    );
  }
}
