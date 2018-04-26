import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";
import TextField from "../textField/TextField";
import FormErrors from "../formErrors/FormErrors";
import FormMessage from "../formMessage/FormMessage";

export default class Form extends Component {
  static propTypes = {
    submitText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
        label: PropTypes.string,
        initialValue: PropTypes.string
      })
    )
  };

  state = {
    submitting: false,
    errors: null,
    message: null,
    fields: this.props.fields.reduce((fields, field) => {
      fields[field.name] = field.initialValue;
      return fields;
    }, {})
  };

  componentWillUnmount() {
    this.unmounted = true;
  }

  updateField(name, value) {
    this.setState({ fields: { ...this.state.fields, [name]: value } });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.submitting) return;
    this.submitStart();
    this.props
      .onSubmit(this.state.fields)
      .then(this.submitSuccess.bind(this))
      .catch(this.submitError.bind(this));
  }

  submitStart() {
    this.setState({
      submitting: true,
      errors: null,
      message: null,
      flash: null
    });
  }

  submitSuccess(res) {
    if (this.unmounted) return;
    this.setState({
      submitting: false,
      fields: this.props.fields,
      message: res.data.message,
      errors: null
    });
  }

  submitError(err) {
    if (this.unmounted) return;
    this.setState({
      submitting: false,
      errors: err.response.data.errors.full_messages,
      message: null
    });
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit.bind(this)}
      >
        <FormErrors
          errors={this.state.errors}
        />
        <FormMessage
          message={this.state.message}
        />
        {this.props.fields.map(field => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={this.state.fields[field.name]}
            onChange={this.updateField.bind(this)}
          />
        ))}
        <button className={classNames(
          "button is-fullwidth is-info",
          { "is-loading": this.state.submitting }
        )}>
          {this.props.submitText}
        </button>
      </form>
    );
  }
}
