import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserForm from "./pages/UserForm";
import Home from "./pages/Home";
import JobLists from "./pages/JobLists";
import Detail from "./pages/Detail";
import "./App.css";
// import TodoLists from "./pages/TodoLists";
import Footer from "./components/Footer/Footer"




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
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
              <Route exact path="/jobLists" component={JobLists} />

              <Route exact path="/userForm" component={UserForm} />

              <Route exact path="/jobLists/:id" component={Detail} />

              <Route exact path="/userForm/:id" component={Detail} />
              {/* <Route exact path="/todoList" component={TodoLists} /> */}

            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    )
  };
}