export const FETCH_SEARCH = "FETCH_SEARCH";
export const FETCH_SEARCH_FULFILLED = "FETCH_SEARCH_FULFILLED";
export const FETCH_SEARCH_PENDING = "FETCH_SEARCH_PENDING";
export const FETCH_SEARCH_CANCELLED = "FETCH_SEARCH_CANCELLED";

export const fetchSearch = currentQuery => ({
  type: FETCH_SEARCH,
  payload: currentQuery
});
export const cancelFetchSearch = () => ({
  type: FETCH_SEARCH_CANCELLED
});
export const fetchSearchFulfilled = payload => ({
  type: FETCH_SEARCH_FULFILLED,
  payload
});
