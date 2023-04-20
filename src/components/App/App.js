import React from 'react';

import { FetchAdvice } from '../../api/fetch-advice';

import './app.css';
import DividerDesktop from './pattern-divider-desktop.svg';
import DividerMobile from './pattern-divider-mobile.svg';

import Advice from '../Advice';
import AdviceGeneratorButton from '../AdviceGeneratorButton';

function App() {
  const getAdvice = FetchAdvice();

  return (
    <div className="advice-container">
      {getAdvice.status === 'loading' && <p>Generating Advice...</p>}
      {getAdvice.status === 'success' && (
        <Advice advice={getAdvice.advice.slip} />
      )}
      {getAdvice.status === 'error' && (
        <p className="error-state">
          Looks like something went wrong. Try again by pressing the
          button below
        </p>
      )}
      <picture>
        <source srcSet={DividerMobile} media="(max-width: 583px)" />
        <img className="divider" src={DividerDesktop} alt="divider" />
      </picture>
      <AdviceGeneratorButton newAdvice={getAdvice.handleClick} />
    </div>
  );
}

export default App;
