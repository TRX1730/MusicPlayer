import React from 'react';

const ProgressBar = ({ currentTime, duration, onTimeUpdate }) => {
  
  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const percent = clickPosition / progressBarWidth;
    const newTime = percent * duration;
    
    onTimeUpdate(newTime);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="progress-bar" onClick={handleProgressClick}>
      <div 
        className="progress" 
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;