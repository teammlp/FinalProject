import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {userAPI} from "../../utils/API";
import { TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import TodoItem from "../../components/TodoItem";
require('./Detail.css');
// import TodoInput from "../../components/TodoInput";
// import TodoList from "../../components/TodoList";

// import uuid from "uuid";

class Detail extends Component {
  state = {
    userForm: {},
    Update: ""
    // items: [],
    // id: uuid(),
    // item: "",
    // editItem: false
  };
  componentDidMount() {
    userAPI.getUserForm(this.props.match.params.id)
      .then(res => this.setState({ userForm: res.data }))
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const newUpdate = {
      update: this.state.update
    };
  };

  render() {
    return (
      <Container fluid>
      <Nav/>
      <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>Job Application Detailed Info</h3>
              <hr/>
            </Jumbotron>
            </Col>
        </Row>
        <Row>
          <Col size="md-12">
           <div className="detailInfo">  
              <h3>
              Company Name:  {this.state.userForm.company}||
              Position: {this.state.userForm.position}|| Location: {this.state.userForm.location}
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <article>
              <h3>About Company</h3>
              <p>
                {this.state.userForm.detail}
                <TodoItem/>
              </p>
            </article>
          </Col>
          <Col size="md-6">
          <form>
            <TextArea
                value={this.state.update}
                onChange={this.handleInputChange}
                name="update"
                placeholder="Update your application status here..."
              />
            <FormBtn onClick={this.handleFormSubmit} >
                Submit
            </FormBtn>
          </form>
          </Col>
        </Row>
        {/* <Row>
        <Col size="md-10">
        <TodoInput />
        <TodoList />
        </Col>
        </Row> */}
        <Row>
          <Col size="md-6">
            <Link to="/userForm">← Back to main page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;