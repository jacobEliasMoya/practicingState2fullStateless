import React, { Component } from 'react'

export class Button extends Component {

    render() {
        return (
            <button onClick={this.props.onClick} >
                Click for color change
            </button>
        )
    }
}
