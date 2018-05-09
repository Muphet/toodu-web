import followsApi from "./followsApi";

import { GET_FOLLOWS, CREATE_FOLLOW, DESTROY_FOLLOW } from "./followsConstants";

export function getFollows() {
  return dispatch => {
    return followsApi.get().then(res => {
      dispatch({ type: GET_FOLLOWS, follows: res.data });
      return res.data;
    });
  };
}

export function createFollow(follow) {
  return dispatch => {
    return followsApi.create(follow).then(res => {
      dispatch({ type: CREATE_FOLLOW, follow: res.data });
      return res.data;
    });
  };
}

export function destroyFollow(id) {
  return dispatch => {
    return followsApi.destroy(id).then(res => {
      dispatch({ type: DESTROY_FOLLOW, follow: res.data });
      return res.data;
    });
  };
}
