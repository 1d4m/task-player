"use client";

import { Ellipsis, Play, Plus } from "lucide-react";
import { HeaderColumn, Table } from "@/app/components/ui/Table";
import { useModal } from "@/app/components/ui/Dialog/hooks/useModal";
import { Dialog } from "@/app/components/ui/Dialog";
import { useMemo, useState } from "react";
import { mockData } from "./mockData";
import { Select } from "../../ui/Select";
import { TIME } from "@/const/time";
import { usePlayerStore } from "@/store/usePlayer";
import { PlayList as PlayListType } from "@/types/domain/playlist/type";
import { secondsToMinutes } from "@/utils/time";

type TaskRow = {
  label: React.ReactNode;
  title: React.ReactNode;
  originalTime: React.ReactNode;
};

type HeaderColumnKeys = TaskRow & { button: React.ReactNode };

const headerColumns: HeaderColumn<HeaderColumnKeys, keyof HeaderColumnKeys>[] =
  [
    { key: "label", children: "#", className: "w-[40px]" },
    { key: "title", children: "タイトル" },
    { key: "originalTime", children: "予定時間", className: "w-[60px]" },
    { key: "button", children: "", className: "w-[40px]" },
  ];

export const PlayList = () => {
  const { isOpen, setIsOpen } = useModal();

  const [data, setData] = useState(mockData);
  const setTask = usePlayerStore((state) => state.setTask);
  //
  const [value, setValue] = useState("");
  const [min, setMin] = useState("");

  // ✅ 時間を "19:00" のようにフォーマット
  const formatTime = (time: string) => {
    if (!time) return "";
    const num = Number(time);
    // "9" → "09:00", "19" → "19:00"
    return `${num.toString().padStart(2, "0")}:00`;
  };

  // タスクの追加処理
  // const handleAddTask = async () => {
  //   setData([
  //     ...data,
  //     {
  //       id: crypto.randomUUID(),
  //       title: value,
  //       originalTime: formatTime(min),
  //       remainingTime: "",
  //     },
  //   ]);
  // };

  const handlePlay = (data: PlayListType) => {
    // グローバルステートにセット
    setTask(data);
  };

  const bodyRows = useMemo(() => {
    return data.map((d) => {
      return {
        id: d.id,
        cells: {
          label: (
            <button
              className="p-2 rounded-md hover:bg-zinc-800 cursor-pointer"
              onClick={() => handlePlay(d)}
            >
              <Play className="text-zinc-400 size-3.5" />
            </button>
          ),
          title: d.title,
          originalTime: secondsToMinutes(d.originalTime),
          button: (
            <button className="p-2 rounded-md hover:bg-zinc-800 cursor-pointer">
              <Ellipsis className="text-zinc-400 size-5" />
            </button>
          ),
        },
      };
    });
  }, [data]);

  return (
    <>
      <div className="flex-1 w-full h-full bg-zinc-900 rounded-2xl px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-medium">😌 仕事</p>
          <button type="button" onClick={() => setIsOpen(true)}>
            <Plus />
          </button>
        </div>
        <Table headerColumns={headerColumns} bodyRows={bodyRows} />
      </div>
      <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
        <form>
          <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div>
            <label>時間の指定（分）</label>
            <Select
              items={[...TIME]}
              value={min}
              onValueChange={(value) => setMin(value)}
            />
          </div>
          {/* <button type="button" onClick={handleAddTask}>
            add
          </button> */}
        </form>
      </Dialog>
    </>
  );
};
