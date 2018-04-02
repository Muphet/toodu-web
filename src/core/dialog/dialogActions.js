import { CLOSE_DIALOG, OPEN_DIALOG } from "./dialogConstants";

export function openDialog(dialogType) {
  return {
    type: OPEN_DIALOG,
    dialogType
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG
  };
}
