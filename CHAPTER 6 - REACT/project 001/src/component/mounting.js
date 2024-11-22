import { Component } from "react";

class MyComponent extends Component{
    constructor(props){
        super(props);
        console.log('constructed called')
    }

    componentDidMount(){
        console.log('component did mount')
    }

    render(){
        return <p>MyComponent componentDidMount</p>
    }
}

export default MyComponent