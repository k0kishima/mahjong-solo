export const ALL_TILE_COLORS = ['MAN', 'PIN', 'SOU', 'HONORS'] as const;
export type TileColor = typeof ALL_TILE_COLORS[number];

export const ALL_TILE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
export type TileNumber = typeof ALL_TILE_NUMBERS[number];

export type Tile = {
  readonly id: number;
  readonly tileColor: TileColor;
  readonly tileNumber: TileNumber;
};
