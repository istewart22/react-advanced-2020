import React, { useState } from 'react';

const ErrorExample = () => {
  const randomTitleText = 'Random title';
  const [title, setTitle] = useState(randomTitleText);

  const handleClick = () => {
    title === randomTitleText
      ? setTitle('Another random title')
      : setTitle(randomTitleText);
  };

  return (
    <>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
