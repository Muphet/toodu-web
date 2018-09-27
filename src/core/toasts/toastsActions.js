import { ADD_TOAST, REMOVE_TOAST } from "./toastsConstants";

let id = 0;
function toastFactory(message, type = 'default') {
  return {
    id: id++,
    message,
    type
  }
}

export function addToast(message, type) {
  return {
    type: ADD_TOAST,
    toast: toastFactory(message, type)
  };
}

export function removeToast(toast) {
  return {
    type: REMOVE_TOAST,
    toast
  };
}
