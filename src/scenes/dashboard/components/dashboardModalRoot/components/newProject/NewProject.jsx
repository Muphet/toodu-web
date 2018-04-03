// import PropTypes from "prop-types";
import React, { Component } from "react";
import newProjectContainer from "./newProjectContainer";

export class NewProject extends Component {
  // static propTypes = {};

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.props.fields);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.props.fields.name}
          onChange={e => this.props.updateField("name", e.target.value)}
        />
        <button>
          {this.props.submitting ? "Please wait" : "Create"}
        </button>
      </form>
    );
  }
}

export default newProjectContainer(NewProject);
