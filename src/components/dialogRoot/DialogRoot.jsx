// import PropTypes from "prop-types";
import "./dialogRoot.scss";
import React, { Component } from "react";
import dialogRootContainer from "./dialogRootContainer";
import NewProjectDialog from "./components/newProjectDialog/NewProjectDialog";

export class DialogRoot extends Component {
  // static propTypes = {};

  dialogTypes = {
    NewProject: NewProjectDialog
  };

  render() {
    const DialogContent = this.dialogTypes[this.props.dialogType];

    if (!this.props.open || !DialogContent) {
      return null;
    }

    return (
      <div className="dialog" onClick={this.props.closeDialog}>
        <div className="dialog__box" onClick={e => e.stopPropagation()}>
          <header className="dialog__header">
            <button onClick={this.props.closeDialog}>Close</button>
          </header>
          <main className="dialog__content">
            <DialogContent />
          </main>
        </div>
      </div>
    );
  }
}

export default dialogRootContainer(DialogRoot);
