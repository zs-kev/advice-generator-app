import React from 'react';

import { FetchAdvice } from '../../api/fetch-advice';

import Advice from '../Advice';
import AdviceGeneratorButton from '../AdviceGeneratorButton';

function App() {
  const getAdvice = FetchAdvice();
  console.log(getAdvice);

  return (
    <div>
      {getAdvice.status === 'loading' && <p>Loading...</p>}
      {getAdvice.status === 'success' && (
        <Advice advice={getAdvice.advice.slip} />
      )}
      <AdviceGeneratorButton newAdvice={getAdvice.handleClick} />
    </div>
  );
}

export default App;
