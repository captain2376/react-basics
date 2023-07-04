import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

 class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                {/* in the render() method context value is available as this.context */}
                Component E Context:    {this.context}
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentE


//assign usercontext to the context type property on the class
//ComponentE.contextType=UserContext
//limitations of context type property
//1.works only with class component
//2.you can subscribe only to a single context using context type
//3.many a times in your application you need to read more than one context in which scenario 
//the consumer component is the way to go
