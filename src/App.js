import React from "react";
import Navbar from "./Components/Navbar";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// const axios = require("axios");

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
