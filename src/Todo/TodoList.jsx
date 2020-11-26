import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


const style = {
		ul:{
			listStyle: 'none',
			margin: 0,
			padding: 0
		}
}

function TodoList(props) {
	//const todosList = props.todos.map(el => <TodoItem />)
	return(
		<ul style={style.ul}>
			{props.todos.length > 0 ? props.todos.map((el, i) => <TodoItem todo={el} key={el.id} index={i} onChange={props.onToggle}/>) : <h2>No more todos</h2>}
		</ul>
	)
}

TodoList.propTypes ={
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired
}

export default TodoList;