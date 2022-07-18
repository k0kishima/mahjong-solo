import React, { useEffect } from 'react';
import { Board } from './Board';
import { useGameStore } from '../stores/games';
import { getShanten } from '../api/getShanten';
import { serializeTiles } from '@/utils/tiles';

export const Game: React.FC = () => {
  const { hand, reset } = useGameStore();

  useEffect(() => {
    (async () => {
      if (hand.length > 0) {
        const shanten = await getShanten(serializeTiles(hand));
        if (shanten < 0) {
          // TODO: あがってたらページ移動
        }
      }
    })();
    reset();
  }, []);

  return <Board />;
};
