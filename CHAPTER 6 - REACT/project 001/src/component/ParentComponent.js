import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const user ={
        name :"Anuv Pain",
        age:"21",
        job:"Singer"
    }

    return (
        <div>
            <h1>passing props from ParentComponent</h1>
            <ChildComponent name = {user.name} age={user.age} job={user.job}/>
            
        </div>
    )
}

export default ParentComponent