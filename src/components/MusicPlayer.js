import React, { useState } from 'react';
import SongInfo from './SongInfo';
import ProgressBar from './ProgressBar';
import PlayerControls from './PlayerControls';
import VolumeControl from './VolumeControl';
import Playlist from './Playlist';
import { songs } from '../data/songs';

const MusicPlayer = () => {
   const [volume, setVolume] = useState(0.7); 
  const currentSong = songs[0];
    const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  return (
    <div className="bg-secondary rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden">
      <div className="p-6">
        <SongInfo 
          title={currentSong.title}
          artist={currentSong.artist} 
          cover={currentSong.cover}
          duration={currentSong.duration}
        />
        
        <div className="mt-6">
          <ProgressBar />
        </div>
        
        <div className="mt-6">
          <PlayerControls />
        </div>
        
        <div className="mt-4">
          <VolumeControl />
        </div>
      </div>
      
      <div className="border-t border-accent">
        <Playlist songs={songs} currentSongId={currentSong.id} />
      </div>
    </div>
  );
};

export default MusicPlayer;