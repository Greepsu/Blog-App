import React, { useState } from 'react'
import "../styles/App.scss";

//Import react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./userContext";

//Components
import Feed from "./Feed";
import PrivateMessage from "./PrivateMessage";

function App() {
  const [context, setContext] = useState("default context value");
  return (
    <Context.Provider value={[context, setContext]} >
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/private-message" component={PrivateMessage} />
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
