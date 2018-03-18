import React, { Component } from 'react';

class TodoList extends Component {
	constructor(props) {
		// console.log("TodoList constructor");
		super(props);
		this.addTodo = this.addTodo.bind(this);

		this.state = {
			todos: this.props.todos,
			newTodoInput: ''
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
						/*ref={(input) => { this.state.newTodoInput = input }}*/
						onChange={ event => this.setState({
							newTodoInput: event.target.value
						}) }
						value={ this.state.newTodoInput }
						required
					/>
					<input type="submit" value="Add"/>
				</form>
				<ul>
				{
					this.state.todos.map((todo, index) =>
						<li
							key={ todo.id }
							class={ todo.done ? "done": ""}
						>
							<input
								type="checkbox"
								checked={ todo.done }
								onChange={ event => {
									const todos = this.state.todos;
									todos[index].done = event.target.checked;
									this.setState({
										todos: todos
									});
								} }
							/>
							{ todo.name }
						</li>
					)
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
			name: this.state.newTodoInput,
			done: false
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