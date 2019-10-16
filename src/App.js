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
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });

  };

  clearList = () => {
    this.setState({
      items: []
    })
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems
    })
  };

  handleEdit = (id) => {
  const filteredItems = this.state.items.filter((item) => item.id !== id);
  const selectedItem = this.state.items.find(item => item.id === id);

  this.setState({
    items: filteredItems,
    item: selectedItem.title,
    id: id,
    editItem: true
  });


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
