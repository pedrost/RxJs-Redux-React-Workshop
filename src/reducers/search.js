import {
  FETCH_SEARCH_PENDING,
  FETCH_SEARCH_FULFILLED,
  FETCH_SEARCH_CANCELLED
} from "../actions/searchActions";

let initialState = {
  isLoading: false
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_PENDING:
      return { ...state, isLoading: true };

    case FETCH_SEARCH_FULFILLED:
      return { ...state, isLoading: false, ...action.payload };

    case FETCH_SEARCH_CANCELLED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
