import React from 'react';

const VolumeControl = ({ volume, onVolumeChange }) => {
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  return (
    <div className="volume-control">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{color: '#b3b3b3'}}>
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
      
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
      
      <span className="volume-percent">
        {Math.round(volume * 100)}%
      </span>
    </div>
  );
};

export default VolumeControl;