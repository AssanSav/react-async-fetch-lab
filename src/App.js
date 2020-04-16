import React, { Component } from "react"

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
        this.handleFetch = this.handleFetch.bind(this)
        this.listPeople = this.listPeople.bind(this)
    }

    componentDidMount() {
      this.handleFetch()
    }

    handleFetch() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(({people}) => this.setState({
                    people: people
            }
            ))
    }

    listPeople() {
        return this.state.people.map((person, index) => <h2 key={index}>{person.name}</h2>)
    }

    render() {
        return (
            <div>
                {this.listPeople()}
            </div>
        )
    }
}