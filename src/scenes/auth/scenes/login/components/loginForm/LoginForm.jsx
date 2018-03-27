// import PropTypes from 'prop-types';
import React, { Component } from "react";
import LoginFormContainer from "./loginFormContainer";
import AuthField from "../../../../components/authField/AuthField";
import AuthErrors from "../../../../components/authErrors/AuthErrors";

export class LoginForm extends Component {
  // static propTypes = {};

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.loading) return;
    this.props.login(this.props.email, this.props.password);
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
          onChange={e => this.props.updateEmail(e.target.value)}
        />
        <AuthField
          label="What's your password?"
          name="password"
          type="password"
          value={this.props.password}
          onChange={e => this.props.updatePassword(e.target.value)}
        />
        <button>
          {this.props.loading ? "Please wait" : "Log in"}
        </button>
      </form>
    );
  }
}

export default LoginFormContainer(LoginForm);
