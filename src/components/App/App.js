import React from 'react';

import { FetchAdvice } from '../../api/fetch-advice';

import './app.css';

import Advice from '../Advice';
import AdviceGeneratorButton from '../AdviceGeneratorButton';

function App() {
  const getAdvice = FetchAdvice();

  return (
    <div className="advice-container">
      {getAdvice.status === 'loading' && <p>Loading...</p>}
      {getAdvice.status === 'success' && (
        <Advice advice={getAdvice.advice.slip} />
      )}
      {getAdvice.status === 'error' && (
        <p className="error-state">
          Looks like something went wrong. Try again by pressing the
          button below
        </p>
      )}
      <AdviceGeneratorButton newAdvice={getAdvice.handleClick} />
    </div>
  );
}

export default App;
