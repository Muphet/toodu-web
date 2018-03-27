// import PropTypes from 'prop-types';
import React, { Component } from "react";
import signupFormContainer from "./signupFormContainer";
import AuthField from "../../../../components/authField/AuthField";
import AuthErrors from "../../../../components/authErrors/AuthErrors";
import AuthMessage from "../../../../components/authMessage/AuthMessage";

export class SignupForm extends Component {
  // static propTypes = {};

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.loading) return;
    this.props.signup({
      email: this.props.email,
      password: this.props.password,
      password_confirmation: this.props.passwordConfirmation,
      first_name: this.props.firstName,
      last_name: this.props.lastName,
      team_attributes: { name: this.props.teamName }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <AuthErrors errors={this.props.errors} />
        <AuthMessage message={this.props.message} />
        <AuthField
          label="What's your e-mail address?"
          name="email"
          type="email"
          value={this.props.email}
          onChange={e => this.props.updateEmail(e.target.value)}
        />
        <AuthField
          label="What's your first name?"
          name="first_name"
          type="text"
          value={this.props.firstName}
          onChange={e => this.props.updateFirstName(e.target.value)}
        />
        <AuthField
          label="What's your last name?"
          name="last_name"
          type="text"
          value={this.props.lastName}
          onChange={e => this.props.updateLastName(e.target.value)}
        />
        <AuthField
          label="What's the name of your company/team?"
          name="team_name"
          type="text"
          value={this.props.teamName}
          onChange={e => this.props.updateTeamName(e.target.value)}
        />
        <AuthField
          label="Choose your password"
          name="password"
          type="password"
          value={this.props.password}
          onChange={e => this.props.updatePassword(e.target.value)}
        />
        <AuthField
          label="Confirm your password"
          name="password_confirmation"
          type="password"
          value={this.props.passwordConfirmation}
          onChange={e => this.props.updatePasswordConfirmation(e.target.value)}
        />
        <button>
          {this.props.loading ? "Please wait" : "Sign up"}
        </button>
      </form>
    );
  }
}

export default signupFormContainer(SignupForm);
