import { ALL_TILE_COLORS, ALL_TILE_NUMBERS, Tile } from '@/types';

export const createAllTiles = (shuffle = true): Tile[] => {
  const tiles: Tile[] = [];
  let id = 0;

  for (const color of ALL_TILE_COLORS) {
    for (const number of ALL_TILE_NUMBERS) {
      for (const _ of [1, 2, 3, 4]) {
        tiles.push({ id: id++, tileColor: color, tileNumber: number });
      }
    }
  }

  if (shuffle) {
    tiles.sort(() => {
      return Math.random() - 0.5;
    });
  }

  return tiles.filter((tile) => tile.id < 136);
};
