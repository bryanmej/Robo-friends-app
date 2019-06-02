import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import {robots} from './RobotId';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>  
    <Card name={robots[0].name} email={robots[0].email}/>
    <Card name={robots[1].name} email={robots[1].email}/>
    <Card name={robots[2].name} email={robots[2].email}/>
  </div>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
