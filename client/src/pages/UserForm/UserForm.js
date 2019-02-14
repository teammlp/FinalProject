import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from 'react-router-dom';
import { userAPI} from "../../utils/API";
// import ButtonBtn from "../../components/ButtonBtn";
import { Input, TextArea, FormBtn, Date } from "../../components/Form";

import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

require('./UserForm.css');

class UserForm extends Component {
    constructor(props) {
        super(props);

      this.state = {
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
    // state = {
    //     userForm: [],
    //     company: "",
    //     position: "",
    //     detail: "",
    //     date: "",
    //     location: ""
    //   };
    

    static contextTypes = {
        router: PropTypes.object,
    }

    componentDidMount() {
        this.loadUserForm();
        if ((sessionStorage.getItem('userAuth') === 'yes') && sessionStorage.getItem("userUsername")) {
            if (sessionStorage.getItem("userID")) {
                this.setState({
                    username: sessionStorage.getItem('userUsername')
                });
            }
            this.getUserId(sessionStorage.getItem('userUsername'));
        }
    }

    loadUserForm = () => {
        userAPI.getUserForms()
          .then(res =>
            this.setState({ userForms: res.data, company: "", position: "", detail: "", date: "", location: "" })
          )
          .catch(err => console.log(err, "Why error, huh?"));
      };

    getUserId = userUsername => {
        userAPI.getUser(userUsername)
            .then(res => {
                console.log("get username", res);
                this.setState({ userID: res.data._id });
            })
            .catch(err => console.log(err));
    }

    logout = () => {
        this.props.deAuthenticate();
        sessionStorage.removeItem("userAuth");
        sessionStorage.removeItem("userUsername");
        sessionStorage.removeItem("userID");
        window.location.reload();
    }

    deleteUserForm = id => {
        userAPI.deleteUserForm(id)
          .then(res => this.loadUserForm())
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
          userAPI.saveUserForm({
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
        return ( !(sessionStorage.getItem("userAuth") === 'yes') ?
    <Redirect to={{ pathname: '/' }} /> :
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
            {this.state.userForms.length ? (
              <List>
                {this.state.userForm.map( userForm => (
                  <ListItem key={userForm._id}>
                    <Link to={"/userForm/" + userForm._id}>
                      <strong>
                        {userForm.position} at 📍 {userForm.company}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteUserForm(userForm._id)} />
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
    //     return (!(sessionStorage.getItem("userAuth") === 'yes') ?
    //         <Redirect to={{ pathname: '/login' }} /> :
    //         <div>
    //             <div className="UserWrap">
    //                 <div className="row">
    //                     <div className="col-lg-6">
    //                         <h1>Current</h1>

    //                     </div>
    //                     <FormBtn onClick={this.logout}>logout</FormBtn>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
}

export default UserForm;