import React, { Component } from 'react'
import '../Container.css'
import Title from './Title'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

export class Container extends Component {

    state = {
        todos: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/todos')
            .then( res => res.json())
            .then( jsonObj => {
                this.setState({
                    todos: jsonObj
                })
            })
    }

    addTodo = (todoBody) => { 
        console.log(todoBody);
        fetch('http://localhost:3000/api/v1/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            body: JSON.stringify({
                body: todoBody,
                completed: false,
                user_id: 1
            })
        })
        .then( res => res.json())
        .then( newTodo => {
            this.setState({
                todos: [newTodo, ...this.state.todos]
            })
        })
    } 
    

    render() {
        return (
            <div className = 'container'>
                <Title />
                <ToDoForm addTodo={this.addTodo} />
                <ToDoList 
                todos={this.state.todos} 
                 />

            </div>
        )
    }
}

export default Container;
