import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        return (
        <div>
            <p>location: {this.props.userLocation}</p>
             <p>name: {this.props.userName}</p>
        </div>
        )}
}

export default UserDetail;