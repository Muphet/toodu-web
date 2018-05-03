import starsApi from "./starsApi";

import { GET_STARS, CREATE_STAR, DESTROY_STAR } from "./starsConstants";

export function getStars() {
  return dispatch => {
    return starsApi.get().then(res => {
      dispatch({ type: GET_STARS, stars: res.data });
      return res.data;
    });
  };
}

export function createStar(star) {
  return dispatch => {
    return starsApi.create(star).then(res => {
      dispatch({ type: CREATE_STAR, star: res.data });
      return res.data;
    });
  };
}

export function destroyStar(id) {
  return dispatch => {
    return starsApi.destroy(id).then(res => {
      dispatch({ type: DESTROY_STAR, star: res.data });
      return res.data;
    });
  };
}
