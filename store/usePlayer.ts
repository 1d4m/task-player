import { PlayList } from "@/types/domain/playlist/type";
import { create } from "zustand";

type State = {
  task: PlayList | null;
  isPlaying: boolean;
  intervalId: NodeJS.Timeout | null;
};

type Action = {
  setTask: (task: PlayList | null) => void;
  play: () => void;
  pause: () => void;
};

const initialState: State = {
  task: null,
  isPlaying: false,
  intervalId: null,
};

// Create your store, which includes both state and (optionally) actions
export const usePlayerStore = create<State & Action>((set, get) => ({
  ...initialState,
  setTask: (task) => set(() => ({ task: task })),
  play: () => {
    const { task, isPlaying } = get();
    if (!task || isPlaying) return;

    const intervalId = setInterval(() => {
      set((state) => {
        if (!state.task) return state;

        const newCurrentTime = state.task.currentTime + 1;
        // タスクが完了したら停止
        if (newCurrentTime >= state.task.originalTime) {
          clearInterval(state.intervalId!);
          return {
            ...state,
            isPlaying: false,
            intervalId: null,
            task: null,
          };
        }

        return {
          ...state,
          task: {
            ...state.task,
            currentTime: newCurrentTime,
          },
        };
      });
    }, 1000);

    set(() => ({
      isPlaying: true,
      intervalId: intervalId,
    }));
  },
  pause: () => {
    const { intervalId } = get();
    if (intervalId) {
      clearInterval(intervalId);
    }
    set(() => ({
      isPlaying: false,
      intervalId: null,
    }));
  },
}));
