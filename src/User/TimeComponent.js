import React, { Component } from 'react';
export class TimeComponent extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            time: new Date()
        };
    }
    newTime = () => {
        this.setState({
            clicked: true,
            time: new Date()
        })
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.newTime}>
                    get new time
        </button>
                <p>{this.state.time.toString()}</p>
            </div>
        )
    }
}
