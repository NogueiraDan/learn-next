import React from "react";
import "./todolist.scss";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span className={todo.completed ? "completed" : "todoText"}>{todo.text}</span>
          <button
            onClick={() => onDelete(todo.id)}
            className="deleteButton"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;