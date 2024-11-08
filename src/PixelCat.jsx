import React, { useState, useEffect } from 'react';

const PixelCat = () => {
  const [position, setPosition] = useState({ x: 50, y: window.innerHeight / 2 });
  const [isJumping, setIsJumping] = useState(false);
  const [direction, setDirection] = useState('right');
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Aktualisierung der Fenstergröße
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bewegungslogik
  useEffect(() => {
    let jumpTimeout;
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        const speed = 3; // Pixel pro Frame
        let newX = prev.x;
        let newDirection = direction;

        // Horizontale Bewegung
        if (direction === 'right') {
          newX += speed;
          if (newX > windowSize.width - 32) { // 32px ist die Breite der Katze
            newX = windowSize.width - 32;
            newDirection = 'left';
          }
        } else {
          newX -= speed;
          if (newX < 0) {
            newX = 0;
            newDirection = 'right';
          }
        }

        // Zufälliges Springen
        if (Math.random() < 0.02 && !isJumping) { // 2% Chance pro Frame
          setIsJumping(true);
          clearTimeout(jumpTimeout);
          jumpTimeout = setTimeout(() => setIsJumping(false), 500);
        }

        setDirection(newDirection);
        return { x: newX, y: prev.y };
      });
    }, 16); // ~60fps

    return () => {
      clearInterval(moveInterval);
      clearTimeout(jumpTimeout);
    };
  }, [direction, windowSize, isJumping]);

  return (
    <div 
      className="fixed pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        transform: `scaleX(${direction === 'left' ? -1 : 1}) translateY(${isJumping ? -50 : 0}px)`,
      }}
    >
      <div 
        className={`w-8 h-8 bg-contain bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGASURBVFiF7ZY9TsNAEIXfbCANP6GDUIQoaSNxgXAC4AQ5Ak4nDkE6JBqQKNxQpKahsOW1KbKytY53vYshwnmSJXsz8/x2Zn+C/62KiOwbmAHvwKeG52fAgyYPEalWL7YC9gDESPwD6AC3QMt8L4c0eH6ksd6VQK1lwBq4BTYFn82aBM9CLXe1GYaKloBVMlvpRXSBe+DLxDWxU4EWcAa8Gu8VcKLPfxKobS2AG+ADeAHOgUPgnBSCiLQi3mOTPwGOVMABcAW8me9Vjr1SAcBpwi5LpyoEQhHoA+9Af2TvEVAH6mZ9DAwMwj7pcjwzYupQyf3fBjoCxsDYQIyBkYCLEODiRPO8DswNxNxXOmqhHKigGkbhGCN//FwIfJvvDSmrCYGFWV+k7MV41Yb2r6KA8+CVlIHrJJu+AlqBLtSDgBsjcB6B6AAvZn2ZYy+7EOUKmJjcE6ALNIEmqRsxAd48ENmNKEfAFJgCEbVe09qO0kIEIsdXt5GNg1W6+5v/rX4A71Rp1CvMmm4AAAAASUVORK5CYII=')`
        }}
      />
    </div>
  );
};

export default PixelCat;