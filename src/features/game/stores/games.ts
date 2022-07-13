import create from 'zustand';
import { Tile } from '@/types';

type GameStore = {
  tsumoYama: Tile[];
  wanPai: Tile[];
  hand: Tile[];
  reset: () => void;
  // TODO: implement
  // tsumo: () => void,
  // kiri: () => void,
  // ripai: () => void,
};

export const useGameStore = create<GameStore>((set) => ({
  tsumoYama: [],
  wanPai: [],
  hand: [],
  reset: () => {
    const tiles: Tile[] = [
      { tileColor: 'MAN', tileNumber: 2 },
      { tileColor: 'MAN', tileNumber: 3 },
      { tileColor: 'MAN', tileNumber: 6 },
      { tileColor: 'MAN', tileNumber: 7 },
      { tileColor: 'MAN', tileNumber: 7 },
      { tileColor: 'PIN', tileNumber: 2 },
      { tileColor: 'PIN', tileNumber: 3 },
      { tileColor: 'PIN', tileNumber: 9 },
      { tileColor: 'PIN', tileNumber: 9 },
      { tileColor: 'SOU', tileNumber: 2 },
      { tileColor: 'SOU', tileNumber: 3 },
      { tileColor: 'SOU', tileNumber: 4 },
      { tileColor: 'SOU', tileNumber: 5 },
      { tileColor: 'SOU', tileNumber: 6 },
    ];

    set((state) => ({ ...state, hand: tiles }));
  },
}));
