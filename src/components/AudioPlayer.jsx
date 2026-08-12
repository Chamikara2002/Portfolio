import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, X, Disc, Radio } from 'lucide-react';

export default function AudioPlayer({ audioUrl }) {
  // Reliable high quality ambient futuristic cyberpunk audio track
  const trackList = [
    { name: 'Futuristic Cyberpunk Theme', url: audioUrl || '/futuristic-cyberpunk.mp3' },
    { name: 'NIVIRO - The Return (NCS Release)', url: '/the-return.mp3' }
  ].filter(t => t.url);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
      audioRef.current.loop = true;
    }
  }, [volume, isMuted]);

  // Handle first user click anywhere to enable audio if browser blocked autoplay
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!userInteracted && audioRef.current && !isPlaying) {
        setUserInteracted(true);
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Autoplay blocked until user clicks button:', err));
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [userInteracted, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setUserInteracted(true);
        })
        .catch((err) => {
          console.log('Error playing audio, switching track:', err);
          handleTrackError();
        });
    }
  };

  const handleTrackError = () => {
    if (currentTrackIndex < trackList.length - 1) {
      setCurrentTrackIndex((prev) => prev + 1);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val === 0) {
        audioRef.current.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  if (isDisabled) {
    return (
      <button
        onClick={() => {
          setIsDisabled(false);
          togglePlay();
        }}
        className="fixed bottom-6 left-6 z-50 p-3 bg-[#0A192F]/90 border border-[#64FFDA]/40 rounded-full text-[#64FFDA] hover:text-white hover:border-[#64FFDA] transition-all shadow-neon-teal backdrop-blur-md group cursor-pointer"
        title="Enable Music Player"
      >
        <Music className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 sm:gap-3 bg-[#0A192F]/95 border border-[#64FFDA]/40 p-2 sm:p-2.5 px-3.5 sm:px-4 rounded-full shadow-neon-teal backdrop-blur-2xl transition-all duration-300">
      
      <audio
        ref={audioRef}
        src={trackList[currentTrackIndex].url}
        loop
        preload="auto"
        onError={handleTrackError}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Spinning vinyl disk icon */}
      <div className="relative flex items-center justify-center cursor-pointer" onClick={togglePlay}>
        <Disc className={`w-5 h-5 sm:w-6 sm:h-6 text-[#64FFDA] ${isPlaying ? 'animate-spin-slow text-[#64FFDA]' : 'opacity-60'}`} />
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          {isPlaying && (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#64FFDA]"></span>
            </>
          )}
        </span>
      </div>

      {/* Track Label */}
      <div className="hidden sm:flex flex-col cursor-pointer" onClick={togglePlay}>
        <span className="text-xs font-semibold text-slate-200 tracking-wide">
          {isPlaying ? 'Playing Sound' : 'Tap to Play Sound'}
        </span>
        <span className="text-[10px] text-[#64FFDA] font-mono tracking-wider">
          {trackList[currentTrackIndex].name}
        </span>
      </div>

      {/* Equalizer Wave Visualizer */}
      {isPlaying && (
        <div className="hidden xs:flex items-end gap-0.5 h-4 px-1 cursor-pointer" onClick={togglePlay}>
          <span className="w-1 bg-[#64FFDA] rounded-full animate-[bounce_1s_infinite_100ms] h-2"></span>
          <span className="w-1 bg-[#FFD700] rounded-full animate-[bounce_1s_infinite_300ms] h-4"></span>
          <span className="w-1 bg-[#38BDF8] rounded-full animate-[bounce_1s_infinite_200ms] h-3"></span>
          <span className="w-1 bg-[#64FFDA] rounded-full animate-[bounce_1s_infinite_400ms] h-2"></span>
        </div>
      )}

      {/* Play / Pause Toggle Button */}
      <button
        onClick={togglePlay}
        className="p-2 sm:p-2.5 bg-[#64FFDA] hover:bg-[#52e0c4] text-[#0A192F] rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-neon-teal cursor-pointer"
        title={isPlaying ? 'Pause Music' : 'Play Background Sound'}
      >
        {isPlaying ? <Pause className="w-4 h-4 text-[#0A192F]" /> : <Play className="w-4 h-4 ml-0.5 text-[#0A192F]" />}
      </button>

      {/* Volume Control Section with Expanding Slider */}
      <div
        className="flex items-center pl-1 sm:pl-2 border-l border-[#233554]"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <button
          onClick={() => setShowVolumeSlider((prev) => !prev)}
          className="p-1 sm:p-1.5 text-slate-400 hover:text-[#64FFDA] transition-colors"
          title={isMuted ? 'Unmute Sound' : `Volume: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#64FFDA]" />
          )}
        </button>

        {/* Smooth Horizontal Expanding Volume Slider */}
        <div
          className={`flex items-center gap-1.5 overflow-hidden transition-all duration-300 ease-in-out ${
            showVolumeSlider ? 'max-w-[140px] opacity-100 ml-1 pr-1' : 'max-w-0 opacity-0 ml-0 pr-0 pointer-events-none'
          }`}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-16 sm:w-20 accent-[#64FFDA] h-1.5 bg-[#112240] rounded-lg cursor-pointer"
            title={`Volume Level: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
          />

          <span className="text-[10px] font-mono text-[#64FFDA] font-bold min-w-[24px] text-right">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>
      </div>

      {/* Disable / Close Audio Player */}
      <button
        onClick={() => {
          if (audioRef.current) audioRef.current.pause();
          setIsDisabled(true);
        }}
        className="p-1.5 text-slate-500 hover:text-red-400 transition-colors ml-1"
        title="Disable Music Player"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
