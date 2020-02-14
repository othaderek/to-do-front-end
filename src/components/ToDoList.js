import React, { Component } from 'react'
import Todo from './Todo'
import '../ToDoList.css'

export default class ToDoList extends Component{

    updateTodo = (e) => {
        this.props.updateTodo(e)
    }
    

    render(){
        const mapToDos = () => {
            return this.props.todos.map( todo => todo.completed == false ? <Todo key={todo.id} todo={todo} updateTodo={this.updateTodo} /> : null )
        }
        console.log(this.props);
        return (
            <div className="todo-list">
                {mapToDos()}
            </div>
        )
    }
}
