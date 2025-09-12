import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out after a brief pause
          setTimeout(() => {
            setIsVisible(false);
            // Complete loading after fade animation
            setTimeout(onLoadingComplete, 800);
          }, 300);
          return 100;
        }
        // Fast initial progress, then slower
        const increment = prev < 60 ? 15 : prev < 90 ? 8 : 3;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${!isVisible ? 'loading-screen--fade-out' : ''}`}>
      <div className="loading-content">
        {/* Frat Boy Financial Logo/Branding */}
        <div className="loading-logo">
          <h1 className="loading-title">
            Frat Boy Financial 🍻
          </h1>
          <div className="loading-subtitle">
            BlackBroBot AI is warming up...
          </div>
        </div>

        {/* Progress Bar */}
        <div className="loading-progress-container">
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="loading-percentage">{progress}%</div>
        </div>

        {/* Loading Messages */}
        <div className="loading-messages">
          {progress < 30 && "Crushing beers and loading algorithms..."}
          {progress >= 30 && progress < 60 && "Calibrating BlackBroBot neural networks..."}
          {progress >= 60 && progress < 90 && "Syncing with DeFi protocols..."}
          {progress >= 90 && "Ready to revolutionize lending!"}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="loading-bg-elements">
        <div className="floating-emoji emoji-1">🍺</div>
        <div className="floating-emoji emoji-2">💰</div>
        <div className="floating-emoji emoji-3">🚀</div>
        <div className="floating-emoji emoji-4">🎯</div>
      </div>
    </div>
  );
};

export default LoadingScreen;