import React from "react";
import { connect } from "react-redux";
import { fetchSearch, cancelFetchSearch } from "../actions/searchActions";

const SearchComponent = ({
  handleChange,
  query,
  search,
  beginSearch,
  cancelSearch
}) => {
  return (
    <div>
      <input
        onChange={handleChange}
        onKeyDown={e => {
          validKeyDown(e.which) ? beginSearch(query) : cancelSearch(query);
        }}
      />
      <div>Loading: {`${search.isLoading}`}</div>
      <pre>{JSON.stringify(search, null, 2)}</pre>
    </div>
  );
};

const validKeyDown = inputValue =>
  (inputValue >= 65 && inputValue <= 120) || inputValue == 32;

const mapStateToProps = state => ({
  search: state.searchReducer
});

const mapDispatchToProps = dispatch => {
  return {
    beginSearch: query => {
      dispatch(fetchSearch(query));
    },
    cancelSearch: () => {
      dispatch(cancelFetchSearch());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
