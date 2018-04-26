import React, { Component } from "react";
import invitesApi from "../../../../core/invites/invitesApi";
import newInviteModalContainer from "./newInviteModalContainer";
import Form from "../../../../components/form/Form";

export class NewInviteModal extends Component {
  static propTypes = {};

  async createInvite({ email }) {
    const res = await invitesApi.create({ email });
    this.props.closeModal();
    return res;
  }

  render() {
    return (
      <div>
        <h3>Create a new invite</h3>
        <Form
          submitText="Create"
          onSubmit={this.createInvite.bind(this)}
          fields={[{
            name: "email",
            type: "email",
            label: "Enter the email for your Invite"
          }]}
        />
      </div>
    );
  }
}

export default newInviteModalContainer(NewInviteModal);
