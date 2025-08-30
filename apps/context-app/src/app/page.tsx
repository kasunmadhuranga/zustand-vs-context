'use client';

import { AddTodoForm, RenderCounter, PerformanceTest } from '@shared/shared-components';
import { useTodos } from '@/contexts/TodoContext';
import TodoList from '@/components/TodoList';

export default function Home() {
  const { addTodo } = useTodos();

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