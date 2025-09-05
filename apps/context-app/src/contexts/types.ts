import { Todo } from '@shared/shared-components';

export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  deletingIds: string[];
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'MARK_DELETING'; payload: string }
  | { type: 'LOAD_TODOS'; payload: Todo[] }
  | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' };

export interface TodoContextType {
  state: TodoState;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  markDeleting: (id: string) => void;
  loadTodos: (todos: Todo[]) => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}