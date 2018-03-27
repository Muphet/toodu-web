import { UPDATE_MESSAGE } from './messageConstants';

export function updateMessage(text) {
  return {
    type: UPDATE_MESSAGE,
    text,
  };
}
