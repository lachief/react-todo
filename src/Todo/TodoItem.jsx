import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const styles={
	li: {
		display: "flex",
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1rem 1rem',
		border: '1px solid #222',
		borderRadius: '4px',
		marginBottom: '2rem'
	},
	input: {
		marginRight: '1rem'
	}
}

function TodoItem({todo, index, onChange}){
	const {removeTodo} = useContext(Context);

	return(
		<li style={styles.li}>
			<span className={todo.completed ? 'completed': ''}>
			<input checked={todo.completed} type="checkbox" onChange={() => {onChange(todo.id)}} style={styles.input}/>
			<strong>{index} </strong>
			{todo.title}
			</span>
			<button onClick={removeTodo.bind(null, todo.id)} className="rm">&times;</button>
			
		</li>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired
}

export default TodoItem;