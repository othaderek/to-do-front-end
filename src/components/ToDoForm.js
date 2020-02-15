import React, { Component } from 'react'
import '../Container.css'
import '../ToDoForm.css'


export default class ToDoForm extends Component {

    state = {
        input: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.input)
        this.resetInputState()
    }

    resetInputState = () => {
        this.setState({
            input: ""
        })
    }
    


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <input className="input-field " 
                    placeholder=" Add a todo" 
                    name="input"
                    onChange={this.handleChange}
                    value={this.state.input}
                    />
                    <button>+</button>
                </form>
            </div>
        )
    }
}

