'use client';

import React, { createContext, useContext, useReducer, ReactNode, useMemo } from 'react';
import { TodoContextType } from './types';
import { todoReducer, initialState } from './todoReducer';
import { Todo } from '@shared/shared-components';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const actions = useMemo(() => ({
    addTodo: (text: string) => {
      dispatch({ type: 'ADD_TODO', payload: text });
    },
    toggleTodo: (id: string) => {
      dispatch({ type: 'TOGGLE_TODO', payload: id });
    },
    deleteTodo: (id: string) => {
      dispatch({ type: 'DELETE_TODO', payload: id });
    },
    markDeleting: (id: string) => {
      dispatch({ type: 'MARK_DELETING', payload: id });
    },
    loadTodos: (todos: Todo[]) => {
      dispatch({ type: 'LOAD_TODOS', payload: todos });
    },
    setFilter: (filter: 'all' | 'active' | 'completed') => {
      dispatch({ type: 'SET_FILTER', payload: filter });
    }
  }), []);

  const value = useMemo(() => ({
    state,
    ...actions
  }), [state, actions]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};