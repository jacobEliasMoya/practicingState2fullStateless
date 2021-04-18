import React, { Component } from 'react'

// simple class to render button element 
export class Button extends Component {

    render() {
        return (
            <button onClick={this.props.onClick} >
                Click for color change
            </button>
        )
    }
}
