import PropTypes from "prop-types";
import React, { Component } from "react";
import AuthField from "../authField/AuthField";
import AuthErrors from "../authErrors/AuthErrors";
import AuthFlash from "../authFlash/AuthFlash";

export default class AuthForm extends Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      initialValue: PropTypes.string
    }))
  }

  state = {
    submitting: false,
    flash: null,
    errors: [],
    fields: this.props.fields.reduce((fields, field) => {
      fields[field.name] = field.initialValue || "";
      return fields;
    }, {})
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  updateField(name, value) {
    this.setState({ fields: { ...this.state.fields, [name]: value } })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.submitting) return;
    this.setState({ submitting: true, errors: [], flash: null });
    this.props.handleSubmit(this.state.fields)
      .then(this.success.bind(this))
      .catch(this.error.bind(this));
  }

  success(res) {
    if(this.unmounted) return;
    this.setState({
      submitting: false,
      fields: this.props.fields,
      flash: res.data.message
    });
  }

  error(err) {
    if(this.unmounted) return;
    this.setState({
      submitting: false,
      errors: err.response.data.errors
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <AuthFlash flash={this.state.flash} />
        <AuthErrors errors={this.state.errors} />
        {this.props.fields.map((field) => (
          <AuthField
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={this.state.fields[field.name]}
            onChange={this.updateField.bind(this)}
          />
        ))}
        <button>
          {this.state.submitting ? "Submitting..." : this.props.buttonText}
        </button>
      </form>
    );
  }
}