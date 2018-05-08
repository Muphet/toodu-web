import notificationsApi from "./notificationsApi";

import { GET_NOTIFICATIONS } from "./notificationsConstants";

export function getNotifications() {
  return dispatch => {
    return notificationsApi.get().then(res => {
      dispatch({ type: GET_NOTIFICATIONS, notifications: res.data });
      return res.data;
    });
  };
}
