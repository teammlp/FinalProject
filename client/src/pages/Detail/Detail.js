import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import {userAPI} from "../../utils/API";
import Logo from "../../components/Logo";
import Moment from 'react-moment';

require('./Detail.css');


class Detail extends Component {
  state = {
    userForm: {},
    user: {}
    // company,
    // position: "",
    // detail: "",
    // date: "",
    // location: ""
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

  render() {
    return (
      <Container fluid>
      <Logo/>
      <Row>
          <Col size="md-11" id="dashboard">
            <div className="dashboard">
              <h1 id="h1-dashboard">
              {this.state.userForm.company}
              <br />
              <h3 id="h3-dashboard">Job Application Snapshot</h3>
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
           <div className="row detailInfo"> 
           <dt className="col-sm-3">Company: </dt>
           <dd className="col-sm-9">{this.state.userForm.company}</dd>
          <dt className="col-sm-3">Position:</dt>
          <dd className="col-sm-9"> {this.state.userForm.position} 
            {/* <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p> */}
          </dd>

          <dt className="col-sm-3">Location:</dt>
          <dd className="col-sm-9">{this.state.userForm.location}</dd>
          <dt className="col-sm-3">Applied:</dt>
          <dd className="col-sm-9">
          <Moment format="MM/DD/YYYY">
          {this.state.userForm.date}</Moment></dd>
          </div>
          </Col>
          <Col size="md-5">
            <div id="comment">
              <h2 id="detail-comment">Your Comment:</h2>
              <p>
                {this.state.userForm.detail}
              </p>
           </div>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col size="md-6">
          <blockquote className="blockquote text-center">
            <p className="mb-0">“Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.”</p>
            <footer className="blockquote-footer"> Helen Keller <cite title="Source Title"></cite></footer>
          </blockquote>
          </Col>
        </Row>
        
        <Row>
          <Col size="md-12">
            <a id="backLink" href="/userForm" onClick={() => this.props.history.goBack()}>← Back to main page</a>
          </Col>
        </Row>
       
      </Container>
    );
  }
}

export default Detail;