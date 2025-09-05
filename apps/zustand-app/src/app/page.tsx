'use client';

import { AddTodoForm, RenderCounter, PerformanceTest, useFetchTodos } from '@shared/shared-components';
import { useTodoStore } from '@/stores/todoStore';
import TodoList from '@/components/TodoList';
import { useEffect } from 'react';

export default function Home() {
  const { addTodo, loadTodos, setLoading, loading } = useTodoStore();
  const { todos: fetchedTodos, loading: fetchLoading, error } = useFetchTodos();

  useEffect(() => {
    setLoading(fetchLoading);
    if (fetchedTodos.length > 0) {
      loadTodos(fetchedTodos);
    }
  }, [fetchedTodos, fetchLoading, loadTodos, setLoading]);

  const handleStressTest = () => {
    for (let i = 1; i <= 10; i++) {
      addTodo(`Stress test todo ${i}`);
    }
  };

  //  console.log(`times`); 

  return (
    <main className="main-container">
      <RenderCounter name="Zustand App" />
      <h1>Zustand Todo App</h1>
      
      
      <AddTodoForm onAdd={addTodo} />
      <PerformanceTest onStressTest={handleStressTest} />
      
      {loading && <div>Loading todos...</div>}
      {error && <div>Error: {error}</div>}
      <TodoList />
      
      <div className="advantages-section">
        <h3>Zustand Advantages:</h3>
        <ul>
          <li>🟢 <strong>Render counter stays low!</strong> Only affected components re-render</li>
          <li>✅ No providers needed</li>
          <li>✅ Excellent devtools (open Redux DevTools)</li>
          <li>✅ Cleaner, simpler API</li>
          <li>✅ Better performance at scale</li>
        </ul>
      </div>
    </main>
  );
}