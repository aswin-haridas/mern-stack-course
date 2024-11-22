import React, { Component } from "react";

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: "hello"
        }
    }

    render() {
        return <h1>{this.state.greeting} {this.props.name}</h1>
    }
}

export default Greeting; 