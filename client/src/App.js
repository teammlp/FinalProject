import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserForm from "./pages/UserForm";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Detail from "./pages/Detail";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Task from './pages/Task/Task';
import JobBoard from './pages/JobBoard';
import Talks from './pages/Talks';
import PlaceSearch from "./pages/PlaceSearch"
import { deserializeUser } from './utils/helpers';


export default class App extends Component {
  constructor(props) {
    super(props);
    const user = deserializeUser();
    this.state = {
      authenticated: !!user,
      adminAuthenticated: false
    };

    this.authenticate = this.authenticate.bind(this);
    this.deAuthenticate = this.deAuthenticate.bind(this);
  }

  authenticate() {
    this.setState({
      authenticated: true
    })
  }

  deAuthenticate() {
    this.setState({
      authenticated: false
    })
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <div className="master">
            <Switch>
              
              <Route exact path="/" render={props =>
                <Home
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                />}
              />
              <Route exact path="/login" render={props =>
                <Login
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                />}
              />
              <Route exact path="/register" render={props =>
                <Register
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                />}
              />
              <Route exact path="/userForm" render={props =>
                <UserForm
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                />}
              />
              {/* <Route exact path="/userForm" component={UserForm} /> */}
              {/* <Route exact path="/userForm/:id" component={Detail} /> */}
              <Route exact path="/userForm/:id" render={props =>
                <Detail
                  {...props}
                  authenticate={this.authenticate}
                  deAuthenticate={this.deAuthenticate}
                  authenticated={this.state.authenticated}
                />}
              />
              <Route exact path="/task" render={props =>
                <Task
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                />} />
              <Route exact path="/place" render={props =>
                <PlaceSearch
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                />}
              />
              <Route exact path="/talks" render={props =>
                <Talks
                {...props}
                authenticate={this.authenticate}
                deAuthenticate={this.deAuthenticate}
                authenticated={this.state.authenticated}
                />}
              />
              <Route component={Notfound} />

            </Switch>
          </div>
        </Router>
        {/* <hr/> */}
        <Footer/>
      </div>
    )
  };
}