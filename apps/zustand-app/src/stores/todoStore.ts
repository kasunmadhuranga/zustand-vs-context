import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { Todo } from '@shared/shared-components';

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  deletingIds: string[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  markDeleting: (id: string) => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  getFilteredTodos: () => Todo[];
  getStats: () => { total: number; completed: number; pending: number };
}

export const useTodoStore = create<TodoState>()(
  devtools(
    subscribeWithSelector(
    (set, get) => ({
      todos: [],
      filter: 'all',
      deletingIds: [],
      
      addTodo: (text: string) =>
        set(
          (state) => ({
            todos: [
              ...state.todos,
              {
                id: crypto.randomUUID(),
                text,
                completed: false,
                createdAt: new Date(),
              },
            ],
          }),
          false,
          'addTodo'
        ),
      
      toggleTodo: (id: string) =>
        set(
          (state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          }),
          false,
          'toggleTodo'
        ),
      
      deleteTodo: (id: string) =>
        set(
          (state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
            deletingIds: state.deletingIds.filter((deletingId) => deletingId !== id),
          }),
          false,
          'deleteTodo'
        ),
      
      markDeleting: (id: string) =>
        set(
          (state) => ({
            deletingIds: [...state.deletingIds, id],
          }),
          false,
          'markDeleting'
        ),
      
      setFilter: (filter) => set({ filter }, false, 'setFilter'),
      
      getFilteredTodos: () => {
        const { todos, filter } = get();
        if (filter === 'active') return todos.filter((todo) => !todo.completed);
        if (filter === 'completed') return todos.filter((todo) => todo.completed);
        return todos;
      },
      
      getStats: () => {
        const todos = get().todos;
        const total = todos.length;
        const completed = todos.filter((todo) => todo.completed).length;
        return { total, completed, pending: total - completed };
      },
    })),
    {
      name: 'todo-store',
    }
  )
);