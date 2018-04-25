// import PropTypes from "prop-types";
import React, { Component } from "react";
import modalRootContainer from "./modalRootContainer";
import NewProjectModal from "../newProjectModal/NewProjectModal";
import NewInviteModal from "../newInviteModal/NewInviteModal";

export class ModalRoot extends Component {
  // static propTypes = {};

  modalTypes = { NewProjectModal, NewInviteModal };

  render() {
    if (!this.props.activeModal) return null;

    const ModalContent = this.modalTypes[this.props.activeModal];

    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.closeModal} />
        <div className="modal-content box">
          <ModalContent />
        </div>
        <button
          className="modal-close is-large"
          onClick={this.props.closeModal}
        >
          Close
        </button>
      </div>
    );
  }
}

export default modalRootContainer(ModalRoot);
