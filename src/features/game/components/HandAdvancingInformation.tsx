import React from 'react';
import styled from 'styled-components';
import { Tile as TilePresentation } from '@/components/Tile';
import { Tile } from '@/types';

type Props = {
  tiles: Tile[];
};

export const HandAdvancingInformation: React.FC<Props> = ({ tiles }: Props) => {
  const Styled = styled.div`
    .tile-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      margin: 10px;
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
              return dummy;
            }}
          />
        ))}
      </div>
    </Styled>
  );
};
