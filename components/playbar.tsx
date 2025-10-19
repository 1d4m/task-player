"use client";

import { usePlayerStore } from "@/store/usePlayer";
import { secondsToMinutes } from "@/utils/time";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

export const Playbar = () => {
  const task = usePlayerStore((state) => state.task);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const play = usePlayerStore((state) => state.play);
  const pause = usePlayerStore((state) => state.pause);

  const [progress, setProgress] = useState(0);

  if (!task) return null;

  const { originalTime, currentTime } = task;

  return (
    <div className="h-[80px] w-full">
      <div className="w-full h-full bg-zinc-900 rounded-2xl py-4 flex flex-col items-center">
        {isPlaying ? (
          <button onClick={pause}>
            <Pause />
          </button>
        ) : (
          <button onClick={play}>
            <Play />
          </button>
        )}
        <div className="flex items-center gap-x-2">
          <p>{secondsToMinutes(currentTime)}</p>
          <div className="relative w-[400px] h-1 bg-zinc-700 rounded-full">
            <div
              className="absolute top-0 left-0 h-1 bg-white rounded-full transition-all duration-500 ease-linear"
              style={{
                width: `${(currentTime / originalTime) * 100}%`,
              }}
            ></div>
          </div>
          <p>{secondsToMinutes(originalTime)}</p>
        </div>
      </div>
    </div>
  );
};
