import React, { useEffect } from 'react';
import styled from 'styled-components';
import { serializeTiles } from '@/utils/tiles';
import { Hand } from '@/components';
import { useGameStore } from '../stores/games';
import { getShanten } from '../api/getShanten';

export const Board: React.FC = () => {
  const { hand } = useGameStore();

  useEffect(() => {
    (async () => {
      // TODO: 上がってたらページ移動
      if (hand.length > 0) {
        const shanten = await getShanten(serializeTiles(hand));
      }
    })();
  }, []);

  return (
    <Styled>
      <div className='main'></div>
      <div className='hand'>
        <Hand tiles={hand} />
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
