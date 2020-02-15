import React, { Component } from 'react'
import '../ToDo.css'

export default class Todo extends Component {

    state = {
        todoBody: this.props.todo.body
    }

    
    handleChange = (e) => {
        // debugger
        e.target.parentElement.parentElement.parentElement.remove()
        console.log(e.target.checked);
        // UPDATE TODO AND CHANGE CODE TO CONDITIONALLY RENDER THE TODOS
        // debugger
        this.props.updateTodo(e)
    }

    handleTodoBodyChange = (e) => {
        this.setState({
            todoBody: e.target.value
        })
    }
    
    
    
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input" onChange={this.handleChange} id={this.props.todo.id}/>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with checkbox" value={this.state.todoBody} onChange={this.handleTodoBodyChange}/>
                </div>
            </div>
        )
    }
}
