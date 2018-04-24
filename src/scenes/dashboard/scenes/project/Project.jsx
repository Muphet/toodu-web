// import PropTypes from "prop-types";
import React, { Component } from "react";
import projectContainer from "./projectContainer";
import TaskList from "./components/taskList/TaskList";
import NewTask from "./components/newTask/NewTask";

export class Project extends Component {
  // static propTypes = {};

  static defaultProps = {
    project: {}
  };

  componentDidMount() {
    this.props.changeProject(this.props.match.params.projectId);
  }

  componentDidUpdate(prevProps) {
    const prevParams = prevProps.match.params;
    const params = this.props.match.params;

    if (prevParams.projectId !== params.projectId) {
      this.props.changeProject(params.projectId);
    }
  }

  render() {
    if (!this.props.project.id) return <p>Project not found</p>;
    return (
      <div>
        <h2>{this.props.project.name}</h2>
        <TaskList projectId={this.props.project.id} />
        <NewTask projectId={this.props.project.id} />
      </div>
    );
  }
}

export default projectContainer(Project);
