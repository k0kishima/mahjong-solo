import React, { useEffect, useState } from 'react';
import { TileColor, TileNumber } from '@/types';

type Props = {
  id: number;
  tileColor: TileColor;
  tileNumber: TileNumber;
  selectTile: (tileIndex: number) => void;
};

export const Tile: React.FC<Props> = ({
  id,
  tileColor,
  tileNumber,
  selectTile,
}: Props) => {
  const [image, setImage] = useState('');

  const fileNamePrefix = (() => {
    switch (tileColor) {
      case 'MAN':
        return 'm';
      case 'PIN':
        return 'p';
      case 'SOU':
        return 's';
      case 'HONORS':
        return 'z';
      default:
        throw new TypeError('an unknown tile type have specified.');
    }
  })();

  const fileNameSuffix = (() => {
    switch (tileColor) {
      case 'MAN':
      case 'PIN':
      case 'SOU':
        return tileNumber;
      case 'HONORS':
        if (tileNumber > 7) {
          throw new TypeError('an invalid tile number have specfied.');
        }
        return tileNumber;
      default:
        throw new TypeError('an unknown tile type have specified.');
    }
  })();

  useEffect(() => {
    const fetchImage = async () => {
      const response = await import(
        `../assets/images/tiles/${fileNamePrefix}${fileNameSuffix}.gif`
      );
      setImage(response.default);
    };

    fetchImage();
  }, []);

  return (
    <div onClick={() => selectTile(id)}>
      <img src={image} />
    </div>
  );
};
