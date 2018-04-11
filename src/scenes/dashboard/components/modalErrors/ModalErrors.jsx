// import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class ModalErrors extends Component {
  // static propTypes = {};

  render() {
    if (!this.props.errors.length) return null;

    return (
      <ul>
        {this.props.errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    );
  }
}
