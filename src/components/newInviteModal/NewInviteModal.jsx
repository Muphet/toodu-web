import React, { Component } from "react";
import invitesApi from "../../core/invites/invitesApi";
import Form from "../form/Form";

export class NewInviteModal extends Component {
  static propTypes = {};

  async createInvite({ email }) {
    const res = await invitesApi.create({ email });
    return res;
  }

  render() {
    return (
      <div>
        <header className="modal__header">
          <h3>Invite a new user to your team</h3>
        </header>
        <main className="modal__body">
          <Form
            submitText="Create"
            onSubmit={this.createInvite.bind(this)}
            fields={[
              {
                name: "email",
                type: "email",
                label: "Enter the email of your invite"
              }
            ]}
          />
        </main>
      </div>
    );
  }
}

export default NewInviteModal;
