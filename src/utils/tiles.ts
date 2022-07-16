import {
  ALL_TILE_COLORS,
  ALL_TILE_NUMBERS,
  Tile,
  TileColor,
  TileNumber,
} from '@/types';

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

export const serializeTiles = (tiles: Tile[]): string => {
  const numbersIndexedColor: { [key in TileColor]: TileNumber[] } = {
    MAN: [],
    PIN: [],
    SOU: [],
    HONORS: [],
  };

  for (const tile of tiles) {
    numbersIndexedColor[tile.tileColor].push(tile.tileNumber);
  }

  return Object.keys(numbersIndexedColor)
    .map((color) => {
      const numbers = numbersIndexedColor[color as TileColor];
      return numbers.length > 0
        ? numbers.join('') +
            _convertTileColorToSerializedMark(color as TileColor)
        : '';
    })
    .join('');
};

const _convertTileColorToSerializedMark = (color: TileColor) => {
  switch (color) {
    case 'MAN':
      return 'm';
    case 'PIN':
      return 'p';
    case 'SOU':
      return 's';
    case 'HONORS':
      return 'z';
  }
};
