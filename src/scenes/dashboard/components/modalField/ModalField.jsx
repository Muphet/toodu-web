// import PropTypes from 'prop-types';
import "./modalField.scss";
import React, { Component } from "react";

export default class ModalField extends Component {
  // static propTypes = {};

  handleChange(e) {
    this.props.onChange(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className="modal-field">
        <label className="modal-field__label" htmlFor={this.props.name}>
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
