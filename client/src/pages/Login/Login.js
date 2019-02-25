import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { userAPI } from "../../utils/API";
import './Login.css';
import Nav from "../../components/Nav";
import { serializeUser, deserializeUser } from '../../utils/helpers';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      userForms: null,
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
          serializeUser(data.data.user);
          this.setState({
            redirectToReferrer: true,
            user: data.data.user,
            username: "",
            password: ""
          });
          this.props.authenticate();
        }
        else {
          alert("Username or password is Incorrect.");
        }
      }.bind(this)).catch(function (err) {
        alert("Wrong username or password");
        console.log("NOT IN DATABASE");
        console.log(err);
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
    if (this.props.authenticated) {
      return (
        <Redirect to='/userForm' />
      )
    }

    return (
      <div>
        <Nav/>
        <div className="loginWrap">
          <div className="loginmodal-container">
            <form className="login" onSubmit={this.handleSubmit.bind(this)}>
              <input  id="username-input" ref="user" type="text" name="user" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
              <input id="password-input" ref="password" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
              <input type="submit" name="login" className="login loginmodal-submit" value="Login" />
            </form>
            <div className="login-help">
              <Link to={"/register"}> Sign Up &nbsp;<i className="fas fa-pencil-alt fa-xs"/></Link>
            </div>
            {/* <hr/> */}
          </div>
        </div>
        {/* <div className="row">
          <div className="col-10 mx-auto col-md-8  mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleTodoSubmit={this.handleTodoSubmit}/>
            <TodoList items={this.state.items}/>
          </div>
        </div> */}
      </div>
    );
  }
}