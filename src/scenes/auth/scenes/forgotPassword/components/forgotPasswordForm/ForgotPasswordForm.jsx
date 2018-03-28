// import PropTypes from 'prop-types';
import React, { Component } from "react";
import forgotPasswordFormContainer from "./forgotPasswordFormContainer";
import AuthField from "../../../../components/authField/AuthField";
import AuthErrors from "../../../../components/authErrors/AuthErrors";
import AuthFlash from "../../../../components/authFlash/AuthFlash";

export class ForgotPasswordForm extends Component {
  // static propTypes = {};

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.submitting) return;
    this.props.sendResetEmail(this.props.fields.email);
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
        <button>
          {this.props.submitting ? "Please wait" : "Send reset e-mail"}
        </button>
      </form>
    );
  }
}

export default forgotPasswordFormContainer(ForgotPasswordForm);
