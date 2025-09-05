import React from 'react';
import { Todo } from './types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, isDeleting = false }) => {
  return (
    <div className={`todo-item ${isDeleting ? 'deleting' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        disabled={isDeleting}
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text} {isDeleting && '(Deleting in 10s...)'}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="delete-btn"
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};

export default TodoItem;