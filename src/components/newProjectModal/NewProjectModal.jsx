import React, { Component } from "react";
import projectsApi from "../../core/projects/projectsApi";
import newProjectModalContainer from "./newProjectModalContainer";
import Form from "../form/Form";

export class NewProjectModal extends Component {
  static propTypes = {};

  async createProject({ name }) {
    const res = await projectsApi.create({ name });
    this.props.closeModal();
    return res;
  }

  render() {
    return (
      <div>
        <h3>Create a new project</h3>
        <Form
          submitText="Create"
          onSubmit={this.createProject.bind(this)}
          fields={[
            {
              name: "name",
              type: "text",
              label: "Enter a name for your project"
            }
          ]}
        />
      </div>
    );
  }
}

export default newProjectModalContainer(NewProjectModal);
