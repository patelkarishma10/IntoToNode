import React, { Component } from 'react';
import axios from "axios";

export class OmdbComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        };
    }
    makeRequest = () => {
        axios
            .get("http://www.omdbapi.com/?apikey=cf6d6c63&t=hop")
            .then(response => {
                this.setState({
                    data: response.data
                });
            });
    };
    render() {
        const { Title, Year, Rated, Genre, Plot, Poster } = this.state.data;
        return (
            <div>
                <button class="btn btn-primary" onClick={this.makeRequest}>Click to get film</button>
                <h2>AutoFilm.js</h2>
                <h4>{Title}</h4>
                <h4>{Year}</h4>
                <h4>{Rated}</h4>
                <h4>{Genre}</h4>
                <h4>{Plot}</h4>
                <img src={Poster} />
            </div>
        )
    }
}