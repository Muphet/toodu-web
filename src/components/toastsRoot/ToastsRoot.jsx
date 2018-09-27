import PropTypes from "prop-types";
import React, { Component } from "react";
import toastsRootContainer from "./toastsRootContainer";

export class OfflineNotice extends Component {
  static propTypes = {
    removeToast: PropTypes.func.isRequired,
    toasts: PropTypes.array.isRequired
  };

  render() {
    if (!this.props.toasts.length) return null;

    return (
      <ul className="toasts">
        {this.props.toasts.map(toast => (
          <li
            key={toast.id}
            className={`toasts__toast toasts__toast--${toast.type}`}
            onClick={() => this.props.removeToast(toast)}
          >
            <p className="toasts__text">{ toast.message }</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default toastsRootContainer(OfflineNotice);
