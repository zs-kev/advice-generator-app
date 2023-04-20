import React from 'react';

import './advice.css';

function Advice({ advice }) {
  return (
    <div className="advice">
      {/*<h1>Advice #{advice.id}</h1>
      <p>"{advice.advice}"</p>*/}
      <h1>Advice #117</h1>
      <p>
        “It is easy to sit up and take notice, what's difficult is
        getting up and taking action.”
      </p>
    </div>
  );
}

export default Advice;
