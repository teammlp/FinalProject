import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const {item, handleInputChange, handleSubmit, editItem} = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"/>
              </div>
            </div>
            <input type="text" className="form-control text-capitalize" placeholder="add your task" name="item" value={item} onChange={handleInputChange}/>
          </div>
          <button type="submit" 
          className={ editItem ? "btn btn-block btn-info mt-3" : "btn btn-block btn-success mt-3"}>
          {editItem ? "edit task" : "add task"}</button>
        </form>
      </div>
    )
  }
}
