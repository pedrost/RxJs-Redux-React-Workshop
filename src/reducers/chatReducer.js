import { HISTORY, MESSAGE } from "../actions/actionTypes";

const initialState = {
  messages: [
    {
      author: "Pedro",
      timestamp: "04:32",
      color: "red",
      text: "Hello World!"
    }
  ]
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY:
      return {
        ...state,
        messages: action.messages
      };
    case MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.messages]
      };
    default:
      return state;
  }
};
