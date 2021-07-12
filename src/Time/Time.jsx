import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: '',
             items: [],
        };

        this.hendleInput = this.hendleInput.bind(this)
        this.hendleSubmit = this.hendleSubmit.bind(this)
    }

    hendleSubmit(event) {
        event.preventDefault()
        this.setState({
            input: this.state.input,
            items:[...this.state.items, this.state.input]
        });
    }

    hendleInput(event) {
        this.setState({
            input: event.target.value
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.hendleSubmit}>
                <input value={this.state.input} onChange={this.hendleInput}></input>
                <button type='submit'>submit</button>
                </form>
               
                <ul>
                    {this.state.items.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
