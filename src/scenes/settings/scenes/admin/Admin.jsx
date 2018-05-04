import PropTypes from "prop-types";
import React, { Component } from "react";
import AuthService from "../../../../services/AuthService";
import teamsApi from "../../../../core/teams/teamsApi.js";
import adminContainer from "./adminContainer.js";
import Form from "../../../../components/form/Form";

export class Admin extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    team: PropTypes.object,
    getTeam: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTeam();
  }

  updateTeam({ name }) {
    return teamsApi.update(this.props.team.id, {
      name
    });
  }

  deleteTeam() {
    if (window.confirm("Are you sure you want to delete your team?")) {
      teamsApi.destroy("current").then(() => AuthService.logout());
    }
  }

  render() {
    return (
      <div className="settings">
        <header className="settings__header">
          <h2 className="settings__title">Admin</h2>
          {this.props.currentUser.admin && (
            <button
              className="button button--red"
              onClick={this.deleteTeam.bind(this)}
            >
              Delete my team
            </button>
          )}
        </header>
        <div className="settings__content">
          {this.props.currentUser.admin ? (
            <AdminContent updateTeam={this.updateTeam.bind(this)} />
          ) : (
            <NotAdmin />
          )}
        </div>
      </div>
    );
  }
}

function NotAdmin() {
  return (
    <div className="empty empty--white">
      <p>Ask your account admin to access these settings</p>
    </div>
  );
}

function AdminContent({ updateTeam }) {
  return (
    <div className="content content--flat">
      <div className="content__col settings__form">
        <Form
          submitText="Update"
          onSubmit={updateTeam}
          fields={[
            {
              name: "name",
              type: "text",
              label: "Enter the new name for your team"
            }
          ]}
        />
      </div>
    </div>
  );
}

export default adminContainer(Admin);
