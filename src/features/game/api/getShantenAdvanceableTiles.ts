import { axios } from '@/lib/axios';
import { Tile, TileColor, TileNumber } from '@/types';

export const getShantenAdvanceableTiles = async (
  oneLineStringtiles: string
): Promise<Tile[]> => {
  const response = await axios.get<GetShantenAdvanceableTilesResponse>(
    `/hands/${oneLineStringtiles}/shanten_advanceable_tiles`
  );
  return response.data.shanten_advanceable_tiles.map(
    (tileAttrTuple: [TileColor, TileNumber], i: number) => {
      const [tileColor, tileNumber] = tileAttrTuple;
      return { id: i, tileColor: tileColor, tileNumber: tileNumber };
    }
  );
};

type GetShantenAdvanceableTilesResponse = {
  shanten_advanceable_tiles: [[TileColor, TileNumber]];
};
