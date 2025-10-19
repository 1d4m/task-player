"use client";

import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react";
import { PlayList } from "./components/domain/playlist";
import { Playbar } from "@/components/playbar";

export default function Home() {
  return (
    <div className="px-10 py-20 w-full h-screen flex-col flex gap-6">
      <div className="font-mono flex gap-x-6 justify-between items-center w-full h-[calc(100vh-180px)]">
        <div className="shrink-0 w-[300px] bg-zinc-900 h-full rounded-2xl px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-medium">Playlist</p>
            <button>
              <Plus />
            </button>
          </div>
          <div className="flex items-center gap-x-1 p-1 rounded-md hover:bg-zinc-700">
            <button className="p-1.5 rounded-md text-xs hover:bg-zinc-800">
              😌
            </button>
            <p className="text-sm">仕事</p>
          </div>
          <div className="flex items-center gap-x-1 p-1 rounded-md hover:bg-zinc-700">
            <button className="p-1.5 rounded-md text-xs hover:bg-zinc-800">
              📅
            </button>
            <p className="text-sm">計画</p>
          </div>
          <div className="flex items-center gap-x-1 p-1 rounded-md hover:bg-zinc-700">
            <button className="p-1.5 rounded-md text-xs hover:bg-zinc-800">
              💪
            </button>
            <p className="text-sm">運動</p>
          </div>
        </div>
        <PlayList />
        <div className="shrink-0 w-[300px] h-full bg-zinc-900 rounded-2xl px-4 py-6">
          <p className="mb-4">Log</p>
          <div className="flex items-center justify-between">
            <button>
              <ChevronLeft />
            </button>
            <p>today</p>
            <button>
              <ChevronRight />
            </button>
          </div>
          <div>
            <p className="">4時間25分</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-x-2">
              <div className="shrink-0 my-2 w-1 h-1 bg-zinc-400" />
              <p className="text-sm text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                <span className="italic"> / 1hour ago</span>
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="shrink-0 my-2 w-1 h-1 bg-zinc-400" />
              <p className="text-sm text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                <span className="italic"> / 1hour ago</span>
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="shrink-0 my-2 w-1 h-1 bg-zinc-400" />
              <p className="text-sm text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                <span className="italic"> / 1hour ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Playbar />
    </div>
  );
}
