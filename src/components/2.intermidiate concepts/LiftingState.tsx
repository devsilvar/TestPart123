// Lifting state up is a concept in React where you move the state from a child component to a common parent component. This is typically done when multiple components need to share and synchronize the same state.

// When two or more componenet needs to share a state, Lifting it becomes imortant
import { TodoInputFunction } from '../../utils/types';
import { useState } from 'react';
// Parent Component
// This component is responsible for managing the state of the todos.
// It holds the state of the todos in its state variable "todos" and
// provides a function "addTodo" to add a new todo to the list.
// The "addTodo" function is passed as a prop to the TodoInput component
// so that it can use it to add a new todo to the list.
const TodoApp = () => {
  // State variable to hold the todos
  const [todos, setTodos] = useState<string[] | []>([]);

  // Function to add a new todo to the list
  // This function is passed as a prop to the TodoInput component
  // and is used by the component to add a new todo to the list
  const addTodo = (newTodo: string) => {
    // When the function is called, it adds the new todo to the existing
    // list of todos and updates the state of the component.
    setTodos([...todos, newTodo]);
  };

  // The component renders two children components: TodoInput and TodoList
  // The TodoInput component is responsible for getting user input and adding
  // a new todo to the list. The TodoList component is responsible for displaying
  // the list of todos.
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

// TodoInput Component
const TodoInput: React.FC<TodoInputFunction> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        placeholder='Add a new todo'
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

// TodoList Component
const TodoList = ({ todos }: { todos: string[] }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoApp;
