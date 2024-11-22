import React from 'react'
import Welcome from './welcome'
import MyWeclomeClass from './WelcomeClass'
import Greeting from './greeting'
import ParentComponent from './ParentComponent'
import CounterClass from './SetStateClass'
import MyComponent from './mounting'
import UnMount from './unmounting'
import ColorChange from './updating'
import EventHandling from './EventHandling'
import ClassComponent from './eventBinding'
import FunctionComponent from './FunEventHandling'
import CounterHook from './counterHook'
import ArguementPassing from './argumentPassing'
import ListMap from './listmap'
import FruitList from './keyFruitList'
import ControlledForm from './controlledForm'
import UncontrolledForm from './uncontrolledForm'
import SubmitForm from './submitForm'
import ValidationSubmitForm from './validation'
import AsyncPostList from './AsyncPostList'
function Mypage() {
    return (
        <div>
            <h1>Welcome to My Page</h1>
            <p>This is the My Page of the application.</p>
            <AsyncPostList/>
            <ValidationSubmitForm />
            <SubmitForm />
            <UncontrolledForm /><hr />
            <ControlledForm />
            <FruitList />
            <EventHandling />
            <ColorChange />
            <Welcome firstName='bob' />
            <MyWeclomeClass firstName='Alice' />
            <Greeting name='ramu' />
            <ParentComponent />
            <CounterClass />
            <MyComponent />
            <UnMount />
            <ClassComponent /><br />
            <FunctionComponent />
            <CounterHook />
            <ArguementPassing />
            <ListMap />
        </div>
    )
}

export default Mypage;
