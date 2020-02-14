import React, { Component } from 'react'
import '../ToDo.css'

export default class Todo extends Component {

    handleChange = (e) => {
        e.target.parentElement.remove()
        console.log(e.target.checked);
        // UPDATE TODO AND CHANGE CODE TO CONDITIONALLY RENDER THE TODOS
        // debugger
        
    }

    render() {
        return (
         <div className="outer-div">
            <input type="checkbox" id={this.props.todo.id} onChange={this.handleChange}/>
            <div className="item-text">
                <span>{this.props.todo.body}</span>
            </div>

        </div>
        )
    }
}
