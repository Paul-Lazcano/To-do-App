import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const completeNode = document.querySelector('#complete');
const closeNode = document.querySelector('#close');

const completeTask = (event) => {
    event.currentTarget.remove()
}
completeNode.addEventListener('click', completeTask)