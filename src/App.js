import React, { Component } from 'react';
// import { Button } from "reactstrap";

import logo from './logo.svg';
import './App.css';
import { User } from './User/User';
import { SubComponent } from './User/SubComponent';
import { SubComponent2 } from './User/SubComponent2';
import { TimeComponent } from './User/TimeComponent';
import { OmdbComponent } from './User/OmdbComponent';


// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

// library.add(faStroopwafel);


export class App extends Component {
  number = 2;
  render() {
    return (
      <div>
        <div>
          <h1>User</h1>
          <User />
        </div>

        <div className="App">
          <p>This is the app Component</p>
          <SubComponent sentNumber={this.number}></SubComponent>
        </div>


        <div className="App">
          <p>This is the app Component</p>
          <SubComponent2 onRender={() => this.whenSubComponentRender()}></SubComponent2>
        </div>

        <div className="App">
          <p>This is the time Component</p>
          <TimeComponent></TimeComponent>
        </div>
        {/* <Button
          onClick={this.handleClick}
          color="success"
          outline={true}
        >
          Success
        </Button> */}

        {/* <div>
          Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
        </div> */}
        <OmdbComponent />

      </div>
    );
  }
  whenSubComponentRender() {
    console.log('sub component rendered');
  }

}


export default App;
