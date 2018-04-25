import PropTypes from "prop-types";
import React, { Component } from "react";
import TextField from "../textField/TextField";
import FormErrors from "../formErrors/FormErrors";
import FormMessage from "../formMessage/FormMessage";

export default class Form extends Component {
  static propTypes = {
    submitText: PropTypes.string.isRequired,
    submittingText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
        label: PropTypes.string,
        initialValue: PropTypes.string
      })
    )
  };

  static defaultProps = {
    submitText: "Submit",
    submittingText: "Submitting...",
    className: "form"
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
    this.setState({
      submitting: true,
      errors: null,
      message: null,
      flash: null
    });
    this.props
      .onSubmit(this.state.fields)
      .then(this.success.bind(this))
      .catch(this.error.bind(this));
  }

  success(res) {
    if (this.unmounted) return;
    this.setState({
      submitting: false,
      fields: this.props.fields,
      message: res.data.message,
      errors: null
    });
  }

  error(err) {
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
        className={this.props.className}
      >
        <FormErrors
          errors={this.state.errors}
          className={this.props.className}
        />
        <FormMessage
          message={this.state.message}
          className={this.props.className}
        />
        {this.props.fields.map(field => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={this.state.fields[field.name]}
            onChange={this.updateField.bind(this)}
            className={this.props.className}
          />
        ))}
        <button className={`${this.props.className}__button`}>
          {this.state.submitting
            ? this.props.submittingText
            : this.props.submitText}
        </button>
      </form>
    );
  }
}
