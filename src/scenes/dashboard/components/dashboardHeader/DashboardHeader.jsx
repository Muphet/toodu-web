import React, { Component } from "react";
import ProjectSelector from "../projectSelector/ProjectSelector";

export default class DashboardHeader extends Component {
  static propTypes = {};

  render() {
    return (
      <header>
        <div>
          <ProjectSelector />
        </div>
      </header>
    );
  }
}
