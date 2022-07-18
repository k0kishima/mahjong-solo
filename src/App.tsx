import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from '@/features/game';
import { GameResult } from '@/features/check';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Game />} />
        <Route path={`/result`} element={<GameResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
