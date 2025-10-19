"use client";

import { Ellipsis, Plus } from "lucide-react";
import { HeaderColumn, Table } from "@/app/components/ui/Table";
import { useModal } from "@/app/components/ui/Dialog/hooks/useModal";
import { Dialog } from "@/app/components/ui/Dialog";

type TaskRow = {
  label: React.ReactNode;
  title: React.ReactNode;
  spentAt: React.ReactNode;
};

type HeaderColumnKeys = TaskRow & { button: React.ReactNode };

const headerColumns: HeaderColumn<HeaderColumnKeys, keyof HeaderColumnKeys>[] =
  [
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
      title: "通知一覧画面_UI実装",
      spentAt: "23:44",
      button: (
        <button className="p-2 rounded-md hover:bg-zinc-800 cursor-pointer">
          <Ellipsis className="text-zinc-400 size-5" />
        </button>
      ),
    },
  },
  {
    id: "2",
    cells: {
      label: "2",
      title: "通知一覧画面_ロジック実装",
      spentAt: "23:44",
      button: (
        <button className="p-2 rounded-md hover:bg-zinc-800">
          <Ellipsis size={20} />
        </button>
      ),
    },
  },
  {
    id: "3",
    cells: {
      label: "3",
      title: "テスト",
      spentAt: "23:44",
      button: (
        <button className="p-2 rounded-md hover:bg-zinc-800">
          <Ellipsis size={20} />
        </button>
      ),
    },
  },
];

export const PlayListDetail = () => {
  const { isOpen, setIsOpen, closeModal } = useModal();

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
        <div>こんにちは</div>
      </Dialog>
    </>
  );
};
