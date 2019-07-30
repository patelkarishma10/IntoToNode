import React, { Component } from 'react';
import UserDetail  from './UserDetail';

export class User extends Component {
    constructor(){
        super();
        this.state = {
            location:"Salford"
        };
    }

    newLocation = (e) => {
e.preventDefault();
    this.setState ({
        location: document.getElementById("locationInput").value
    })
}

    myUserData = {
        name : "Joe",
        location: "Salford"
    };
    render() {
        return (
        <div><UserDetail userData={this.myUserData}/>
        <form onSubmit={this.newLocation}>
            <label for="locationInput">Enter new location: </label>
            <input id="locationInput" type= "text" />
            <input type = "submit" value="set new location"/>
            </form>
            <p>The location is: {this.state.location.toString()}</p>
        </div>
        
    );
    }
}

