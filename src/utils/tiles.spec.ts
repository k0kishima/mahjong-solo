import { Tile } from '@/types';
import { serializeTiles } from './tiles';

describe('serializeTiles(', () => {
  it('serialize tiles to an one line string', () => {
    const tiles: Tile[] = [
      { id: 4, tileColor: 'MAN', tileNumber: 2 },
      { id: 8, tileColor: 'MAN', tileNumber: 3 },
      { id: 20, tileColor: 'MAN', tileNumber: 6 },
      { id: 25, tileColor: 'MAN', tileNumber: 7 },
      { id: 26, tileColor: 'MAN', tileNumber: 7 },
      { id: 40, tileColor: 'PIN', tileNumber: 2 },
      { id: 44, tileColor: 'PIN', tileNumber: 3 },
      { id: 68, tileColor: 'PIN', tileNumber: 9 },
      { id: 69, tileColor: 'PIN', tileNumber: 9 },
      { id: 76, tileColor: 'SOU', tileNumber: 2 },
      { id: 80, tileColor: 'SOU', tileNumber: 3 },
      { id: 84, tileColor: 'SOU', tileNumber: 4 },
      { id: 88, tileColor: 'SOU', tileNumber: 5 },
      { id: 92, tileColor: 'SOU', tileNumber: 6 },
    ];

    expect(serializeTiles(tiles)).toEqual('23677m2399p23456s');
  });
});
