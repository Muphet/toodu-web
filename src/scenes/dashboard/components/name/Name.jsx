import PropTypes from 'prop-types';
import React, { Component } from 'react';
import nameContainer from './nameContainer';

export class Name extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    updateName: PropTypes.func.isRequired,
  };

  handleChange(e) {
    this.props.updateName(e.target.value);
  }

  render() {
    return (
      <div>
        {this.props.name ? (
          <h3>Hello, {this.props.name}!</h3>
        ) : (
          <h3>What is your name?</h3>
        )}

        <label htmlFor="name">My name is:</label>
        <input
          id="name"
          type="text"
          value={this.props.name}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default nameContainer(Name);
