// import PropTypes from 'prop-types';
import React, { Component } from "react";
import LoginFormContainer from "./loginFormContainer";
import AuthField from "../../../../components/authField/AuthField";
import AuthErrors from "../../../../components/authErrors/AuthErrors";

export class LoginForm extends Component {
  // static propTypes = {};

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.submitting) return;
    this.props.login(this.props.fields);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <AuthErrors errors={this.props.errors} />
        <AuthField
          label="What's your e-mail address?"
          name="email"
          type="email"
          value={this.props.email}
          onChange={this.props.updateField}
        />
        <AuthField
          label="What's your password?"
          name="password"
          type="password"
          value={this.props.password}
          onChange={this.props.updateField}
        />
        <button>
          {this.props.submitting ? "Please wait" : "Log in"}
        </button>
      </form>
    );
  }
}

export default LoginFormContainer(LoginForm);
