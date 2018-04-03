// import PropTypes from "prop-types";
import "./dashboardModalRoot.scss";
import React, { Component } from "react";
import dashboardModalRootContainer from "./dashboardModalRootContainer";
import NewProject from "./components/newProject/NewProject";

export class DashboardModalRoot extends Component {
  // static propTypes = {};

  modalTypes = { NewProject };

  render() {
    if (!this.props.activeModal) return null;

    const Modal = this.modalTypes[this.props.activeModal];

    return (
      <div className="modal" onClick={this.props.closeModal}>
        <div className="modal__box" onClick={e => e.stopPropagation()}>
          <header className="modal__header">
            <button onClick={this.props.closeModal}>Close</button>
          </header>
          <main className="modal__content">
            <Modal />
          </main>
        </div>
      </div>
    );
  }
}

export default dashboardModalRootContainer(DashboardModalRoot);
