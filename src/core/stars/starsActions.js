import starsApi from "./starsApi";

import {
  GET_STARS_START,
  GET_STARS_SUCCESS,
  GET_STARS_ERROR,
  CREATE_STAR_START,
  CREATE_STAR_SUCCESS,
  CREATE_STAR_ERROR,
  DESTROY_STAR_START,
  DESTROY_STAR_SUCCESS,
  DESTROY_STAR_ERROR
} from "./starsConstants";

export function getStars() {
  return dispatch => {
    dispatch({ type: GET_STARS_START });
    starsApi
      .getAll()
      .then(res => {
        dispatch({ type: GET_STARS_SUCCESS, stars: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_STARS_ERROR });
      });
  };
}

export function createStar(projectId) {
  return dispatch => {
    dispatch({ type: CREATE_STAR_START });
    starsApi
      .create(projectId)
      .then(res => {
        dispatch({ type: CREATE_STAR_SUCCESS, star: res.data });
      })
      .catch(err => {
        dispatch({ type: CREATE_STAR_ERROR });
      });
  };
}

export function destroyStar(id) {
  return dispatch => {
    dispatch({ type: DESTROY_STAR_START });
    starsApi
      .destroy(id)
      .then(res => {
        dispatch({ type: DESTROY_STAR_SUCCESS, star: res.data });
      })
      .catch(err => {
        dispatch({ type: DESTROY_STAR_ERROR });
      });
  };
}
