import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
