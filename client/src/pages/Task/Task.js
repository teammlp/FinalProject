import React, { Component } from 'react'
import PropTypes from "prop-types";
import Create from '../../components/Create-Task'
import Tasks from '../../components/Task'
import Guess from '../../components/Guess'
import Deleteall from '../../components/Delete-All'
import ModalAlert from '../../components/Modal'
import Link from '../../components/Link'
import { Redirect } from 'react-router-dom';
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import './Task.css'

export default class Task extends Component {
  state = {
    tasks: [],
    selectedTask: undefined
  }

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('tasks')
      const tasks = JSON.parse(json)

      if (tasks) {
        this.setState(() => ({ tasks }))
      }
    } catch (e) {
      this.setState(() => ({ selectedTask: 'Something went wrong!' }))
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks)
      localStorage.setItem('tasks', json)
    }
  }

  deleteTask = (taskTodelete) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskTodelete !== task)
    }))
  }

  whatTodo = () => {
    const randNum = Math.floor(Math.random() * this.state.tasks.length)
    const task = this.state.tasks[randNum]
    this.setState(() => ({ selectedTask: task }))
  }

  deleteAll = () => {
    this.setState(() => ({ tasks: [] }))
  }

  closeModal = () => {
    this.setState(() => ({ selectedTask: undefined }))
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  onSubmit = (event) => {
    event.preventDefault()
    const singletask = event.target.elements.singletask.value.trim().toLowerCase()
    if (!singletask) {
      this.setState(() => ({ selectedTask: 'Please enter a task!' }))
    } else if (this.state.tasks.indexOf(singletask) > -1) {
      this.setState(() => ({ selectedTask: 'This task already exists!' }))
    } else this.setState((prevState) => ({ tasks: [...prevState.tasks, singletask] }))
    event.target.elements.singletask.value = ''
  }
  render() {
    return (!(sessionStorage.getItem("userAuth") === 'yes') ?
      <Redirect to={{ pathname: '/login' }} /> :
      <div>
        <Container fluid>
          <Jumbotron>
            <h3>Enter your tasks to achieve your Goal!</h3>
          </Jumbotron>
          <Row>
            <Col size="md-12 sm-12">
              <Create
                onSubmit={this.onSubmit}
              />
              {this.state.tasks.length > 0 ?
                <Guess
                  whatTodo={this.whatTodo}
                />
                : null
              }
              {
                this.state.tasks.length === 0 &&
                <div className="text-center">
                  <h4>Please Enter a task!</h4>
                </div>
              }
              {this.state.tasks.length > 0 ?

                <Tasks
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask}
                />
                : null
              }
              {this.state.tasks.length > 0 ?
                <Deleteall
                  deleteAll={this.deleteAll}
                />
                : null
              }
              <ModalAlert
                selectedTask={this.state.selectedTask}
                closeModal={this.closeModal}
              />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <a onClick={() => this.props.history.goBack()}>
                ← Back to main page
                </a>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}