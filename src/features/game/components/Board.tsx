import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModal } from 'react-hooks-use-modal';
import { serializeTiles } from '@/utils/tiles';
import { Hand } from '@/components';
import { Tile } from '@/types';
import { useGameStore } from '../stores/games';
import { getShantenAdvanceableTiles } from '../api/getShantenAdvanceableTiles';
import { getShanten } from '../api/getShanten';
import { HandAdvancingInformation } from './HandAdvancingInformation';

export const Board: React.FC = () => {
  const { hand } = useGameStore();
  const [selectedTileId, setSelectedTileId] = useState<number | undefined>(
    undefined
  );
  const [shanten, setShanten] = useState<number | undefined>(undefined);
  const [nextShanten, setNextShanten] = useState<number | undefined>(undefined);
  const [shantenAdvanceableTiles, setShantenAdvanceableTiles] = useState<
    Tile[]
  >([]);
  const [Modal, openModal, closeModal, isOpen] = useModal('root', {
    preventScroll: true,
  });

  useEffect(() => {
    if (selectedTileId) {
      (async () => {
        setShanten(await getShanten(serializeTiles(hand)));

        const serializedAfterDiscardHand = serializeTiles(
          hand.filter((tile: Tile) => tile.id !== selectedTileId)
        );
        setShantenAdvanceableTiles(
          await getShantenAdvanceableTiles(serializedAfterDiscardHand)
        );
        setNextShanten(await getShanten(serializedAfterDiscardHand));
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
        <HandAdvancingInformation
          tiles={shantenAdvanceableTiles}
          currentShanten={shanten}
          nextShanten={nextShanten}
        />
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
