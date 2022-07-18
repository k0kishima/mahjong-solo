import React from 'react';
import styled from 'styled-components';
import { Tile as TilePresentation } from '@/components/Tile';
import { Tile } from '@/types';

type Props = {
  tiles: Tile[];
  currentShanten?: number;
  nextShanten?: number;
};

export const HandAdvancingInformation: React.FC<Props> = ({
  tiles,
  currentShanten,
  nextShanten,
}: Props) => {
  const Styled = styled.div`
    color: white;
    .shanten {
      margin: 10px;
    }
    .ukeire {
      margin-left: 10px;
      margin-bottom: 5px;
    }
    .strong {
      color: red;
      font-size: large;
      font-weight: bold;
    }
    .tile-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    img {
      margin: 10px;
    }
  `;

  return (
    <Styled>
      <div className='shanten'>
        <span>{currentShanten}シャンテン</span>
        {currentShanten !== nextShanten && (
          <>
            → <span className='strong'>{nextShanten}</span>シャンテン
          </>
        )}
        <br />
      </div>
      <div className='ukeire'>受け入れ</div>
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
