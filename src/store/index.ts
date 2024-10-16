// src/store/useStore.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

interface BearState {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}

// Wrap Zustand store with Redux DevTools middleware
export const useStore = create<BearState>()(
    devtools(
        (set) => ({
            bears: 0,
            increasePopulation: () => {
                console.log("Increasing bear population");
                set((state) => ({ bears: state.bears + 1 }));
            },
            removeAllBears: () => {
                console.log("Removing all bears");
                set({ bears: 0 });
            },
        }),
        { name: 'BearStore' }
    )
);
