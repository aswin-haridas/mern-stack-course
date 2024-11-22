import { Component } from "react";

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrementCount = () => {
        this.setState({ count: this.state.count - 1 })
    };
    render() {
        return (
            <div>
                <h1>counter {this.state.count}</h1>
                <button onClick={this.incrementCount}>increase</button>
                <button onClick={this.decrementCount}>decrease</button>
            </div>
        );
    }
}

export default CounterClass;