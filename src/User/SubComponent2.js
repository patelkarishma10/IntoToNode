import React, { Component } from 'react';
export class SubComponent2 extends Component {

    render() {
        this.props.onRender();
        return (
            <div>
                <p>This code is within SubComponent</p>
            </div>
        )
    }
}
