import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const { item, handleSubmit, handleChange, editItem } = this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i class="fas fa-book"></i>
                            </div>
                        </div>

                        <input 
                        type="text" 
                        className="form-control text-capitalize" 
                        placeholder="add todo item"
                        value={item}
                        onChange={handleChange}
                        style={{borderRadius: "3px"}}
                        />

                        <button 
                        disabled={item?false:true}
                        className={
                        editItem ? "btn btn-block btn-success mt-3 text-uppercase" : "btn btn-block btn-primary text-uppercase mt-3" } 
                        type="Submit"> 
                            {editItem ? "edit item" : "add item"}
                        </button>

                    </div>
                </form>
            </div>
        )
    }
}
