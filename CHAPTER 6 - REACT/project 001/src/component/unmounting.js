import { Component } from "react";

class UnMount extends Component{
    componentWillUnmount(){
        console.log('the hello component is about to be removed');
    }
    render(){
        return(
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}

export default UnMount
