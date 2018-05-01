import PropTypes from "prop-types";
import React, { Component } from "react";

export default class FormErrors extends Component {
  static propTypes = {
    errors: PropTypes.object
  };

  render() {
    if (!this.props.errors) return null;

    return (
      <ul>
        {Object.keys(this.props.errors).map(field => (
          <li key={field}>{`${field} ${this.props.errors[field][0]}`}</li>
        ))}
      </ul>
    );
  }
}
