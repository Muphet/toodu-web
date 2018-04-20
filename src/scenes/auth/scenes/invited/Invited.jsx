// import PropTypes from 'prop-types';
import React, { Component } from "react";
import qs from "qs";
import usersApi from "../../../../core/users/usersApi";
import Form from "../../../../components/form/Form";

export default class Invited extends Component {
  // static propTypes = {};

  async signup(signupData) {
    const query = qs.parse(this.props.location.search.slice(1));
    const res = await usersApi.create(signupData, query.invite_token);
    return res;
  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <Form
          submitText="Signup"
          onSubmit={this.signup.bind(this)}
          fields={[{
            name: "email",
            type: "email",
            label: "Enter your email address"
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
    );
  }
}
