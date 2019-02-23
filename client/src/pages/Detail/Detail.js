import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {userAPI} from "../../utils/API";
import { TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import TodoItem from "../../components/TodoItem";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import uuid from "uuid";
import Create from '../../components/Create-Task'
require('./Detail.css');


class Detail extends Component {
  state = {
    userForm: {},
    items: [],
    id: uuid(),
    item: "",
    editItem: false
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
  handleSubmit = e =>{
    e.preventDefault();
    
    const newItem = {
      id:this.state.id,
      title: this.state.item
    };
    console.log(newItem);

    const updatedItems = {...this.state.items, newItem};
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });

  };

  clearList = ()=>{
    this.setState({
      items:[]
    })
    console.log(this.clearList,"clearlist clicked");
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item=> item.id !== id)
    this.setState({
      items: filteredItems
    });
    console.log(id, "trash clicked");
  }

  handleEdit = id =>{
    console.log(id, "pen clicked");
    
    const filteredItems = this.state.items.filter(item=> item.id !== id)
   
    const selectedItem = this.state.items.find(item => item === id)
    console.log(selectedItem);
    
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  }


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
              <span> Company Name: </span>{this.state.userForm.company}
              <span> Position:</span> {this.state.userForm.position} 
              <span> Location: </span> {this.state.userForm.location}
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
              </p>
            </article>
          </Col>
          <Col size="md-6">
          <TodoInput 
              title={this.state.item} 
              name="item"
              handleInputChange={this.handleInputChange} 
              handleSubmit={this.handleSubmit} editItem={this.editItem}/>
            {/* <TodoItem items={this.state.items} learList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/> */}
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </Col>
        </Row>
        
        <Row>
          <Col size="md-6">
            <a href="/userForm" onClick={() => this.props.history.goBack()}>← Back to main page</a>
          </Col>
        </Row>
        <hr/>
        <hr/>
      </Container>
    );
  }
}

export default Detail;