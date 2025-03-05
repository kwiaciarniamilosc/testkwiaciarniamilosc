import React, { useEffect, useState } from 'react';

const WomensDayLayout = ({ children }) => {
  const [hearts, setHearts] = useState([]);
  
  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 40 }, (_, i) => createHeart(i));
    setHearts(initialHearts);
    
    // Animation loop
    const animationInterval = setInterval(() => {
      setHearts(prevHearts => {
        // Move each heart down and maybe sideways
        const movedHearts = prevHearts.map(heart => ({
          ...heart,
          top: heart.top + heart.speed,
          left: heart.left + (Math.sin(heart.top * 0.01) * heart.swing),
          rotate: heart.rotate + heart.rotateSpeed
        }));
        
        // Replace hearts that have gone off-screen
        return movedHearts.map(heart => {
          if (heart.top > window.innerHeight) {
            return createHeart();
          }
          return heart;
        });
      });
    }, 50);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  // Create a new heart with random properties
  const createHeart = (index) => {
    const sizes = [15, 20, 25, 30];
    const heartColors = [
      '#e8174d', '#ff4d6d', '#ff69b4', '#fc0fc0', '#e91e63'
    ];
    
    return {
      id: index || Math.random().toString(36).substring(7),
      left: Math.random() * window.innerWidth,
      top: -30 - (Math.random() * 100),
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
      opacity: 0.6 + Math.random() * 0.4,
      speed: 0.8 + Math.random() * 1.5,
      swing: Math.random() * 2 - 1,
      rotate: Math.random() * 360,
      rotateSpeed: (Math.random() - 0.5) * 1,
      pulseSpeed: 0.5 + Math.random() * 1,
      pulseDelay: Math.random() * 5
    };
  };
  
  return (
    <div className="womens-day-container">
      <div className="hearts-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="heart"
            style={{
              position: 'absolute',
              left: `${heart.left}px`,
              top: `${heart.top}px`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              transform: `rotate(${heart.rotate}deg)`,
              pointerEvents: 'none',
              animation: `pulse ${heart.pulseSpeed}s infinite alternate`,
              animationDelay: `${heart.pulseDelay}s`,
              zIndex: 1
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              fill={heart.color}
              opacity={heart.opacity}
              style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>
      
      <div className="content-container" style={{
        position: 'relative',
        zIndex: 10,
        pointerEvents: 'auto'
      }}>
        {children}
      </div>
      
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          font-family: 'Arial', sans-serif;
        }
        
        .womens-day-container {
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #ffe6eb 0%, #f9f3f3 35%, #ffd1dc 70%, #fff0f5 100%);
          position: relative;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default WomensDayLayout;