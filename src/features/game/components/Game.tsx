import React, { useEffect } from 'react';
import { Board } from './Board';
import { useGameStore } from '../stores/games';

export const Game: React.FC = () => {
  const { reset } = useGameStore();

  useEffect(() => {
    reset();
  }, []);

  return <Board />;
};
