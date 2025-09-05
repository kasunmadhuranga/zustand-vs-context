'use client';

import React from 'react';
import { TodoItem } from '@shared/shared-components';
import { useTodos } from '@/contexts/TodoContext';

const TodoList: React.FC = () => {
  const { state, toggleTodo, deleteTodo, markDeleting, setFilter } = useTodos();

  const handleDelete = (id: string) => {
    // Mark as deleting immediately for visual feedback
    markDeleting(id);
    console.log(`Context: Deleting todo ${id} in 10 seconds...`);
    
    // Delete after 10 seconds
    setTimeout(() => {
      deleteTodo(id);
      console.log(`Context: Todo ${id} deleted!`);
    }, 10000);
  };
  
  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  const stats = {
    total: state.todos.length,
    completed: state.todos.filter(todo => todo.completed).length,
    pending: state.todos.filter(todo => !todo.completed).length
  };

  return (
    <div>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">Total:</span>
          <span className="stat-value">{stats.total}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Completed:</span>
          <span className="stat-value">{stats.completed}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Pending:</span>
          <span className="stat-value">{stats.pending}</span>
        </div>
      </div>
      
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${state.filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${state.filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          className={`filter-btn ${state.filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={handleDelete}
            isDeleting={state.deletingIds.includes(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;