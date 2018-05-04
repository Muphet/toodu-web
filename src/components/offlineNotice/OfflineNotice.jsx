// import PropTypes from "prop-types";
import React, { Component } from "react";
import offlineNoticeContainer from "./offlineNoticeContainer";

export class OfflineNotice extends Component {
  render() {
    if (this.props.connected) return null;

    return (
      <div className="offlineNotice">
        <h4 className="offlineNotice__heading">
          Toodu is running in offline mode
        </h4>
        <p className="offlineNotice__text">
          While in offline mode you will be able to view your tasks but you
          won't receive updates and can't make any changes.
        </p>
      </div>
    );
  }
}

export default offlineNoticeContainer(OfflineNotice);
