import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import "./App.css";
import SearchComponent from "./components/search";

let store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuery: ""
    };
    this.handleCurrentQuery = this.handleCurrentQuery.bind(this);
  }

  handleCurrentQuery(event) {
    this.setState({ currentQuery: event.target.value });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SearchComponent
            query={this.state.currentQuery}
            handleChange={this.handleCurrentQuery}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
