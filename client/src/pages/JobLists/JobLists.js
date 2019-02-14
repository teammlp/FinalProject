import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';
import { userAPI } from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Date, Location } from "../../components/Form";

class JobLists extends Component {
  state = {
    jobLists: [],
    company: "",
    position: "",
    detail: "",
    date: "",
    location: ""
  };

  componentDidMount() {
    this.loadJobLists();
  }

  loadJobLists = () => {
    userAPI.getJobLists()
      .then(res =>
        this.setState({ jobLists: res.data, company: "", position: "", detail: "", date: "", location: "" })
      )
      .catch(err => console.log(err, "Why error, huh?"));
  };

  deleteJobList = id => {
    userAPI.deleteJobList(id)
      .then(res => this.loadJobLists())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
//   getInitialState() {
//     return {selectValue: 'Bengaluru'};
//   }
// handleChange(e) {

//     this.setState({selectValue: e.target.value});
// }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.company && this.state.position) {
      userAPI.saveJobList({
        company: this.state.company,
        position: this.state.position,
        detail: this.state.detail,
        date: this.state.date,
        location: this.state.location
      })
        .then(res => this.loadJobLists())
        .catch(err => console.log(err));
    }
    
  };


static contextTypes = {
    router: PropTypes.object,
}

// componentDidMount() {
//     if ((sessionStorage.getItem('userAuth') === 'yes') && sessionStorage.getItem("userUsername")) {
//         if (sessionStorage.getItem("userID")) {
//             this.setState({
//                 username: sessionStorage.getItem('userUsername')
//             });
//         }
//         this.getUserId(sessionStorage.getItem('userUsername'));
//     }
// }

// getUserId = userUsername => {
//     userAPI.getUser(userUsername)
//         .then(res => {
//             console.log("get username", res);
//             this.setState({ userID: res.data._id });
//         })
//         .catch(err => console.log(err));
// }
  logout = () => {
    this.props.deAuthenticate();
    sessionStorage.removeItem("userAuth");
    // sessionStorage.removeItem("userUsername");
    // sessionStorage.removeItem("userID");
    window.location.reload();
  }

  render() {
    return ( !(sessionStorage.getItem("userAuth") === 'yes') ?
    <Redirect to={{ pathname: '/login' }} /> :
      <Container fluid>
      <br/>
      <br/>
      <FormBtn onClick={this.logout}>logout</FormBtn>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <hr/>
              <h3>What Companies have you applied?</h3>
              <hr/>
            </Jumbotron>
            </Col>
        </Row>
        <Row>
          <Col size="md-3">
          </Col>

          <Col size="md-6">
            <form>
              <Input
                value={this.state.company}
                onChange={this.handleInputChange}
                name="company"
                placeholder="Company Name (required)"
              />
              <Input
                value={this.state.position}
                onChange={this.handleInputChange}
                name="position"
                placeholder="Position (required)"
              />
              <TextArea
                value={this.state.detail}
                onChange={this.handleInputChange}
                name="detail"
                placeholder="Write your comment (Optional)"
              />
              <Date
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date you applied"
              />
              <p>Location</p><Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location"
                IL
              />
              {/* <select id="cityList" value={this.state.selectValue} onChange={this.handleChange}>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option> 
                </select> */}
              <FormBtn
                disabled={!(this.state.company && this.state.position)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          </Row>
          <Row>
          <Col size="md-2">
          </Col>
          <Col size="md-8 sm-8">
            <Jumbotron>
              <h1>Companies On My List</h1>
            </Jumbotron>
            {this.state.jobLists.length ? (
              <List>
                {this.state.jobLists.map(jobList => (
                  <ListItem key={jobList._id}>
                    <Link to={"/jobLists/" + jobList._id}>
                      <strong>
                        {jobList.position} at 📍 {jobList.company}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteJobList(jobList._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-2"/>
        </Row>
      </Container>
    );
  }
}

export default JobLists;