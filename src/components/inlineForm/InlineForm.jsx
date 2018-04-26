import React from "react";
import classNames from "classnames";
import Form from "../form/Form";
import FormErrors from "../formErrors/FormErrors";
import FormMessage from "../formMessage/FormMessage";

export default class InlineForm extends Form {
  render() {
    const field = this.props.fields[0];
    const value = this.state.fields[field.name];

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
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              name={field.name}
              className="input"
              id={field.name}
              type={field.type}
              value={value}
              onChange={(e) => this.updateField(field.name, e.target.value)}
              placeholder={field.label}
            />
          </div>
          <div className="control">
            <button className={classNames(
              "button is-fullwidth is-info",
              { "is-loading": this.state.submitting }
            )}>
              {this.props.submitText}
            </button>
          </div>
        </div>
      </form>
    );
  }
}
