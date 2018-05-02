import PropTypes from "prop-types";
import React, { Component } from "react";

export default class TextField extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    showLabel: PropTypes.bool
  };

  static defaultProps = {
    value: "",
    showLabel: true
  };

  handleChange(e) {
    this.props.onChange(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className="textField">
        {this.props.label &&
          this.props.showLabel && (
            <label className="textField__label" htmlFor={this.props.name}>
              {this.props.label}
            </label>
          )}
        {this.props.type === "textarea" ? (
          <textarea
            className="textField__input input"
            name={this.props.name}
            id={this.props.name}
            value={this.props.value}
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.label}
          />
        ) : (
          <input
            className="textField__input input"
            name={this.props.name}
            id={this.props.name}
            type={this.props.type}
            value={this.props.value}
            onChange={this.handleChange.bind(this)}
            placeholder={this.props.label}
          />
        )}
      </div>
    );
  }
}
