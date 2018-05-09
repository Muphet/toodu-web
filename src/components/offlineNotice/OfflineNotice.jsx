// import PropTypes from "prop-types";
import React, { Component } from "react";
import offlineNoticeContainer from "./offlineNoticeContainer";

export class OfflineNotice extends Component {
  render() {
    if (this.props.online) return null;

    return (
      <div className="offlineNotice">
        <h4 className="offlineNotice__text">
          Toodu is running in offline mode
        </h4>
      </div>
    );
  }
}

export default offlineNoticeContainer(OfflineNotice);
