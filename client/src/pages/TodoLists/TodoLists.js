import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import Register from "../Register";
// import { userAPI } from "../../utils/API";
import './TodoList.css';
import Nav from "../../components/Nav";
import TodoInput from "../../components/TodoInput";
import TodoItem from "../../components/TodoItem";
import TodoList from "../../components/TodoList";
import uuid from "uuid";

export default class TodoLists extends Component {
  // constructor(props) {
  //   super(props);
    state = {
      // todo list state
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit= this.handleSubmit.bind(this);
  // }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
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
    // const { from } = this.props.location.state || { from: { pathname: '/login' } };
    // const { redirectToReferrer } = this.state;

    // if (redirectToReferrer) {
    //   return (
    //     <Redirect to={from} />
    //   )
    // }

    return (
      <div>
        <Nav/>
          
        <div className="row">
          <div className="col-10 mx-auto col-md-8  mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}/>
            <TodoItem items={this.state.items}/>
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
}