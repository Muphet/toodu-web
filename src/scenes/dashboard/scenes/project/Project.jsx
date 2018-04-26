import PropTypes from "prop-types";
import React, { Component } from "react";
import projectContainer from "./projectContainer";
import TaskList from "./components/taskList/TaskList";
import NewTask from "./components/newTask/NewTask";

export class Project extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    changeProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
  };

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
      <div className="card">
        <header className="card-header">
          <h2 className="card-header-title">{this.props.project.name}</h2>
        </header>
        <div className="card-content">
          <div className="content">
            <NewTask projectId={this.props.project.id} />
          </div>
        </div>
        <div className="card-table">
          <div className="content">
            <TaskList projectId={this.props.project.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default projectContainer(Project);
