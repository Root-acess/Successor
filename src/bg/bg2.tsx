// Bg.tsx
import React from 'react';

const Bg2: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom right, #ff6f61, #d3a625)', // Vibrant gradient
        overflow: 'hidden',
      }}
    >
      <ul
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          listStyle: 'none',
          overflow: 'hidden',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            style={{
              position: 'absolute',
              background: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`,
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              left: `${Math.random() * 100}%`,
              animation: `animate ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 20}s`,
              bottom: '-150px',
              borderRadius: '50%',
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Bg2;
