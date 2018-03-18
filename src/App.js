import React, { Component } from 'react';
import TodoList from './TodoList';

const todos = [{
	id: 0,
	name: "Buy hay",
	done: true
}, {
	id: 1,
	name: "Buy woodchips",
	done: true
}];

class App extends Component {
	render() {
		return <TodoList todos = { todos }/>
	};
};

export default App;