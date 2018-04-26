import PropTypes from "prop-types";
import React, { Component } from "react";

export default class TextField extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string
  };

  static defaultProps = {
    value: ""
  }

  handleChange(e) {
    this.props.onChange(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className="field">
        {this.props.label &&
          <label htmlFor={this.props.name} className="label">
            {this.props.label}
          </label>
        }
        <div className="control">
          {this.props.type === "textarea"
            ? <textarea
                name={this.props.name}
                className="textarea"
                id={this.props.name}
                value={this.props.value}
                onChange={this.handleChange.bind(this)}
                placeholder={this.props.label}
              />
            : <input
                name={this.props.name}
                className="input"
                id={this.props.name}
                type={this.props.type}
                value={this.props.value}
                onChange={this.handleChange.bind(this)}
                placeholder={this.props.label}
              />
          }
        </div>
      </div>
    );
  }
}
