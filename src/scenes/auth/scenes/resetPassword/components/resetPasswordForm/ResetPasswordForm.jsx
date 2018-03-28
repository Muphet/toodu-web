// import PropTypes from 'prop-types';
import React, { Component } from "react";
import resetPasswordFormContainer from "./resetPasswordFormContainer";
import AuthField from "../../../../components/authField/AuthField";
import AuthErrors from "../../../../components/authErrors/AuthErrors";
import AuthFlash from "../../../../components/authFlash/AuthFlash";

export class ResetPasswordForm extends Component {
  // static propTypes = {};

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.submitting) return;
    this.props.resetPassword(this.props.fields);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <AuthErrors errors={this.props.errors} />
        <AuthFlash flash={this.props.flash} />
        <AuthField
          label="Choose a new password"
          name="password"
          type="password"
          value={this.props.fields.password}
          onChange={this.props.updateField}
        />
        <AuthField
          label="Confirm your new password"
          name="passwordConfirmation"
          type="password"
          value={this.props.fields.passwordConfirmation}
          onChange={this.props.updateField}
        />
        <button>
          {this.props.submitting ? "Please wait" : "Reset my password"}
        </button>
      </form>
    );
  }
}

export default resetPasswordFormContainer(ResetPasswordForm);
