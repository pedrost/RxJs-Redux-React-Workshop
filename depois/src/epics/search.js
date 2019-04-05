import {
  FETCH_SEARCH,
  FETCH_SEARCH_CANCELLED,
  FETCH_SEARCH_PENDING,
  fetchSearchFulfilled
} from "../actions/searchActions";
import * as Rx from "rxjs";

export const searchEpic = action$ =>
  action$.ofType(FETCH_SEARCH).switchMap(action =>
    Rx.Observable.of({
      name: action.payload,
      timestamp: new Date()
    })
      .delay(1000)
      .map(payload => fetchSearchFulfilled(payload))
      .takeUntil(action$.ofType(FETCH_SEARCH_CANCELLED))
      .startWith({ type: FETCH_SEARCH_PENDING })
  );
