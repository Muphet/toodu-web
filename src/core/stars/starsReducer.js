import UtilService from "../../services/UtilService";
import {
  GET_STARS_START,
  GET_STARS_SUCCESS,
  GET_STARS_ERROR,
  CREATE_STAR_SUCCESS,
  DESTROY_STAR_SUCCESS
} from "./starsConstants";

const defaultState = {
  fetching: false,
  error: false,
  data: []
};

export default function starssReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_STARS_START:
      return { ...state, fetching: true, error: false };
    case GET_STARS_SUCCESS:
      return { ...state, fetching: false, data: action.stars };
    case GET_STARS_ERROR:
      return { ...state, fetching: false, error: true };
    case CREATE_STAR_SUCCESS:
      return { ...state, data: state.data.concat(action.star) };
    case DESTROY_STAR_SUCCESS:
      return { ...state, data: UtilService.removeById(state.data, action.star) };
    default:
      return state;
  }
}
