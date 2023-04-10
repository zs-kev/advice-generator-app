import React from 'react';

function Advice({ advice }) {
  return (
    <div>
      <h1>Advice #{advice.id}</h1>
      <p>"{advice.advice}"</p>
    </div>
  );
}

export default Advice;
