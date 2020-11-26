import React, {useEffect} from 'react';
import TodoList from './Todo/TodoList';
import Context from './Todo/context';
import AddTodo from './Todo/AddTodo';
import Loader from './Loader';

function App() {
  const [todos, setTodos] = React.useState([
  ]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000)
      })
  }, [])

  function toggleTodo(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
         todo.completed = !todo.completed;
          console.log(todo);
        }
        return todo;
      })
    )
  }


  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React 2020</h1>
        <AddTodo onCreate={addTodo} />
        {loading ? <Loader/> : <TodoList todos={todos} onToggle={toggleTodo}/>}
        
      </div>
    </Context.Provider>
    
  );
}

export default App;
