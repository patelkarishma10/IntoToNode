import React, { Component } from 'react';

export class SubComponent extends Component {

    render() {
        return (
            <div>
                <p>This code is within SubComponent</p>
                <p>The number passed to SubComponent was: {this.props.sentNumber}</p>
            </div>
        )
    }
}
