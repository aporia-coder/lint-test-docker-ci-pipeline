import { useState } from 'react';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = (item) => {
    const newTodos = [...todos, { item }];
    setTodos(newTodos);
  };

  const completeTodo = (idx) => {
    const newTodos = [...todos];
    newTodos[idx].isComplete = true;
    setTodos(newTodos);
  };

  const deleteTodo = (idx) => {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div>
      {todos.map((todo, idx) => {
        return (
          <div key={idx}>
            <h1
              data-testid="todo-text"
              style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}
            >
              {todo.item}
            </h1>
            <button
              onClick={() => completeTodo(idx)}
              data-testid="complete-button"
            >
              Complete
            </button>
            <button onClick={() => deleteTodo(idx)}>Delete</button>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          data-testid="input-field"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" data-testid="submit-button">
          Submit!
        </button>
      </form>
    </div>
  );
};
