import { TodoState, TodoAction } from './types';

export const initialState: TodoState = {
  todos: [],
  filter: 'all',
  deletingIds: []
};

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: crypto.randomUUID(),
            text: action.payload,
            completed: false,
            createdAt: new Date()
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
        deletingIds: state.deletingIds.filter(id => id !== action.payload)
      };
    case 'MARK_DELETING':
      return {
        ...state,
        deletingIds: [...state.deletingIds, action.payload]
      };
    case 'LOAD_TODOS':
      return {
        ...state,
        todos: action.payload
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};