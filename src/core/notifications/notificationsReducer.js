import UtilService from "../../services/UtilService";
import {
  GET_NOTIFICATIONS,
  NOTIFICATION_CREATED,
  NOTIFICATION_UPDATED
} from "./notificationsConstants";

const defaultState = [];

export default function notificationsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return action.notifications;
    case NOTIFICATION_CREATED:
      return state.concat(action.notification);
    case NOTIFICATION_UPDATED:
      return UtilService.merge(state, action.notification);
    default:
      return state;
  }
}
