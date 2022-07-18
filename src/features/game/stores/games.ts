import create from 'zustand';
import { createAllTiles } from '@/utils/tiles';
import { Tile } from '@/types';

type GameStore = {
  hand: Tile[];
  tsumoYama: Tile[];
  discardedTiles: Tile[];
  reset: () => void;
  discard: (discardTileId: number) => void;
  draw: () => void;
  // TODO: implement
  // wanPai: Tile[];
};

export const useGameStore = create<GameStore>((set) => ({
  tsumoYama: [],
  hand: [],
  discardedTiles: [],
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
  discard: (discardTileId: number) => {
    set((state) => ({
      ...state,
      hand: state.hand.filter((tile: Tile) => tile.id !== discardTileId),
      discardedTiles: [
        ...state.discardedTiles,
        // TODO: as Tile をやめたい
        state.hand.find((tile: Tile) => tile.id == discardTileId) as Tile,
      ],
    }));
  },
  draw: () => {
    set((state) => ({
      ...state,
      hand: [...state.hand.sort((a, b) => a.id - b.id), state.tsumoYama[0]],
      tsumoYama: state.tsumoYama.slice(1),
    }));
  },
}));
