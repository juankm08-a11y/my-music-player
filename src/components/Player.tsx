"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  PauseCircle,
} from "lucide-react";
import Image from "next/image";

interface Song {
  title: string;
  artist: string;
  src: string;
  img: string;
}

const defaultSongs: Song[] = [
  {
    title: "Secrets",
    artist: "One Republic",
    src: "/assets/music/Secrets.mp3",
    img: "/assets/images/secrets.png",
  },
  {
    title: "Yellow",
    artist: "Coldplay",
    src: "/assets/music/Yellow.mp3",
    img: "/assets/images/yellow.png",
  },
  {
    title: "En Algun Lugar",
    artist: "Ducan Dhu",
    src: "/assets/music/EnalgunLugar.mp3",
    img: "/assets/images/enalgunlugar.png",
  },
];

export function Player({ songList = defaultSongs }: { songList?: Song[] }) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState({ cur: 0, dur: 0 });
  const audioRef = useRef<HTMLAudioElement>(null);

  const fmt = (t: number) =>
    `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setTime({ cur: a.currentTime, dur: a.duration || 0 });
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onTime);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onTime);
    };
  }, []);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.play();
    } else {
      a.pause();
    }
  }, [playing, idx]);

  const handlePrev = () => setIdx((i) => (i > 0 ? i - 1 : songList.length - 1));
  const handleNext = () => {
    setIdx((i) => (i + 1) % songList.length);
    setPlaying(true);
  };

  const song = songList[idx];

  return (
    <div className="max-w-sm mx-auto mt-12 bg-white rounded-xl shadow p-6 flex flex-col items-center">
      <Image
        src={song.img}
        alt={song.title}
        width={160}
        height={224}
        className="object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold">{song.title}</h3>
      <p className="text-gray-500 text-sm mb-4">{song.artist}</p>

      <div className="w-full mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>{fmt(time.cur)}</span>
          <span>{fmt(time.dur)}</span>
        </div>
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500"
            style={{
              width: `${(time.cur / (time.dur || 1)) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={handlePrev}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setPlaying((p) => !p)}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          aria-label={playing ? "Pausar" : "Reproducir"}
        >
          {playing ? (
            <PauseCircle size={48} className="text-white" />
          ) : (
            <PlayCircle size={48} className="text-white" />
          )}
        </button>
        <button
          onClick={handleNext}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <audio ref={audioRef} src={song.src} onEnded={() => handleNext()} />
    </div>
  );
}
