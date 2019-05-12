import React, { Component } from 'react';
import classes from './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import Home from "../components/Home/Home";
import Report from "../components/Report/Report";
import User from "../components/User/User";
import ParkingMap from "../components/ParkingMap/ParkingMap";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
              <Route path="/report" component={Report} />
              <Route path="/user" component={User} />
              <Route path="/parkingmap" component={ParkingMap} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
