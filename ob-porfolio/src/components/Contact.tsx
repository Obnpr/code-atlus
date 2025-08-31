// App.tsx
import React, { useState } from 'react';

// Simple Header component
const Header: React.FC = () => {
  return (
    <header>
      <h1>Welcome to My React Website</h1>
      <p>Build amazing apps with React and TypeScript!</p>
    </header>
  );
};

// Simple Button component that interacts with state
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Main App component
const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  );
};

export default Contact;
