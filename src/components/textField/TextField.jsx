import React, { Component } from "react";

export default class TextField extends Component {
  // static propTypes = {};

  static defaultProps = {
    value: ""
  }

  handleChange(e) {
    this.props.onChange(this.props.name, e.target.value);
  }

  render() {
    return (
      <div className={`${this.props.className}__text-field`}>
        {this.props.label &&
          <label htmlFor={this.props.name}>
            {this.props.label}
          </label>
        }
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
