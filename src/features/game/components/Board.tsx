import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { serializeTiles } from '@/utils/tiles';
import { Hand } from '@/components';
import { useGameStore } from '../stores/games';
import { getShanten } from '../api/getShanten';
import { Tile } from '@/types';

export const Board: React.FC = () => {
  const { hand } = useGameStore();
  const [selectedTileId, setSelectedTileId] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      // TODO: 上がってたらページ移動
      if (hand.length > 0) {
        const shanten = await getShanten(serializeTiles(hand));
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedTileId) {
      const one_line_string_tiles = serializeTiles(
        hand.filter((tile: Tile) => tile.id !== selectedTileId)
      );
      alert(one_line_string_tiles);
    }
  }, [selectedTileId]);

  const selectTile = (tileId: number) => {
    if (selectedTileId === tileId) {
      // TODO: implement
      alert('discard and draw a tile');
    } else {
      setSelectedTileId(tileId);
    }
  };

  return (
    <Styled>
      <div className='main'></div>
      <div className='hand'>
        <Hand tiles={hand} selectTile={selectTile} />
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  background-color: green;

  @media screen and (orientation: portrait) {
    .main {
      height: 93vh;
    }
    .hand {
      height: 7vh;
    }
  }

  @media screen and (orientation: landscape) {
    .main {
      height: 90vh;
    }
    .hand {
      height: 10vh;
    }
  }
`;
