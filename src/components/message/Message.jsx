import PropTypes from 'prop-types';
import React, { Component } from 'react';
import messageContainer from './messageContainer';

export class Message extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    updateMessage: PropTypes.func.isRequired,
  };

  handleChange(e) {
    this.props.updateMessage(e.target.value);
  }

  render() {
    return (
      <div>
        {this.props.message ? (
          <h3>{this.props.message}!</h3>
        ) : (
          <h3>There is no core message...</h3>
        )}

        <label htmlFor="message">The core message is:</label>
        <input
          id="message"
          type="text"
          value={this.props.message}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default messageContainer(Message);
