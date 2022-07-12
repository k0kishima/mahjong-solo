import React from 'react';
import styled from 'styled-components';
import { Tile as TilePresentation } from './Tile';
import { Tile } from '@/types';

type Props = {
  tiles: Tile[];
};

export const Hand: React.FC<Props> = ({ tiles }: Props) => {
  const Styled = styled.div`
    .tile-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tile-container img {
      width: auto;
      height: auto;
    }

    @media screen and (orientation: portrait) {
      .tile-container img {
        max-height: 7vh;
        max-width: 7vw;
      }
    }

    @media screen and (orientation: landscape) {
      .tile-container img {
        max-height: 10vh;
      }
    }
  `;

  return (
    <Styled>
      <div className='tile-container'>
        {tiles.map((tile, i) => (
          <TilePresentation {...tile} key={i} />
        ))}
      </div>
    </Styled>
  );
};
