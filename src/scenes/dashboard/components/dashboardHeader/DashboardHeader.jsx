import React, { Component } from "react";
import dashboardHeaderContainer from "./dashboardHeaderContainer";
import UsersList from "../usersList/UsersList";

export class DashboardHeader extends Component {
  static propTypes = {};

  render() {
    return (
      <header>
        <div>
          <button onClick={() => this.props.openModal("ProjectSelectorModal")}>
            Select Project
          </button>
          <button onClick={() => this.props.openModal("NewProjectModal")}>
            Create Project
          </button>
          <UsersList />
        </div>
      </header>
    );
  }
}

export default dashboardHeaderContainer(DashboardHeader);
