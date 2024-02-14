import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import { CiVolumeHigh } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const AudioPlayer = React.memo(() => {
  const audioRef = useRef(new Audio("/song.mp3"));
  const [trackProgress, setTrackProgress] = useState(
    audioRef.current.currentTime
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Initial volume
  const intervalRef = useRef();
  const { duration } = audioRef.current;
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    } else {
      audioRef.current.play();
      startTimer();
    }
    setIsPlaying(!isPlaying);
  };
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);
  };
  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };
  const onScrubEnd = () => {
    if (!isPlaying) {
      toggleAudio();
    }
    startTimer();
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = {
    background: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #c5c6c8))`,
  };
  const volumeStyling = {
    background: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${volume}, #6b36ff), color-stop(${volume}, #c5c6c8))`,
  };
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  return (
    <div className="audio-player">
      <button onClick={toggleAudio}>
        {isPlaying ? <FaPause color="#6b32fd" /> : <FaPlay color="#6b32fd" />}
      </button>
      <input
        type="range"
        value={trackProgress}
        step="0.01"
        min="0"
        max={duration || 0}
        className="volume"
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        style={trackStyling}
      />
      {/* <span>Duration: {formatTime(duration)}</span> */}
      <span className="audioTimer">{formatTime(trackProgress)}</span>
      <div className="soundContainer">
        <CiVolumeHigh color="gray" size={40} className="soundIcon" />
        <input
          type="range"
          value={volume}
          step="0.01"
          min="0"
          max="1"
          className="volume"
          onChange={handleVolumeChange}
          style={volumeStyling}
        />
        <HiOutlineDotsHorizontal color="gray" size={24} className="audioDots" />
      </div>
    </div>
  );
});
export default AudioPlayer;
