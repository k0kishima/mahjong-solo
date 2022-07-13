import React from 'react';
import styled from 'styled-components';
import { Hand } from '@/components';
import { Tile } from '@/types';

const tiles: Tile[] = [
  { tileColor: 'MAN', tileNumber: 2 },
  { tileColor: 'MAN', tileNumber: 3 },
  { tileColor: 'MAN', tileNumber: 6 },
  { tileColor: 'MAN', tileNumber: 7 },
  { tileColor: 'MAN', tileNumber: 7 },
  { tileColor: 'PIN', tileNumber: 2 },
  { tileColor: 'PIN', tileNumber: 3 },
  { tileColor: 'PIN', tileNumber: 9 },
  { tileColor: 'PIN', tileNumber: 9 },
  { tileColor: 'SOU', tileNumber: 2 },
  { tileColor: 'SOU', tileNumber: 3 },
  { tileColor: 'SOU', tileNumber: 4 },
  { tileColor: 'SOU', tileNumber: 5 },
  { tileColor: 'SOU', tileNumber: 6 },
];

export const Board: React.FC = () => {
  return (
    <Styled>
      <div className='main'></div>
      <div className='hand'>
        <Hand tiles={tiles} />
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
