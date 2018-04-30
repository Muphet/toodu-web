import PropTypes from "prop-types";
import React, { Component } from "react";
import modalRootContainer from "./modalRootContainer";
import NewProjectModal from "../newProjectModal/NewProjectModal";
import NewInviteModal from "../newInviteModal/NewInviteModal";
import ProjectSelectorModal from "../projectSelectorModal/ProjectSelectorModal";

export class ModalRoot extends Component {
  static propTypes = {
    activeModal: PropTypes.string
  };

  modalTypes = { NewProjectModal, NewInviteModal, ProjectSelectorModal };

  render() {
    if (!this.props.activeModal) return null;

    const ModalContent = this.modalTypes[this.props.activeModal];

    return (
      <div className="modal">
        <div className="modal__overlay" onClick={this.props.closeModal} />
        <div className="modal__box">
          <ModalContent />
        </div>
        <button className="modal__close" onClick={this.props.closeModal}>
          Close
        </button>
      </div>
    );
  }
}

export default modalRootContainer(ModalRoot);
