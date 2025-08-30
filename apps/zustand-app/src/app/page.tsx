'use client';

import { AddTodoForm, RenderCounter, PerformanceTest } from '@shared/shared-components';
import { useTodoStore } from '@/stores/todoStore';
import TodoList from '@/components/TodoList';

export default function Home() {
  const addTodo = useTodoStore((state) => state.addTodo);

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