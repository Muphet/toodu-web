import UtilService from "../../services/UtilService";
import { GET_STARS, CREATE_STAR, DESTROY_STAR } from "./starsConstants";

const defaultState = [];

export default function starsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_STARS:
      return action.stars;
    case CREATE_STAR:
      return state.concat(action.star);
    case DESTROY_STAR:
      return UtilService.removeById(state, action.star);
    default:
      return state;
  }
}
