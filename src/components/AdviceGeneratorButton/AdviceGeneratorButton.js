import React from 'react';

import ButtonIcon from './icon-dice.svg';
import './advice-button.css';

function AdviceGeneratorButton({ newAdvice, appState }) {
  console.log(appState);
  return (
    <button
      aria-label="generate new quote"
      onClick={newAdvice}
      disabled={appState === 'loading' ? true : false}
    >
      <img
        src={ButtonIcon}
        alt="Click to generate new quote"
        className={
          appState === 'loading' ? 'loading' : 'done-loading'
        }
      />
    </button>
  );
}

export default AdviceGeneratorButton;
