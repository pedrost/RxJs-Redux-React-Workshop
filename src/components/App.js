import React from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "./chat/Chat";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
