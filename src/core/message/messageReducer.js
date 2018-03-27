import { UPDATE_MESSAGE } from './messageConstants';

export default function MessageReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return action.text;
    default:
      return state;
  }
}
