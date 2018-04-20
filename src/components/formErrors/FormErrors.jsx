// import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class FormErrors extends Component {
  // static propTypes = {};

  render() {
    if (!this.props.errors || !this.props.errors.length) return null;

    return (
      <ul className={`${this.props.className}__errors`}>
        {this.props.errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    );
  }
}
