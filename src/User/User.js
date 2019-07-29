import React, { Component } from 'react';
import UserDetail  from './UserDetail';

export class User extends Component {
    
    myUserData = {
        name : "Joe"
    };
    render() {
        return (
        <div><UserDetail userData={this.myUserData}/></div>
        
    );
    }
}

