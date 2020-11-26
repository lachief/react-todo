import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
            value,
            onChange: function(e){
                setValue(e.target.value)
            }
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}){
    const input = useInputValue('');
    function submitHandler(e){
        e.preventDefault();
        if (input.value().trim()){
            onCreate(input.value())
            input.clear();
           // setValue('');
        }
    }

    return(
        <form action="" className="add-todo" onSubmit={submitHandler}>
            <input type="text" {...input.bind} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;