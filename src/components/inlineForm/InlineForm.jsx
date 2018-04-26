import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";
import TextField from "../textField/TextField";
import FormErrors from "../formErrors/FormErrors";
import FormMessage from "../formMessage/FormMessage";

export default class InlineForm extends Component {
  static propTypes = {
    submitText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    field: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
      label: PropTypes.string,
      initialValue: PropTypes.string
    })
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
    field: this.props.field.initialValue || ""
  };

  componentWillUnmount() {
    this.unmounted = true;
  }

  updateField(value) {
    this.setState({ field: value });
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
      .onSubmit(this.state.field)
      .then(this.success.bind(this))
      .catch(this.error.bind(this));
  }

  success(res) {
    if (this.unmounted) return;
    this.setState({
      submitting: false,
      field: this.props.field.initialValue || "",
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
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              name={this.props.field.name}
              className="input"
              id={this.props.field.name}
              type={this.props.field.type}
              value={this.state.field}
              onChange={(e) => this.updateField(e.target.value)}
              placeholder={this.props.field.label}
            />
          </div>
          <div className="control">
            <button className={classNames({"button": true, "is-fullwidth": true, "is-info": true, "is-loading": this.state.submitting})}>
              {this.props.submitText}
            </button>
          </div>
        </div>
      </form>
    );
  }
}
