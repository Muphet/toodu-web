// import PropTypes from 'prop-types';
import "./authField.scss";
import React, { Component } from "react";

export default class AuthField extends Component {
  // static propTypes = {};

  handleChange(e) {
    this.props.onChange(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className="auth-field">
        <label className="auth-field__label" htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          name={this.props.name}
          id={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
