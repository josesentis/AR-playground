import React, { useEffect, useState } from 'react';

import ImageScene from '../../components/imageScene';

import poster from './poster.png';

const Scanner = () => {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setSrc(poster);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return loaded ? <ImageScene src={src} /> : <p>Loading...</p>;
};

export default Scanner;