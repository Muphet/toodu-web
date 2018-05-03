import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    id: PropTypes.string.isRequired
  };

  handleChange(e) {
    this.props.onChange(e.target.checked);
  }

  render() {
    return (
      <div className={"checkbox " + this.props.className}>
        <input
          className="checkbox__input"
          checked={this.props.checked}
          id={this.props.id}
          onChange={this.handleChange.bind(this)}
          type="checkbox"
        />
        <label className="checkbox__label" htmlFor={this.props.id} />
      </div>
    );
  }
}
