import React, { useEffect, useState } from 'react';
import { TileType, TileNumber } from '@/types';

type Props = {
  tileType: TileType;
  tileNumber: TileNumber;
};

export const Tile: React.FC<Props> = ({ tileType, tileNumber }: Props) => {
  const [image, setImage] = useState('');

  const fileNamePrefix = (() => {
    switch (tileType) {
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
    switch (tileType) {
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

  return <img src={image} />;
};
