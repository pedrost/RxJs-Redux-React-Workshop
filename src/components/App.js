import React from "react";
import { Route, Switch } from "react-router-dom";
import ConnectedManageChat from "./chat/ManageChat";

import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ConnectedManageChat} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
