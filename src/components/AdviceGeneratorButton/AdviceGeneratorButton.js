import React from 'react';

import ButtonIcon from './icon-dice.svg';
import './advice-button.css';

function AdviceGeneratorButton({ newAdvice }) {
  return (
    <button aria-label="generate new quote" onClick={newAdvice}>
      <img src={ButtonIcon} alt="Click to generate new quote" />
    </button>
  );
}

export default AdviceGeneratorButton;
