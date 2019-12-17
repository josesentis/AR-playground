import React, { useEffect, useState } from 'react';

import TextScene from '../../components/textScene';

const Scanner = () => {
  const [loaded, setLoaded] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setText('Some text');
    }, 1000);

    return () => clearTimeout(timer);
  });

  return loaded ? <TextScene text={text} /> : <p>Loading...</p>;
};

export default Scanner;