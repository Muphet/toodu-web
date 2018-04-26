import React, { Component } from "react";
import { Link } from "react-router-dom";
import lockIconUrl from "../../lock.svg";
import authApi from "../../../../core/auth/authApi";
import Form from "../../../../components/form/Form";

export default class ForgotPassword extends Component {
  static propTypes = {};

  async sendResetEmail({ email }) {
    const res = await authApi.sendResetEmail(email);
    return res;
  }

  render() {
    return (
      <div>
        <div className="has-text-centered auth-heading has-text-grey">
          <h1 className="title">Forgotten your password?</h1>
          <p className="subtitile">Enter your email address below</p>
        </div>
        <div className="box auth-box">
          <figure className="avatar">
            <img src={lockIconUrl} alt="" />
          </figure>
          <Form
            submitText="Send email"
            onSubmit={this.sendResetEmail.bind(this)}
            fields={[
              {
                name: "email",
                type: "email",
                label: "Enter your email address"
              }
            ]}
          />
        </div>
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}
