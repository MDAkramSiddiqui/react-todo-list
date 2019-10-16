import React, { Component } from 'react'

//Something New
export default class TodoItem extends Component {
    render() {
        const {key, title, handleDelete, handleEdit} = this.props;

        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen"  style={{cursor: "pointer"}}></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash" style={{cursor: "pointer"}}></i>
                    </span>
                </div>
            </li>
        )
    }
}
