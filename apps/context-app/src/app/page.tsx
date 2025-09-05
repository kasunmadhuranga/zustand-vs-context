'use client';

import { AddTodoForm, RenderCounter, PerformanceTest, useFetchTodos } from '@shared/shared-components';
import { useTodos } from '@/contexts/TodoContext';
import TodoList from '@/components/TodoList';
import { useEffect } from 'react';

export default function Home() {
  const { addTodo, loadTodos } = useTodos();
  const { todos: fetchedTodos, loading, error } = useFetchTodos();

  useEffect(() => {
    if (fetchedTodos.length > 0) {
      loadTodos(fetchedTodos);
    }
  }, [fetchedTodos, loadTodos]);

  const handleStressTest = () => {
    for (let i = 1; i <= 10; i++) {
      addTodo(`Stress test todo ${i}`);
    }
  };

  //  console.log(`times`);

  return (
    <main className="main-container">
      <RenderCounter name="Context App" />
      <h1>Context API Todo App</h1>
      
      <AddTodoForm onAdd={addTodo} />
      <PerformanceTest onStressTest={handleStressTest} />
      
      {loading && <div>Loading todos...</div>}
      {error && <div>Error: {error}</div>}
      <TodoList />
      
      <div className="advantages-section context">
        <h3>Context API Issues:</h3>
        <ul>
          <li>🔴 <strong>Watch the render counter!</strong> Every state change re-renders the entire tree</li>
          <li>❌ Requires provider wrapping</li>
          <li>❌ Limited devtools support</li>
          <li>❌ More boilerplate code</li>
        </ul>
      </div>
    </main>
  );
}