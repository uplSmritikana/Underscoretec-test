import React from 'react';
import './App.css';
import Signin from './container/authentication/signup/Signin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" exact={true}>
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
