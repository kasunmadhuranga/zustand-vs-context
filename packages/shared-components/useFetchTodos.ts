import { useState, useEffect } from 'react';
import { Todo } from './types';

// Mock API function
const fetchTodosFromAPI = async (): Promise<Todo[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data
  return [
    {
      id: '1',
      text: 'Learn React Context API',
      completed: false,
      createdAt: new Date('2024-01-01')
    },
    {
      id: '2', 
      text: 'Learn Zustand',
      completed: true,
      createdAt: new Date('2024-01-02')
    },
    {
      id: '3',
      text: 'Compare state management',
      completed: false,
      createdAt: new Date('2024-01-03')
    }
  ];
};

export const useFetchTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedTodos = await fetchTodosFromAPI();
        setTodos(fetchedTodos);
      } catch (err) {
        setError('Failed to fetch todos');
        console.error('Error fetching todos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  return { todos, loading, error, refetch: () => setLoading(true) };
};