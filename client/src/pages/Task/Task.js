import React, { Component } from "react";
import PropTypes from "prop-types";
import Create from "../../components/Create-Task";
import Tasks from "../../components/Task";
import Guess from "../../components/Guess";
import Deleteall from "../../components/Delete-All";
import ModalAlert from "../../components/Modal";
import Link from "../../components/Link";
import { Redirect } from "react-router-dom";
import { userAPI } from "../../utils/API";
import Nav from "../../components/Nav/index";
import Logo from "../../components/Logo";
import { Col, Row, Container } from "../../components/Grid";
import {
  logoutUser,
  deserializeUser,
  serializeUser
} from "../../utils/helpers";
import "./Task.css";

export default class Task extends Component {
  state = {
    user: {},
    userID: "",
    username: "",
    tasks: [],
    selectedTask: undefined
  };

  // componentDidMount() {
  //   const user = deserializeUser();
  //   this.setState({
  //     user: user,
  //     username: user && user.username
  //   });
  // }

  componentDidMount = () => {
    const user = deserializeUser();
    this.setState({
      user: user,
      username: user && user.username
    });
    try {
      const json = localStorage.getItem("tasks");
      const tasks = JSON.parse(json);

      if (tasks) {
        this.setState(() => ({ tasks }));
      }
    } catch (e) {
      this.setState(() => ({ selectedTask: "Something went wrong!" }));
    }
  };

  loadUserTask = () => {
    userAPI
      .getTasks(this.state.user._id)
      .then(res => {
        console.log(res);
        this.setState({
          tasks: res.data
        });
      })
      .catch(err => console.log(err, "Why error, huh?"));
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem("tasks", json);
    }
  };

  logout = () => {
    this.props.deAuthenticate();
    logoutUser();
    this.setState({ user: null });
    // window.location.reload();
  };

  // deleteUserTask = id => {
  //   userAPI
  //     .deleteTask(id)
  //     .then(res => this.loadUserTask())
  //     .then(_ => serializeUser(this.state.user))
  //     .catch(err => console.log(err));
  // };
  deleteTask = taskTodelete => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => taskTodelete !== task)
    }));
  };

  whatTodo = () => {
    const randNum = Math.floor(Math.random() * this.state.tasks.length);
    const task = this.state.tasks[randNum];
    this.setState(() => ({ selectedTask: task }));
  };

  deleteAll = () => {
    this.setState(() => ({ tasks: [] }));
  };

  closeModal = () => {
    this.setState(() => ({ selectedTask: undefined }));
  };

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit = event => {
    event.preventDefault();
    const singletask = event.target.elements.singletask.value
      .trim()
      .toLowerCase();
    if (!singletask) {
      this.setState(() => ({ selectedTask: "Please enter a task!" }));
    } else if (this.state.tasks.indexOf(singletask) > -1) {
      this.setState(() => ({ selectedTask: "This task already exists!" }));
    } else
      this.setState(prevState => ({ tasks: [...prevState.tasks, singletask] }));
    event.target.elements.singletask.value = "";
  };

  render() {
    const user = this.state;
    return !user ? (
      <Redirect to={{ pathname: "/login" }} />
    ) : (
      <div>
        <Container fluid>
          <Logo/>
          {/* <Nav user={this.state.user} logoutHandler={this.logout} /> */}
          <Row>
            <Col size="md-10" id="dashboard">
              <div className="dashboard">
                <h1 id="h1-dashboard">
                  You are brilliant,{" "}
                  <a id="dashboard-username">{this.state.user.username}</a>!{" "}
                  <br />
                  <h3 id="h3-dashboard">
                    Get ahead with your goals with our Task-Maker
                  </h3>
                </h1>
                {/* want to display User name on the welcome line */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-12 sm-12">
              {/* <!-- Create task header --> */}
              <div class="row" id="create-task-h">
                <div class="col-sm-10">
                  <br />

                  <div class="card">
                    {/* <!-- card Heading for the retrieved tasks box --> */}
                    <div class="card-header">
                      <strong id="card-text">
                        <i class="fas fa-tasks" /> Create A New Task Below
                      </strong>
                    </div>

                    {/* <!-- This main card will hold each of the resulting tasks --> */}
                    <div class="card-body" id="article-section" />
                  </div>
                </div>
              </div>
              <Create onSubmit={this.onSubmit} />
              {this.state.tasks.length > 0 ? (
                <Guess whatTodo={this.whatTodo} />
              ) : null}
              {this.state.tasks.length === 0 && (
                <div className="text-center mustEnter">
                  <h2>Please Enter a task!</h2>
                </div>
              )}
              {/* <!-- Header --> */}
              <div class="row" id="delete-task-h">
                <div class="col-sm-10">
                  <br />

                  <div class="card">
                    {/* <!-- card Heading for the retrieved articles box --> */}
                    <div class="card-header">
                      <strong id="card-text">
                        <i class="fas fa-minus-square" /> Done With A Task?
                        Delete it!
                      </strong>
                    </div>

                    {/* <!-- This main card will hold each of the resulting articles --> */}
                    <div class="card-body" id="article-section" />
                  </div>
                </div>
              </div>
              {this.state.tasks.length > 0 ? (
                <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
              ) : null}
              {this.state.tasks.length > 0 ? (
                <Deleteall deleteAll={this.deleteAll} />
              ) : null}
              <ModalAlert
                selectedTask={this.state.selectedTask}
                closeModal={this.closeModal}
              />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <a id="backLink" href="/userForm" onClick={() => this.props.history.goBack()}>
                ← Back to main page
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
