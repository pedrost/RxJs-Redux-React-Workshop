import { HISTORY, MESSAGE } from "./actionTypes";

export const recieveHistory = payload => ({
  type: HISTORY,
  messages: payload
});

export const recieveMessage = payload => ({
  type: MESSAGE,
  messages: payload
});
