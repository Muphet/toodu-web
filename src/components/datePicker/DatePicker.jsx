import "react-day-picker/lib/style.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import DayPicker from "react-day-picker";

export default class DatePicker extends Component {
  static propTypes = {
    hidden: PropTypes.bool,
    className: PropTypes.string,
    day: PropTypes.instanceOf(Date),
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
  };

  state = {
    day: this.props.day
  };

  handleDaySelect(day, { selected }) {
    if (selected) {
      this.setState({ day: undefined });
    } else {
      this.setState({ day });
    }
  }

  confirm(e) {
    e.stopPropagation();
    this.props.onConfirm(this.state.day);
  }

  cancel(e) {
    e.stopPropagation();
    this.props.onCancel();
  }

  render() {
    if (this.props.hidden) return null;

    return (
      <div className={"datePicker " + this.props.className}>
        <DayPicker
          onDayClick={this.handleDaySelect.bind(this)}
          selectedDays={this.state.day}
        />
        <div className="datePicker__actions">
          <button
            className="datePicker__action button button--green"
            onClick={this.confirm.bind(this)}
          >
            Confirm
          </button>
          <button
            className="datePicker__action button button--grey"
            onClick={this.cancel.bind(this)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
