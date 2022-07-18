import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CompleteAnimation } from '@/components/CompleteAnimation';

export const GameResult: React.FC = () => {
  return (
    <Styled>
      <div className='animation-container'>
        <div className='animation'>
          <Link to='/'>
            <CompleteAnimation />
          </Link>
        </div>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
  background-color: green;

  .animation-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .animation {
    max-width: 30vw;
  }
`;
