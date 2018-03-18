import React, { Component } from 'react';

class TodoList extends Component {
	constructor(props) {
		// console.log("TodoList constructor");
		super(props);
		this.addTodo = this.addTodo.bind(this);

		this.state = {
			todos: this.props.todos
		};

		this.counter = Math.max(...this.state.todos.map(todo => todo.id));
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.addTodo }>
					<label>Add new todo: </label>
					<input
						placeholder="todo item"
						ref={(input) => { this.newTodoInput = input }}
						required
					/>
					<input type="submit" value="Add"/>
				</form>
				<ul>
				{
					this.state.todos.map(todo => <li key={ todo.id }>{ todo.name }</li>)
				}
				</ul>
			</div>
		);
	}

	addTodo(e) {
		// stop the form from navigating away
		e.preventDefault();

		// console.log(this.props.todos);
		const newTodo = {
			id: ++this.counter,
			name: this.newTodoInput.value
		};
		console.log("adding Todo:", newTodo);
		this.setState({ todos: [...this.state.todos, newTodo]});
	}

	componentWillMount() {
		// console.log("TodoList component mounting");
	}

	componentDidMount() {
		// console.log("TodoList component mounted");
	}
};

export default TodoList;