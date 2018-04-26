// import PropTypes from 'prop-types';
import React, { Component } from "react";
import qs from "qs";
import userIconUrl from "../../user.svg";
import usersApi from "../../../../core/users/usersApi";
import Form from "../../../../components/form/Form";

export default class Invited extends Component {
  // static propTypes = {};

  componentWillMount() {
    this.query = qs.parse(this.props.location.search.slice(1));
  }

  async signup(signupData) {
    const res = await usersApi.create(signupData, this.query.invite_token);
    return res;
  }

  render() {
    return (
      <div>
        <div className="has-text-centered auth-heading has-text-grey">
          <h1 className="title">You've been invited!</h1>
          <p className="subtitile">We just need your details...</p>
        </div>
        <div className="box auth-box">
          <figure className="avatar">
            <img src={userIconUrl} />
          </figure>
          <Form
            submitText="Signup"
            onSubmit={this.signup.bind(this)}
            fields={[{
              name: "email",
              type: "email",
              label: "Enter your email address",
              initialValue: this.query.email
            },{
              name: "firstName",
              type: "text",
              label: "Enter your first name"
            },{
              name: "lastName",
              type: "text",
              label: "Enter your last name"
            },{
              name: "password",
              type: "password",
              label: "Choose a password"
            },{
              name: "passwordConfirmation",
              type: "password",
              label: "confirm your password"
            }]}
          />
        </div>
      </div>
    );
  }
}
