import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {userAPI} from "../../utils/API";
import { TextArea, FormBtn } from "../../components/Form";

class Detail extends Component {
  state = {
    userForm: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/userForm/599dcb67f0f16317844583fc
  componentDidMount() {
    userAPI.getUserForm(this.props.match.params.id)
      .then(res => this.setState({ userForm: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.userForm.company}  {this.state.userForm.position}
              </h1>
              <hr/>
              <h1>
                {this.state.userForm.position}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Detail</h1>
              <p>
                {this.state.userForm.detail}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <TextArea/>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to main page</Link>
          </Col>
          <Col>
            <FormBtn onClick={this.handleFormSubmit} >
                Submit
            </FormBtn>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;