import React, { useRef, useEffect, useState } from 'react';

interface RenderCounterProps {
  name: string;
}

const RenderCounter: React.FC<RenderCounterProps> = ({ name }) => {
  const renderCount = useRef(0);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  renderCount.current += 1;
 

  if (!mounted) return null;

  return (
    <div className={`render-counter ${renderCount.current > 5 ? 'high' : 'normal'}`}>
      {name} Renders: {renderCount.current}
    </div>
  );
};

export default RenderCounter;