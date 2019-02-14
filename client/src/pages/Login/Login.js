import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Register from "../Register";
import { userAPI } from "../../utils/API";
import Navigation from "../../components/Navigation";
import './Login.css';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  loginUser = user => {
    let username=user.username;
    userAPI.pleasegodlogin({ username: user.username, password: user.password })
      .then(function (data) {
        console.log(data.data);
        if (data.data.success) {
          this.props.authenticate();
          sessionStorage.setItem('userAuth', 'yes');
          sessionStorage.setItem("userUsername", username);
          this.setState({
            redirectToReferrer: true
          });
        }
        else {
          alert("Username or password is Incorrect.");
        }
      }.bind(this)).catch(function (err) {
        alert("Wrong username or password");
        console.log("NOT IN DATABASE");
        console.log(err);
      });

    this.setState({
      username: "",
      password: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const usernameInput = this.state.username;
    const passwordInput = this.state.password;

    const objSubmit = {
      username: usernameInput,
      password: passwordInput
    }

    if (!objSubmit.username || !objSubmit.password) {
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    this.loginUser(objSubmit);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <Navigation />
        <div className="loginWrap">
          <h1>Log In Or Register</h1>
          <div className="loginmodal-container">
            <form className="login" onSubmit={this.handleSubmit.bind(this)}>
              <input id="username-input" ref="user" type="text" name="user" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
              <input id="password-input" ref="password" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
              <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
            </form>
            <div className="login-help">
              <Link to={"/register"}> Register </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}