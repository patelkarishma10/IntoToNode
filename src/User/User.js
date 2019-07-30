import React, { Component } from 'react';
import UserDetail from './UserDetail';

export class User extends Component {
    constructor() {
        super();
        this.state = {
            name: "aName",
            location: "Salford"
        };
    }

    newLocation = (e) => {
        e.preventDefault();
        this.setState({
            name: document.getElementById("nameInput").value,
            location: document.getElementById("locationInput").value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.newLocation}>
                    <label for="locationInput">Enter new location: </label>
                    <input id="locationInput" type="text" />
                    <br />
                    <label for="nameInput">Enter new name: </label>
                    <input id="nameInput" type="text" />
                    <input type="submit" value="set new user" />
                </form>

                <UserDetail userName={this.state.name} userLocation={this.state.location} />
            </div>

        );
    }
}

