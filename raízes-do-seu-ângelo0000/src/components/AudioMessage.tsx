import React, { useState, useRef, useEffect } from 'react';
import { AUDIO_CONTENT } from '../data/content';
import { Play, Pause, Volume2, VolumeX, FileText, ChevronDown, ChevronUp, Mic, Radio, Gauge, Upload } from 'lucide-react';
import heroImg from '../assets/images/seu_angelo_hero_1785090965404.jpg';
import messageAudio from '../assets/audio/seu_angelo_mensagem.mp3';

export const AudioMessage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(74); // default fallback duration 1:14
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [audioUrl, setAudioUrl] = useState<string>(messageAudio);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Erro ao reproduzir o áudio:", err);
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#2D3B2D] text-[#FAF7F2] relative overflow-hidden">
      {/* HTML5 Audio Element for message audio file */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onLoadedMetadata={() => {
          if (audioRef.current && audioRef.current.duration) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      />

      {/* Decorative foliage accents */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#3D523A] rounded-full blur-2xl opacity-40" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#C89D3C] rounded-full blur-3xl opacity-10" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#3D523A] text-[#C89D3C] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#C89D3C]/30 mb-3">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>Mensagem em Áudio Oficial</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#FAF7F2] mb-3">
            {AUDIO_CONTENT.sectionTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#E8DFC9] leading-relaxed mb-2">
            {AUDIO_CONTENT.preText}
          </p>

          <p className="text-xs sm:text-sm text-[#D8CFC0] italic">
            {AUDIO_CONTENT.subText}
          </p>
        </div>

        {/* Custom Audio Player Box */}
        <div className="bg-[#1F2B1F]/95 border border-[#3D523A] rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            
            {/* Avatar & Play Status Badge */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C89D3C] shadow-lg">
                  <img
                    src={heroImg}
                    alt="Seu Ângelo Gravando Áudio"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {isPlaying && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-1 bg-[#C89D3C] text-[#1F2B1F] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-tight flex items-center gap-1 shadow">
                    <Mic className="w-3 h-3 animate-pulse" /> Tocando
                  </span>
                )}
              </div>
            </div>

            {/* Audio Controls & Timeline */}
            <div className="flex-1 w-full flex flex-col gap-3.5 text-center sm:text-left">
              
              {/* Title and Header Toolbar */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2.5">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FAF7F2] leading-tight flex items-center justify-center sm:justify-start gap-2">
                    Recado do Seu Ângelo
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C89D3C] font-medium mt-0.5">
                    {AUDIO_CONTENT.ctaInstruction}
                  </p>
                </div>

                {/* Secondary Controls (Speed & Mute & Upload) */}
                <div className="flex items-center justify-center gap-2 mt-1 sm:mt-0">
                  {/* Speed selector */}
                  <div className="flex items-center gap-1 bg-[#2D3B2D] px-2 py-1.5 rounded-xl border border-[#3D523A]">
                    <Gauge className="w-3.5 h-3.5 text-[#C89D3C] shrink-0" />
                    {[0.8, 1.0, 1.25].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => handleSpeedChange(spd)}
                        className={`text-[11px] font-bold px-2 py-1 rounded-lg cursor-pointer transition-all ${
                          playbackSpeed === spd
                            ? 'bg-[#C89D3C] text-[#1F2B1F] shadow'
                            : 'text-[#E8DFC9] hover:text-[#FAF7F2]'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>

                  {/* Volume toggle */}
                  <button
                    onClick={toggleMute}
                    className="p-2.5 rounded-xl bg-[#2D3B2D] text-[#E8DFC9] hover:text-[#FAF7F2] hover:bg-[#3D523A] transition-all cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
                    title={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#C89D3C]" />}
                  </button>

                  {/* File Upload button */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2.5 rounded-xl bg-[#2D3B2D] text-[#E8DFC9] hover:text-[#C89D3C] hover:bg-[#3D523A] transition-all cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
                    title="Carregar ou alterar arquivo de áudio"
                  >
                    <Upload className="w-4 h-4 text-[#C89D3C]" />
                  </button>
                </div>
              </div>

              {/* Progress Bar & Timeline */}
              <div className="space-y-1">
                <div className="flex-1 relative flex items-center h-7">
                  <input
                    type="range"
                    min="0"
                    max={duration || 138}
                    value={currentTime}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCurrentTime(val);
                      if (audioRef.current) {
                        audioRef.current.currentTime = val;
                      }
                    }}
                    className="w-full accent-[#C89D3C] h-2.5 bg-[#2D3B2D] rounded-lg cursor-pointer touch-pan-x"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#E8DFC9]/80 px-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Main Play / Pause CTA Button & Waveform */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="audio/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                
                <button
                  onClick={togglePlay}
                  className="w-full sm:w-auto bg-[#C89D3C] hover:bg-[#D4AF37] text-[#1F2B1F] font-bold px-6 py-3.5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-[0.98] min-h-[48px]"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 fill-current shrink-0" />
                      <span className="text-sm sm:text-base">Pausar Mensagem</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current ml-0.5 shrink-0" />
                      <span className="text-sm sm:text-base">Ouvir Mensagem do Seu Ângelo</span>
                    </>
                  )}
                </button>

                {/* Animated visualizer bars */}
                <div className="flex items-end justify-center gap-1.5 h-7 px-3 py-1 bg-[#182318] rounded-xl border border-[#2D3B2D] w-full sm:w-auto">
                  {[12, 24, 18, 28, 14, 22, 10, 26, 16, 20, 18, 24].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full bg-[#C89D3C] transition-all duration-300 ${
                        isPlaying ? 'animate-soundwave' : 'opacity-30'
                      }`}
                      style={{
                        height: isPlaying ? `${Math.max(6, (h * ((currentTime % 5) + 1)) / 3)}px` : `${h / 2.5}px`,
                        animationDelay: `${i * 0.08}s`
                      }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Toggle Transcript Drawer */}
          <div className="mt-5 pt-4 border-t border-[#3D523A]/60 flex flex-col items-center">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="w-full sm:w-auto bg-[#2D3B2D]/80 hover:bg-[#3D523A] px-4 py-2.5 rounded-xl border border-[#3D523A] text-xs sm:text-sm text-[#E8DFC9] hover:text-[#FAF7F2] flex items-center justify-center gap-2 font-medium transition-all cursor-pointer min-h-[44px]"
            >
              <FileText className="w-4 h-4 text-[#C89D3C] shrink-0" />
              <span>{showTranscript ? "Ocultar transcrição do áudio" : "Ler transcrição em texto"}</span>
              {showTranscript ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
            </button>

            {showTranscript && (
              <div className="mt-4 p-4 sm:p-7 bg-[#233223] rounded-2xl border border-[#C89D3C]/30 border-l-4 border-l-[#C89D3C] text-left w-full shadow-2xl animate-fadeIn space-y-3.5">
                <div className="flex items-center justify-between pb-2.5 border-b border-[#3D523A]">
                  <span className="text-[11px] sm:text-xs font-semibold text-[#C89D3C] uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" /> Transcrição da Mensagem
                  </span>
                  <span className="text-[11px] text-[#E8DFC9]/70 font-medium">Seu Ângelo Martins</span>
                </div>
                
                <div className="space-y-3 text-sm sm:text-base text-[#FAF7F2] font-serif leading-relaxed sm:leading-loose">
                  {AUDIO_CONTENT.transcriptText.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-[#F5EFE6] italic">
                      "{paragraph}"
                    </p>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#3D523A]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#C89D3C]">
                  <span className="font-serif italic text-[#E8DFC9]/80">Mensagem gravada com carinho</span>
                  <span className="font-semibold text-right sm:text-left">— Seu Ângelo Martins</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};


