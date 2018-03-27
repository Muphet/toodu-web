import { UPDATE_NAME } from './nameConstants';

export function updateName(text) {
  return {
    type: UPDATE_NAME,
    text,
  };
}
