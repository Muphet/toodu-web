import React from "react";

import Form from "../form/Form";
import FormErrors from "../formErrors/FormErrors";
import FormMessage from "../formMessage/FormMessage";

export default class InlineForm extends Form {
  render() {
    const field = this.props.fields[0];
    const value = this.state.fields[field.name] || "";

    return (
      <form
        onSubmit={this.onSubmit.bind(this)}
        className={this.props.className}
      >
        <FormErrors errors={this.state.errors} />
        <FormMessage message={this.state.message} />
        <input
          name={field.name}
          className="input"
          id={field.name}
          type={field.type}
          value={value}
          onChange={e => this.updateField(field.name, e.target.value)}
          placeholder={field.label}
        />
        <button>{this.props.submitText}</button>
      </form>
    );
  }
}
