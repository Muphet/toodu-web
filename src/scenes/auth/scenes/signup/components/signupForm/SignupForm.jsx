// import PropTypes from 'prop-types';
import React, { Component } from "react";
import signupFormContainer from "./signupFormContainer";
import AuthField from "../../../../components/authField/AuthField";
import AuthErrors from "../../../../components/authErrors/AuthErrors";
import AuthFlash from "../../../../components/authFlash/AuthFlash";

export class SignupForm extends Component {
  // static propTypes = {};

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.submitting) return;
    this.props.signup(this.props.fields);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <AuthErrors errors={this.props.errors} />
        <AuthFlash flash={this.props.flash} />
        <AuthField
          label="What's your e-mail address?"
          name="email"
          type="email"
          value={this.props.fields.email}
          onChange={this.props.updateField}
        />
        <AuthField
          label="What's your first name?"
          name="firstName"
          type="text"
          value={this.props.fields.firstName}
          onChange={this.props.updateField}
        />
        <AuthField
          label="What's your last name?"
          name="lastName"
          type="text"
          value={this.props.fields.lastName}
          onChange={this.props.updateField}
        />
        <AuthField
          label="What's the name of your company/team?"
          name="teamName"
          type="text"
          value={this.props.fields.teamName}
          onChange={this.props.updateField}
        />
        <AuthField
          label="Choose your password"
          name="password"
          type="password"
          value={this.props.fields.password}
          onChange={this.props.updateField}
        />
        <AuthField
          label="Confirm your password"
          name="passwordConfirmation"
          type="password"
          value={this.props.fields.passwordConfirmation}
          onChange={this.props.updateField}
        />
        <button>
          {this.props.submitting ? "Please wait" : "Sign up"}
        </button>
      </form>
    );
  }
}

export default signupFormContainer(SignupForm);
