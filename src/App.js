import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './User/User';
import {SubComponent} from './User/SubComponent';
import {SubComponent2} from './User/SubComponent2';

export class App extends Component {
   number = 2;
//    myUserData = {
//     <div> <ul>
//   <li>Coffee</li>
//   <li>Tea</li>
//   <li>Milk</li>
// </ul>
// </div> 
   
//    }
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

      </div>



    );
  }
    whenSubComponentRender() {
    console.log('sub component rendered');
  }

}


export default App;
