import React, { Component } from "react";

// class ClassComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(){
//         alert("button clicked in class component!")
//     }
//     render(){
//         return <button onClick={this.handleClick}>Click here</button>
//     }
// }

class ClassComponent extends Component {

    handleClick = () => {
        alert("button clicked in class component!")
    }
    render() {
        return (
            <button onClick={this.handleClick}>Click here</button>
        )
    }
}

export default ClassComponent;

