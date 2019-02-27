import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
import { userAPI } from "../../utils/API";
// import ButtonBtn from "../../components/ButtonBtn";
import { Input, TextArea, FormBtn, Date } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { logoutUser, deserializeUser, serializeUser } from "../../utils/helpers";

require("./UserForm.css");

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userID: "",
      username: "",
      userForms: [],
      company: "",
      position: "",
      detail: "",
      date: "",
      location: ""
    };
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    const user = deserializeUser();
    this.setState({
      userForms: user && user.userForms,
      user: user,
      username: user && user.username
    });
  }

  logout = () => {
    this.props.deAuthenticate();
    logoutUser();
    this.setState({user: null});
    // window.location.reload();
  };

  loadUserForm = () => {
    userAPI
      .getUserForms(this.state.user._id)
      .then(res => {
        console.log(res);
        this.setState({
          userForms: res.data,
          company: "",
          position: "",
          detail: "",
          date: "",
          location: ""
        });
      })
      .catch(err => console.log(err, "Why error, huh?"));
  };
  deleteUserForm = id => {
    userAPI
      .deleteUserForm(id)
      .then(res => this.loadUserForm())
      .then(_ => serializeUser(this.state.user))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.company && this.state.position) {
      userAPI
        .saveUserForm({
          _user: this.state.user._id,
          company: this.state.company,
          position: this.state.position,
          detail: this.state.detail,
          date: this.state.date,
          location: this.state.location
        })
        .then(res => this.loadUserForm())
        .catch(err => console.log(err));
    }
  };

  render() {
    const { user, userForms } = this.state;

    return !user ? (
      <Redirect to={{ pathname: "/login" }} />
    ) : (
      <Container fluid>
        <Nav user={user} logoutHandler={this.logout} />
        <Row>
          <Col size="md-12">
            <div className="dashboard">
              <h1>Welcome to your "ezHunt" DashBoard!</h1>
              {/* want to display User name on the welcome line */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-6">
            {/* <Jumbotron> */}
            <h3 className="List">
              Companies On My List <i className="fas fa-archive fa-xs" />
            </h3>
            {/* </Jumbotron> */}
            {userForms.length ? (
              <List>
                {userForms.map(userForm => (
                  <ListItem key={userForm._id}>
                    <Link to={"/userForm/" + userForm._id}>
                      <strong>
                        {userForm.position} at {userForm.company}, 📍{" "}
                        {userForm.location}
                      </strong>
                    </Link>
                    <DeleteBtn
                      onClick={() => this.deleteUserForm(userForm._id)}
                    />
                    {/* <button onClick={this.submit}>Confirm dialog</button> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6">
            <h3 className="List">
              New application <i className="far fa-copy fa-xs" />
            </h3>
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
              {/* <DatePicker
                selected={this.state.startDate}
                onChange={this.handleInputChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              /> */}
              <Date
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date you applied"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location" 
              />
              
              <TextArea
                value={this.state.detail}
                onChange={this.handleInputChange}
                name="detail"
                placeholder="Write your comment (Optional)"
              />
              <FormBtn
                disabled={!(this.state.company && this.state.position)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserForm;
