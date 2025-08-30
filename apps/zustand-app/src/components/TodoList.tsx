'use client';

import React from 'react';
import { TodoItem } from '@shared/shared-components';
import { useTodoStore } from '@/stores/todoStore';

const TodoList: React.FC = () => {
  const { 
    filter, 
    setFilter, 
    toggleTodo, 
    deleteTodo, 
    getFilteredTodos, 
    getStats 
  } = useTodoStore();
  
  const filteredTodos = getFilteredTodos();
  const stats = getStats();

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
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
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
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;