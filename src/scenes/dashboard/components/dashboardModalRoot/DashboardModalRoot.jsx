// import PropTypes from "prop-types";
import "./dashboardModalRoot.scss";
import React, { Component } from "react";
import dashboardModalRootContainer from "./dashboardModalRootContainer";
import NewProjectModal from "../newProjectModal/NewProjectModal";

export class DashboardModalRoot extends Component {
  // static propTypes = {};

  modalTypes = { NewProjectModal };

  render() {
    if (!this.props.activeModal) return null;

    const ModalContent = this.modalTypes[this.props.activeModal];

    return (
      <div className="modal" onClick={this.props.closeModal}>
        <div className="modal__box" onClick={e => e.stopPropagation()}>
          <header className="modal__header">
            <button onClick={this.props.closeModal}>Close</button>
          </header>
          <main className="modal__content">
            <ModalContent />
          </main>
        </div>
      </div>
    );
  }
}

export default dashboardModalRootContainer(DashboardModalRoot);
