import React, { Component } from "react";

class ColorChange extends Component {

    constructor(props) {
        super(props);
        this.state = { color: 'red' };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.color !== this.state.color) {
            console.log("color change to:", this.state.color);

        }
    }
    changeColor = () => {
        this.setState({ color: this.state.color === "red" ? "blue" : "red" });
    };
    render() {
        return (
            <div>
                <div style={{ color: this.state.color }}>
                    current color:{this.state.color}
                </div>
                <button onClick={this.changeColor}>change Color</button>

            </div>
        )
    }
}

export default ColorChange