import React from 'react';
import styled from 'styled-components';
import { Tile as TilePresentation } from './Tile';
import { Tile } from '@/types';

type Props = {
  tiles: Tile[];
  selectTile: (tileIndex: number) => void;
  currentSelectedTileId?: number;
};

export const Hand: React.FC<Props> = ({
  tiles,
  selectTile,
  currentSelectedTileId,
}: Props) => {
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

    .selected img {
      opacity: 0.5;
    }
  `;

  return (
    <Styled>
      <div className='tile-container'>
        {tiles.map((tile) => (
          <div
            className={currentSelectedTileId === tile.id ? 'selected' : ''}
            key={tile.id}
          >
            <TilePresentation {...tile} key={tile.id} selectTile={selectTile} />
          </div>
        ))}
      </div>
    </Styled>
  );
};
