import create from 'zustand';
import { createAllTiles } from '@/utils/tiles';
import { Tile } from '@/types';

type GameStore = {
  hand: Tile[];
  tsumoYama: Tile[];
  reset: () => void;
  // TODO: implement
  // tsumo: () => void,
  // kiri: () => void,
  // ripai: () => void,
  //wanPai: Tile[];
};

export const useGameStore = create<GameStore>((set) => ({
  tsumoYama: [],
  hand: [],
  reset: () => {
    const allTiles = createAllTiles();

    set((state) => ({
      ...state,
      hand: [
        ...allTiles.slice(0, 13).sort((a, b) => a.id - b.id),
        allTiles[13],
      ],
      tsumoYama: allTiles.slice(14, -1),
    }));
  },
}));
