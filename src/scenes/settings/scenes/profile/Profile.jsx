import React, { Component } from "react";

export default class Profile extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <h2 className="card-header-title">Profile</h2>
        </header>
        <div className="card-content">
          <div className="content">
            Content here
          </div>
        </div>
      </div>
    )
  }
}
