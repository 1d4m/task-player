import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react";
import { type HeaderColumn, Table } from "./components/Table";

type TaskRow = {
  label: React.ReactNode;
  title: React.ReactNode;
  spentAt: React.ReactNode;
};

type HeaderColumnKeys = TaskRow & { button: React.ReactNode };

export default function Home() {
  const headerColumns: HeaderColumn<
    HeaderColumnKeys,
    keyof HeaderColumnKeys
  >[] = [
    { key: "label", children: "#", className: "w-[40px]" },
    { key: "title", children: "タイトル" },
    { key: "spentAt", children: "経過時間", className: "w-[60px]" },
    { key: "button", children: "", className: "w-[40px]" },
  ];

  const bodyRows = [
    {
      id: "1",
      cells: {
        label: "1",
        title: "テスト",
        spentAt: "23:44",
        button: <button>...</button>,
      },
    },
    {
      id: "2",
      cells: {
        label: "2",
        title: "テスト",
        spentAt: "23:44",
        button: <button>...</button>,
      },
    },
    {
      id: "3",
      cells: {
        label: "3",
        title: "テスト",
        spentAt: "23:44",
        button: <button>...</button>,
      },
    },
  ];

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
        <div className="flex-1 w-full h-full bg-zinc-900 rounded-2xl px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-medium">😌 仕事</p>
            <button>
              <Plus />
            </button>
          </div>
          <Table headerColumns={headerColumns} bodyRows={bodyRows} />
        </div>
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
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-full">
        <div className="w-full h-full bg-zinc-900 rounded-2xl py-4 flex flex-col items-center">
          <div>
            <Play />
          </div>
          <div className="flex items-center gap-x-2">
            <p>0:00</p>
            <div className="w-[400px] h-1 bg-zinc-700 rounded-full"></div>
            <p>15:09</p>
          </div>
        </div>
      </div>
    </div>
  );
}
