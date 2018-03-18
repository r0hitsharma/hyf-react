import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

const todoList = [{
	name: "Buy hay"
}, {
	name: "Buy woodchips"
}];

ReactDOM.render(<TodoList todos = { todoList }/>, document.getElementById('root'));
