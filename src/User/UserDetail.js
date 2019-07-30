import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.userName}</li>
                    <li>{this.props.userLocation}</li>
                </ul>
                {/* <p>location: {this.props.userLocation}</p>
                <p>name: {this.props.userName}</p> */}
            </div>
        )
    }
}

export default UserDetail;