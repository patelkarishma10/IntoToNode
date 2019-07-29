import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        return (
        <div>
            <p>{this.props.userData.name}</p>
        </div>
        )}
}

export default UserDetail;