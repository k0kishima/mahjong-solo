import React from 'react';
import styled from 'styled-components';
import { Tile as TilePresentation } from '@/components/Tile';
import { Tile } from '@/types';

type Props = {
  tiles: Tile[];
};

export const DiscardedTileList: React.FC<Props> = ({ tiles }: Props) => {
  const Styled = styled.div`
    .tile-container {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
    }
    .tile-container img {
      margin: 0px 3px;
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
        {tiles.map((tile) => (
          <TilePresentation
            {...tile}
            key={tile.id}
            selectTile={(dummy) => {
              dummy;
            }}
          />
        ))}
      </div>
    </Styled>
  );
};
