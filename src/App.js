import React, { Component } from 'react'
import uuid from 'uuid'
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default class App extends Component {

  state = {
    items: [
      {id: 1, title: "wake up"},
      {id: 2, title: "eat breakfast"}
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = (event) => {
    console.log('Handle Change');
  };

  handleSubmit = (event) => {
    console.log('Handle Submit');
  };

  clearList = (event) => {
    console.log('Clear List');
  };

  handleDelete = (event) => {
    console.log('Handle Delete');
  };

  handleEdit = (event) => {
    console.log('Handle Edit');
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">

              <h3 className="text-capitalize text-center">todo input</h3>

              <TodoInput 
              item={this.state.item} 
              handleSubmit={this.handleSubmit} 
              handleChange={this.handleChange} 
              editItem={this.state.editItem} 
              />

              <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              />

            </div>
          </div>
        </div>
      </div>
    )
  }
}
