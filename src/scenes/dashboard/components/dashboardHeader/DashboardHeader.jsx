import React, { Component } from "react";
import ProjectSelector from "../projectSelector/ProjectSelector";
import UsersList from "../usersList/UsersList";

export default class DashboardHeader extends Component {
  static propTypes = {};

  render() {
    return (
      <header>
        <div>
          <ProjectSelector />
          <UsersList />
        </div>
      </header>
    );
  }
}
