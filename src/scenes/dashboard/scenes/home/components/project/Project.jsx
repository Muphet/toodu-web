import PropTypes from "prop-types";
import React, { Component } from "react";
import projectContainer from "./projectContainer";
import TaskList from "../../../../components/taskList/TaskList";
import DashboardEmpty from "../../../../components/dashboardEmpty/DashboardEmpty";
import NewTask from "../../../../components/newTask/NewTask";

export class Project extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    changeProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    currentTaskId: PropTypes.string
  };

  static defaultProps = {
    project: {}
  };

  componentDidMount() {
    this.props.changeProject(this.props.match.params.projectId);
    this.props.getProject(this.props.match.params.projectId);
    this.props.getTasksForProject(this.props.match.params.projectId);
  }

  componentWillUnmount() {
    this.props.changeProject(null);
  }

  componentDidUpdate(prevProps) {
    const prevParams = prevProps.match.params;
    const params = this.props.match.params;
    if (prevParams.projectId !== params.projectId) {
      this.props.changeProject(params.projectId);
    }
  }

  render() {
    if (!this.props.project.id) return <DashboardEmpty />;

    return (
      <div className="project content__col content__col--half">
        <NewTask projectId={this.props.project.id} />
        <TaskList
          projectId={this.props.project.id}
          tasks={this.props.tasks}
          currentTaskId={this.props.currentTaskId}
        />
      </div>
    );
  }
}

export default projectContainer(Project);
