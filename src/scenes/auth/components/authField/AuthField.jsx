// import PropTypes from 'prop-types';
import React, { Component } from "react";

export default class AuthField extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input
          name={this.props.name}
          id={this.props.name}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
