import React from 'react';

interface PerformanceTestProps {
  onStressTest: () => void;
}

const PerformanceTest: React.FC<PerformanceTestProps> = ({ onStressTest }) => {
  return (
    <div className="performance-test">
      <h4>🧪 Performance Test</h4>
      <p>Click to add 10 todos rapidly and watch the render counter in the top-right corner!</p>
      <button 
        onClick={onStressTest}
        className="stress-test-btn"
      >
        Add 10 Todos (Stress Test)
      </button>
    </div>
  );
};

export default PerformanceTest;