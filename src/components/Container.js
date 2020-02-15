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
        this.getTodos()
    }

    getTodos = () => {
        fetch('http://localhost:3000/api/v1/todos')
        .then( res => res.json())
        .then( jsonObj => {
            this.setState({
                todos: jsonObj
            })
        })
    }

    addNewTodoToState = (newTodo) => {
        try {
            this.setState({
                todos: [...this.state.todos, newTodo]
            })
        } catch (error) {
            console.log(error.message);
            
        }

    }
    

    addTodo = (todoBody) => { 

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
            this.addNewTodoToState(newTodo)
        })
    } 

    updateTodo = (e) => {
        // debugger
        fetch(`http://localhost:3000/api/v1/todos/${e.target.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            body: JSON.stringify({
                completed: e.target.checked,
            })
        })
        .then( res => res.json())
    } 
    
    

    render() {
        return (
            <div className = 'container'>
                <Title />
                <ToDoForm addTodo={this.addTodo} />
                <ToDoList 
                todos={this.state.todos} 
                updateTodo={this.updateTodo}
                 />

            </div>
        )
    }
}

export default Container;
