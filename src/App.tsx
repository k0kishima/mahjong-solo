import React from 'react';
import styled from 'styled-components';
import { Hand } from '@/components';
import { Tile } from '@/types';

const tiles: Tile[] = [
  { tileType: 'MAN', tileNumber: 2 },
  { tileType: 'MAN', tileNumber: 3 },
  { tileType: 'MAN', tileNumber: 6 },
  { tileType: 'MAN', tileNumber: 7 },
  { tileType: 'MAN', tileNumber: 7 },
  { tileType: 'PIN', tileNumber: 2 },
  { tileType: 'PIN', tileNumber: 3 },
  { tileType: 'PIN', tileNumber: 9 },
  { tileType: 'PIN', tileNumber: 9 },
  { tileType: 'SOU', tileNumber: 2 },
  { tileType: 'SOU', tileNumber: 3 },
  { tileType: 'SOU', tileNumber: 4 },
  { tileType: 'SOU', tileNumber: 5 },
  { tileType: 'SOU', tileNumber: 6 },
];

function App() {
  return (
    <Styled>
      <div className='main'></div>
      <div className='hand'>
        <Hand tiles={tiles} />
      </div>
    </Styled>
  );
}

export default App;

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
