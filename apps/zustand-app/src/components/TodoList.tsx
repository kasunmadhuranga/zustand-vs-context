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
    markDeleting,
    getFilteredTodos, 
    getStats,
    deletingIds
  } = useTodoStore();
  
  const filteredTodos = getFilteredTodos();
  const stats = getStats();

  const handleDelete = (id: string) => {
    // Mark as deleting immediately for visual feedback
    markDeleting(id);
    console.log(`Deleting todo ${id} in 10 seconds...`);
    
    // Delete after 10 seconds
    setTimeout(() => {
      deleteTodo(id);
      console.log(`Todo ${id} deleted!`);
    }, 10000);
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
            onDelete={handleDelete}
            isDeleting={deletingIds.includes(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;