import React from 'react';

const url = 'https://api.adviceslip.com/advice';

export function FetchAdvice() {
  const [status, setStatus] = React.useState('idle');
  const [advice, setAdvice] = React.useState({});

  async function getAdvice() {
    try {
      setStatus('loading');
      const response = await fetch(url);
      const json = await response.json();
      setAdvice(json);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  React.useEffect(() => {
    getAdvice();
  }, []);

  function handleClick() {
    getAdvice();
  }

  return { status, advice, handleClick };
}
