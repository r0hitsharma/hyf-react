import React from 'react';

class TodoList extends React.Component {
	constructor(props) {
		console.log("TodoList constructor");
		super(props);
	}

	render() {
		return (
			<div>
				<ul>
				{
					this.props.todos.map(todo => <li>{ todo.name }</li>)
				}
				</ul>
			</div>
		);
	}

	componentWillMount() {
		console.log("TodoList component mounting");
	}

	componentDidMount() {
		console.log("TodoList component mounted");
	}
};

export default TodoList;