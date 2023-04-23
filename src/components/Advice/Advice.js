import React from 'react';

import './advice.css';

function Advice({ advice }) {
  return (
    <div className="advice">
      <h1>Advice #{advice.id}</h1>
      <p>"{advice.advice}"</p>
    </div>
  );
}

export default Advice;
