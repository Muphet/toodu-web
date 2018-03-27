import { UPDATE_NAME } from './nameConstants';

export default function NameReducer(state = '', action) {
  switch (action.type) {
    case UPDATE_NAME:
      return action.text;
    default:
      return state;
  }
}
