export const ALL_TILE_TYPES = ['MAN', 'PIN', 'SOU', 'HONORS'] as const;
export type TileType = typeof ALL_TILE_TYPES[number];

export const ALL_TILE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type TileNumber = typeof ALL_TILE_NUMBERS[number];

export type Tile = {
  readonly tileType: TileType;
  readonly tileNumber: TileNumber;
};
