import PropTypes from "prop-types";
import React, { Component } from "react";

export default class FormErrors extends Component {
  static propTypes = {
    errors: PropTypes.any
  };

  errors() {
    const err = this.props.errors;
    if (err.full_messages) return err.full_messages;
    else if (Array.isArray(err)) return err;
    else if (typeof err === "object") return [err[Object.keys(err)[0]]];
    else if (typeof err === "string") return [err];
    else return ["There was an error"];
  }

  render() {
    if (!this.props.errors) return null;

    return (
      <ul className="formErrors">
        {this.errors().map(err => <li key={err}>{err}</li>)}
      </ul>
    );
  }
}
