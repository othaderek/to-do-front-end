import React, { Component } from 'react'
import Todo from './Todo'
import '../ToDoList.css'

export default class ToDoList extends Component{
    
    render(){
        const mapToDos = () => {
            return this.props.todos.map( todo => <Todo key={todo.id} todo={todo} /> )
        }
        console.log(this.props);
        return (
            <div className="todo-list">
                {mapToDos()}
            </div>
        )
    }
}
