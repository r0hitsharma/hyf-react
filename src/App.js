import React, { Component } from 'react';
import TodoList from './TodoList';

const todos = [{
	id: 0,
	name: "Buy hay"
}, {
	id: 1,
	name: "Buy woodchips"
}];

class App extends Component {
	render() {
		return <TodoList todos = { todos }/>
	};
};

export default App;