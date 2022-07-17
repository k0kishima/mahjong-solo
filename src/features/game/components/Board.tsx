import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModal } from 'react-hooks-use-modal';
import { serializeTiles } from '@/utils/tiles';
import { Hand } from '@/components';
import { useGameStore } from '../stores/games';
import { getShanten } from '../api/getShanten';
import { Tile } from '@/types';
import { getShantenAdvanceableTiles } from '../api/getShantenAdvanceableTiles';
import { HandAdvancingInformation } from './HandAdvancingInformation';

export const Board: React.FC = () => {
  const { hand } = useGameStore();
  const [selectedTileId, setSelectedTileId] = useState<number | undefined>(
    undefined
  );
  const [shantenAdvanceableTiles, setShantenAdvanceableTiles] = useState<
    Tile[]
  >([]);
  const [Modal, openModal, closeModal, isOpen] = useModal('root', {
    preventScroll: true,
  });

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
      const oneLineStringtiles = serializeTiles(
        hand.filter((tile: Tile) => tile.id !== selectedTileId)
      );
      (async () => {
        const tiles = await getShantenAdvanceableTiles(oneLineStringtiles);
        setShantenAdvanceableTiles(tiles);
        console.log(tiles);
      })();
    }
  }, [selectedTileId]);

  const selectTile = (tileId: number) => {
    if (selectedTileId === tileId) {
      // TODO: implement
      alert('discard and draw a tile');
    } else {
      setSelectedTileId(tileId);
      openModal();
    }
  };

  return (
    <Styled>
      <div className='main'></div>
      <div className='hand'>
        <Hand tiles={hand} selectTile={selectTile} />
      </div>
      <Modal>
        <HandAdvancingInformation tiles={shantenAdvanceableTiles} />
      </Modal>
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
